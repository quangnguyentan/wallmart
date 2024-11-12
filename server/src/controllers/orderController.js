const Order = require("../models/order");
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

const List = async (req, res, next) => {
  try {
    const orders = await Order.find();
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
      ],
    });

    if (!findUser) {
      return res.status(404).json({
        err: 1,
        msg: "User not found",
      });
    }

    const paymentSuccess = true;

    if (paymentSuccess) {
      const orderData = productsInCart.map((item) => ({
        user: id,
        product: item.product,
        store: item.store,
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
        status: "successfull",
      }));

      const orders = await Order.insertMany(orderData);

      findUser.cart = findUser.cart.filter(
        (item) =>
          !productsInCart.some(
            (cartItem) =>
              cartItem?.product?._id.toString() === item.product?._id.toString()
          )
      );

      await users.findOneAndUpdate(
        { _id: id },
        { $set: { cart: findUser.cart } },
        { new: true }
      );

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

const GetMyOrders = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    const orders = await Order.find({ user: id }).populate([
      { path: "product", select: "title price photos" }, // Lấy thông tin tên và giá sản phẩm
      { path: "store", select: "inforByStore" }, // Lấy thông tin cửa hàng
    ]);
    console.log(orders);
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const GetOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
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
};
