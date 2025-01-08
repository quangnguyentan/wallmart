const { default: mongoose } = require("mongoose");
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
  console.log(status);
  try {
    const findOrder = await Order.findById(id);
    if (findOrder) {
      const findProduct = await Product.findById(findOrder.product._id);
      if (findProduct) {
        const findUser = await users.findById(findOrder.store._id);
        if (findUser && status === "canceled") {
          await users.findByIdAndUpdate(
            findUser._id,
            {
              deposit:
                findUser?.deposit +
                Number(findProduct?.price) * Number(findOrder.quantity),
            },
            { new: true }
          );
        }
        if (findUser && status === "successfull") {
          await users.findByIdAndUpdate(
            findUser._id,
            {
              profit:
                findUser?.profit +
                ((Number(findProduct?.price) * 20) / 100) *
                  Number(findOrder.quantity),
              deposit:
                findUser?.deposit +
                (Number(findProduct?.price) * Number(findOrder.quantity) +
                  Number(findProduct?.price) *
                    0.2 *
                    Number(findOrder.quantity)),
            },
            { new: true }
          );
        }
        // if(findUser && status === "Bị hủy")
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
    res.json(order);
  } catch (e) {
    next(e);
  }
};
// const List = async (req, res, next) => {
//   try {
//     const orders = await Order.find()
//       .populate([
//         {
//           path: "product",
//           select:
//             "title price priceOld photos color size createdAt inventory updatedAt category industry",
//         }, // Lấy thông tin tên và giá sản phẩm
//         // { path: "store", select: "inforByStore logoStore industry" }, // Lấy thông tin cửa hàng
//         { path: "user", select: "role fullName" },
//       ])
//       .sort({ createdAt: -1 });
//     const filterStatus1 = orders?.filter(
//       (order) => order?.status !== "successfull" && order?.status !== "canceled"
//     );
//     const filterStatus2 = orders?.filter(
//       (order) => order?.status === "successfull" || order?.status === "canceled"
//     );
//     const stores = [];
//     const stores1 = [];

//     for (const order of filterStatus1) {
//       const store = await Store.find({
//         userId: order?.store?._id.toString(),
//       });
//       stores.push(store[0]); // Add each store to the array
//     }
//     for (const order of filterStatus2) {
//       const store = await Store.find({
//         userId: order?.store?._id.toString(),
//       });
//       stores1.push(store[0]); // Add each store to the array
//     }
//     res.json({
//       orders: filterStatus1,
//       stores,
//       orders1: filterStatus2,
//       stores1,
//     });
//   } catch (e) {
//     next(e);
//   }
// };

const List = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // Truy vấn đơn hàng
    const orders = await Order.find({
      status: { $in: ["waitPay", "waitDelivery", "delivering"] },
    })
      .populate([
        {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry",
        },
        { path: "user", select: "role fullName" },
      ])
      .sort({ createdAt: -1 });

    const totalOrders = orders.length;
    const paginatedOrders = orders.slice(skip, skip + limit);

    // Lấy danh sách `userId` từ tất cả các đơn hàng
    const userIds = orders
      .map((order) => order?.store?._id?.toString()) // Lấy `storeId` từ `order`
      .filter((id) => id); // Loại bỏ giá trị `undefined` hoặc null

    // Loại bỏ các `userId` trùng lặp
    const uniqueUserIds = [...new Set(userIds)];

    // Truy vấn tất cả các `store` với `userId` duy nhất
    const allStores = await Store.find({
      userId: { $in: uniqueUserIds },
    }).select("inforByStore.nameStore userId");
    // Lấy thông tin cửa hàng liên quan đến đơn hàng hiện tại (phân trang)
    const paginatedStores = await Store.find({
      userId: { $in: uniqueUserIds.slice(skip, skip + limit) },
    }).select("inforByStore.nameStore userId");

    res.json({
      orders: paginatedOrders,
      totalOrders,
      allOrders: orders,
      stores: paginatedStores,
      allStores, // Trả về tất cả các cửa hàng (không trùng lặp)
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
    });
  } catch (e) {
    next(e);
  }
};

const ListSuccess = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // Truy vấn đơn hàng
    const orders = await Order.find({
      status: { $in: ["successfull", "canceled"] },
    })
      .populate([
        {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry",
        },
        { path: "user", select: "role fullName" },
      ])
      .sort({ createdAt: -1 });

    const totalOrders = orders.length;
    const paginatedOrders = orders.slice(skip, skip + limit);

    // Lấy danh sách `userId` từ tất cả các đơn hàng
    const userIds = orders
      .map((order) => order?.store?._id?.toString()) // Lấy `storeId` từ `order`
      .filter((id) => id); // Loại bỏ giá trị `undefined` hoặc null

    // Loại bỏ các `userId` trùng lặp
    const uniqueUserIds = [...new Set(userIds)];

    // Truy vấn tất cả các `store` với `userId` duy nhất
    const allStores = await Store.find({
      userId: { $in: uniqueUserIds },
    }).select("inforByStore.nameStore userId");
    // Lấy thông tin cửa hàng liên quan đến đơn hàng hiện tại (phân trang)
    const paginatedStores = await Store.find({
      userId: { $in: uniqueUserIds.slice(skip, skip + limit) },
    }).select("inforByStore.nameStore userId");

    res.json({
      orders: paginatedOrders,
      totalOrders,
      allOrders: orders,
      stores: paginatedStores,
      allStores, // Trả về tất cả các cửa hàng (không trùng lặp)
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
    });
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
const processPaymentStore = async (req, res, next) => {
  const { id } = req.currentUser;
  const { orderId, totalPayment, profitPayment } = req.body;

  if (!orderId || !totalPayment || !profitPayment) {
    return res.status(400).json({
      err: 1,
      msg: "Chưa chọn đơn hàng để thanh toán",
    });
  }
  try {
    const getAllOrder = await Order.find();
    const filterOrder = getAllOrder?.filter((order) =>
      orderId?.includes(order?._id.toString())
    );
    await Order.updateMany(
      { _id: { $in: filterOrder.map((order) => order._id) } },
      { $set: { status: "waitDelivery" } } // Cập nhật trạng thái thành 'delivering'
    );
    let findUser = await users.findById(id);
    if (findUser && findUser?.deposit >= totalPayment) {
      await users.findByIdAndUpdate(
        id,
        {
          deposit: findUser.deposit - Number(totalPayment),
          sold: findUser.sold + Number(totalPayment),
        },
        { new: true }
      );
    } else {
      return res.status(400).json({
        msg: "Không đủ tiền để thanh toán",
      });
    }

    // const newDeposit = botUser?.deposit - totalPrice;
    // const orderData = productsInCart.map((item) => ({
    //   user: findUserBot._id,
    //   product: item.product._id,
    //   store: storeId,
    //   quantity: Number(item?.quantityInit),
    //   // size: item?.product?.size[0],
    //   // color: item?.product?.color[0],
    //   phone: selectedAddress.phone,
    //   province: selectedAddress.province,
    //   houseNumber: selectedAddress.houseNumber,
    //   city: selectedAddress.city,
    //   stress: selectedAddress.stress,
    //   revicerName: selectedAddress.revicerName,
    //   active: selectedAddress.active,
    //   // status: "waitDelivery",
    // }));

    // const orders = await Order.insertMany(orderData);

    // await users.findOneAndUpdate(
    //   { _id: botUser._id },
    //   { $set: { deposit: newDeposit } },
    //   { new: true }
    // );

    // for (const item of productsInCart) {
    //   const productId = item?.product?._id;

    //   await Product.findByIdAndUpdate(
    //     productId,
    //     {
    //       $inc: { sold: Number(item.quantity) },
    //       $inc: { inventory: -item.quantity },
    //     },
    //     { new: true }
    //   );

    //   if (storeId) {
    //     await Store.findOneAndUpdate(
    //       {
    //         _id: storeId,
    //         "order.product": productId,
    //       },
    //       {
    //         $inc: { "order.$.quantity": -item.quantityInit },
    //       },
    //       { new: true }
    //     );
    //   }
    // }

    return res.status(200).json({
      success: true,
      msg: "Payment successful, orders created for bot users",
    });
  } catch (e) {
    next(e);
  }
};

const processPaymentBot = async (req, res, next) => {
  const { selectedAddress, productsInCart, usersList, storeId } = req.body;
  console.log(selectedAddress, usersList, storeId);
  if (!selectedAddress || !productsInCart || !usersList || !storeId) {
    return res.status(400).json({
      err: 1,
      msg: "Chưa chọn bot hoặc địa chỉ giao hàng",
    });
  }
  try {
    const findUserBot = await users.findById(usersList);
    if (!findUserBot) {
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

    // for (const botUser of botUsers) {
    //   // Kiểm tra xem bot có đủ tiền không
    //   if (botUser?.deposit < totalPrice) {
    //     return res.status(400).json({
    //       err: 1,
    //       msg: `Tài khoản bot ${botUser?.fullName} không đủ tiền để thanh toán`,
    //     });
    //   }

    // const newDeposit = botUser?.deposit - totalPrice;
    const orderData = productsInCart.map((item) => ({
      user: findUserBot._id,
      product: item.product._id,
      store: storeId,
      quantity: Number(item?.quantityInit),
      // size: item?.product?.size[0],
      // color: item?.product?.color[0],
      phone: selectedAddress.phone,
      province: selectedAddress.province,
      houseNumber: selectedAddress.houseNumber,
      city: selectedAddress.city,
      stress: selectedAddress.stress,
      revicerName: selectedAddress.revicerName,
      active: selectedAddress.active,
      // status: "waitDelivery",
    }));

    // Lưu đơn hàng vào cơ sở dữ liệu
    const orders = await Order.insertMany(orderData);

    // await users.findOneAndUpdate(
    //   { _id: botUser._id },
    //   { $set: { deposit: newDeposit } },
    //   { new: true }
    // );

    // for (const item of productsInCart) {
    //   const productId = item?.product?._id;

    //   await Product.findByIdAndUpdate(
    //     productId,
    //     {
    //       $inc: { sold: Number(item.quantity) },
    //       $inc: { inventory: -item.quantity },
    //     },
    //     { new: true }
    //   );

    //   if (storeId) {
    //     await Store.findOneAndUpdate(
    //       {
    //         _id: storeId,
    //         "order.product": productId,
    //       },
    //       {
    //         $inc: { "order.$.quantity": -item.quantityInit },
    //       },
    //       { new: true }
    //     );
    //   }
    // }

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
  console.log(id);
  try {
    const orders = await Order.find({ store: id }).populate([
      {
        path: "product",
        select:
          "title price priceOld photos color size createdAt inventory updatedAt category industry",
      }, // Lấy thông tin tên và giá sản phẩm
      // { path: "store", select: "inforByStore logoStore industry" }, // Lấy thông tin cửa hàng
      { path: "user", select: "role fullName" },
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
    const store = await Order.findByIdAndDelete(id);
    console.log(store);
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
    console.log(id);
    const products = await Order.findById(id).populate([
      {
        path: "product",
        select:
          "title price priceOld photos color size createdAt inventory updatedAt category industry",
      }, // Lấy thông tin tên và giá sản phẩm
      // { path: "store", select: "inforByStore logoStore industry" }, // Lấy thông tin cửa hàng
      { path: "user", select: "role fullName" },
    ]);
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
  processPaymentStore,
  ListSuccess,
};
