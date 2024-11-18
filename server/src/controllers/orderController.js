const Order = require("../models/order");
const Product = require("../models/product");
const Store = require("../models/store");
const users = require("../models/users");

const Create = async (req, res, next) => {
  const { id } = req.currentUser;
  const {
    product,
    stress,
    store,
    phone,
    province,
    houseNumber,
    city,
    revicerName,
    active,
  } = req.body;
  try {
    const order = new Order({
      user: id,
      product: product,
      store: store,
      phone,
      province,
      houseNumber,
      city,
      stress,
      revicerName,
      active,
    });
    const savedData = await order.save();
    res.json(savedData);
  } catch (e) {
    next(e);
  }
};
const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { stress, phone, province, houseNumber, city, revicerName, status } =
    req.body;

  try {
    const findOrder = await Order.findById(id);
    if (findOrder) {
      const findProduct = await Product.findById(findOrder.product._id);
      if (findProduct) {
        const findUser = users.findById(findOrder.user._id);
        if (findUser && status === "Bị hủy") {
          const updateUser = users.findByIdAndUpdate(
            findUser._id,
            {
              deposit:
                findUser.deposit +
                Number(findProduct?.price) * Number(findOrder.quantity),
            },
            { new: true }
          );
          console.log(updateUser);
        }
      }
    }
    const order = await Order.findByIdAndUpdate(
      id,
      {
        phone,
        province,
        houseNumber,
        city,
        stress,
        revicerName,
        status,
      },
      { new: true }
    );
    console.log(order);
    res.json(order);
  } catch (e) {
    next(e);
  }
};
const List = async (req, res, next) => {
  try {
    const orders = await Order.find().populate({
      path: "product",
      select: "title price",
    });;
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const processPayment = async (req, res, next) => {
  const { id } = req.currentUser;
  const { selectedAddress, productsInCart } = req.body;
  if (!selectedAddress || !productsInCart) {
    return res.status(400).json({
      err: 1,
      msg: "Missing input data",
    });
  }

  try {
    const findUser = await users.findById(id).populate({
      path: "cart",
      populate: [
        { path: "product", select: "title price photos" },
        { path: "store", select: "inforByStore" },
        { path: "user", select: "role" },
      ],
    });

    if (!findUser) {
      return res.status(404).json({
        err: 1,
        msg: "User not found",
      });
    }
    let totalPrice = 0;
    productsInCart.forEach((item) => {
      const productPrice = item.product?.price || 0;
      totalPrice += productPrice * item?.quantity; // Tính tổng giá trị cần thanh toán
    });
    if (findUser?.deposit < totalPrice) {
      return res.status(400).json({
        err: 1,
        msg: "Không đủ tiền để thanh toán",
      });
    }
    const newDeposit = findUser?.deposit - totalPrice;

    const paymentSuccess = true;

    if (paymentSuccess) {
      const orderData = productsInCart.map((item) => ({
        user: id,
        product: item.product || item?._id,
        store: item.store || item.store?._id,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        phone: selectedAddress.phone,
        province: selectedAddress.province,
        houseNumber: selectedAddress.houseNumber,
        city: selectedAddress.city,
        stress: selectedAddress.stress,
        revicerName: selectedAddress.revicerName,
        active: selectedAddress.active,
        status: "waitDelivery",
      }));

      const orders = await Order.insertMany(orderData);

      findUser.cart = findUser.cart.filter(
        (item) =>
          !productsInCart.some(
            (cartItem) =>
              cartItem?.product?._id.toString() ===
                item.product?._id.toString() &&
              item.size === cartItem.size &&
              item.color === cartItem.color
          )
      );

      await users.findOneAndUpdate(
        { _id: id },
        { $set: { cart: findUser.cart, deposit: newDeposit } },
        { new: true }
      );
      // Cập nhật inventory và sold của Product
      for (const item of productsInCart) {
        const productId = item?.product || item?._id;

        // // Cập nhật Product: giảm inventory, tăng sold
        // await Product.findByIdAndUpdate(
        //   productId,
        //   {
        //     $inc: { sold: Number(item.quantity) },
        //     $inc: { inventory: -item.quantity },
        //   },
        //   { new: true }
        // );
        if (item.store) {
          await Store.findOneAndUpdate(
            {
              _id: item.store._id,
              "order.product": productId,
            },
            {
              $inc: { "order.$.quantity": -item.quantity },
            },
            { new: true }
          );
        }
      }
      return res.status(200).json({
        success: true,
        orders,
        msg: "Payment successful, orders created, cart updated",
      });
    } else {
      return res.status(400).json({
        err: 1,
        msg: "Payment failed",
      });
    }
  } catch (e) {
    next(e);
  }
};
const processPaymentBot = async (req, res, next) => {
  const { selectedAddress, productsInCart, usersList, storeId } = req.body;

  if (!selectedAddress || !productsInCart || !usersList || !storeId) {
    return res.status(400).json({
      err: 1,
      msg: "Missing input data",
    });
  }

  try {
    // Lọc người dùng có role là "bot" từ mảng người dùng truyền vào
    const botUsers = usersList.filter((user) => user.role === "bot");

    if (!botUsers || botUsers.length === 0) {
      return res.status(404).json({
        err: 1,
        msg: "Bạn chưa chọn bot để đặt hàng",
      });
    }

    let totalPrice = 0;
    productsInCart.forEach((item) => {
      const productPrice = item.product?.price || 0;
      totalPrice += productPrice * item?.quantity; // Tính tổng giá trị cần thanh toán
    });

    // Duyệt qua từng người dùng bot để tạo đơn hàng cho họ
    for (const botUser of botUsers) {
      // Kiểm tra xem bot có đủ tiền không
      if (botUser?.deposit < totalPrice) {
        return res.status(400).json({
          err: 1,
          msg: `Tài khoản bot ${botUser?.fullName} không đủ tiền để thanh toán`,
        });
      }

      const newDeposit = botUser?.deposit - totalPrice;
      console.log(productsInCart);
      const orderData = productsInCart.map((item) => ({
        user: botUser._id,
        product: item.product._id,
        store: storeId,
        quantity: Number(item.quantity),
        size: item?.product?.size[0],
        color: item?.product?.color[0],
        phone: selectedAddress.phone,
        province: selectedAddress.province,
        houseNumber: selectedAddress.houseNumber,
        city: selectedAddress.city,
        stress: selectedAddress.stress,
        revicerName: selectedAddress.revicerName,
        active: selectedAddress.active,
        status: "waitDelivery", // Đặt trạng thái đơn hàng là "chờ giao hàng"
      }));

      // Lưu đơn hàng vào cơ sở dữ liệu
      const orders = await Order.insertMany(orderData);

      // Cập nhật lại số dư deposit cho bot
      await users.findOneAndUpdate(
        { _id: botUser._id },
        { $set: { deposit: newDeposit } },
        { new: true }
      );

      // Cập nhật inventory và sold của Product trong cơ sở dữ liệu (nếu cần)
      for (const item of productsInCart) {
        const productId = item?.product?._id;

        // Cập nhật Product: giảm inventory, tăng sold
        // await Product.findByIdAndUpdate(
        //   productId,
        //   {
        //     $inc: { sold: Number(item.quantity) },
        //     $inc: { inventory: -item.quantity },
        //   },
        //   { new: true }
        // );

        // Cập nhật Store: giảm số lượng đơn hàng đã bán

        if (storeId) {
          await Store.findOneAndUpdate(
            {
              _id: storeId,
              "order.product": productId,
            },
            {
              $inc: { "order.$.quantity": -item.quantityInit },
            },
            { new: true }
          );
        }
      }
    }

    return res.status(200).json({
      success: true,
      msg: "Payment successful, orders created for bot users",
    });
  } catch (e) {
    next(e);
  }
};

const GetMyOrders = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    const orders = await Order.find({ user: id }).populate([
      { path: "product", select: "title price photos" }, // Lấy thông tin tên và giá sản phẩm
      { path: "store", select: "inforByStore" }, // Lấy thông tin cửa hàng
      { path: "user", select: "role" },
    ]);
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  console.log();
  try {
    const store = await Order.findByIdAndDelete(id)
    console.log(store)
    if (!store) {
      console.log("Order ID không tồn tại trong Store.");
      return res.status(404).json({
        msg: "Không tìm thấy ID",
      });
    }
    // const updatedStore = await Store.findByIdAndUpdate(
    //   { $inc: id }, // The store's ID
    //   { $pull: { order: { _id: id } } }, // Pull the order with the specified _id
    //   { new: true } // Return the updated document
    // );
    // if (updatedStore) {
    //   console.log("Updated store:", updatedStore);
    // } else {
    //   console.log("Store not found.");
    // }
    // console.log(updatedStore);
    // res.json(updatedStore);
  } catch (e) {
    next(e);
  }
};
const GetMyOrdersByShop = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    let orders;
    const shop = await Store.find({ userId: id });
    if (shop) {
      orders = await Order.find({ store: shop[0]?._id }).populate([
        { path: "product", select: "title price photos" },
        { path: "store", select: "inforByStore" },
        { path: "user", select: "role" },
      ]);
    }
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const GetOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    const products = await Order.findById(id);
    res.json(products);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  Create,
  List,
  GetMyOrders,
  processPayment,
  GetOrderById,
  GetMyOrdersByShop,
  updateOrder,
  deleteOrder,
  processPaymentBot,
};
