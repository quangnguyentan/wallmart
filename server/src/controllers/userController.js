const users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
const getCurrent = async (req, res) => {
  try {
    const { id } = req.currentUser;

    if (!id) {
      res.status(400).json({
        err: 1,
        msg: "missing input",
      });
    }
    const response = await users.findById(id).populate({
      path: "cart",
      populate: [
        { path: "product", select: "title price photos" }, // Lấy thông tin tên và ảnh sản phẩm
        { path: "store", select: "inforByStore" }, // Lấy thông tin tên và ảnh cửa hàng
      ],
    });
    return res.status(200).json({
      success: response ? true : false,
      response,
    });
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at auth controller" + error,
    });
  }
};
const addToCart = async (req, res, next) => {
  const { id } = req.currentUser;
  const { product, quantity, color, size, store } = req.body;
  if (!id)
    res.status(400).json({
      err: 1,
      msg: "missing input",
    });
  try {
    const findUser = await users.findById(id).populate({
      path: "cart",
      populate: [
        { path: "product", select: "title price" }, // Lấy thông tin tên và ảnh sản phẩm
        { path: "store", select: "inforByStore" }, // Lấy thông tin tên và ảnh cửa hàng
      ],
    });
    if (!findUser) {
      return res.status(404).json({
        err: 1,
        msg: "User not found",
      });
    }
    let cartUpdated = false;
    findUser.cart.forEach((cartItem) => {
      if (
        cartItem.product._id.toString() === product &&
        cartItem.color === color &&
        cartItem.size === size
      ) {
        cartItem.quantity += Number(quantity);
        cartUpdated = true;
      }
    });
    findUser.cart = findUser.cart.filter((cartItem) => cartItem.quantity > 0);
    if (!cartUpdated) {
      findUser?.cart?.push({
        product,
        quantity,
        color,
        size,
        store,
      });
    }
    const updatedUser = await users.findOneAndUpdate(
      { _id: id },
      { $set: { cart: findUser.cart } }, // Cập nhật giỏ hàng
      { new: true } // Trả về đối tượng người dùng mới sau khi cập nhật
    );
    return res.status(200).json({
      success: updatedUser ? true : false,
      updatedUser,
    });
  } catch (e) {
    next(e);
  }
};
const removeToCart = async (req, res, next) => {
  const { id } = req.currentUser;

  const { product, quantity, color, size, store } = req.body;
  if (!id)
    res.status(400).json({
      err: 1,
      msg: "missing input",
    });
  try {
    const findUser = await users.findById(id).populate({
      path: "cart",
      populate: [
        { path: "product", select: "title price" }, // Lấy thông tin tên và ảnh sản phẩm
        { path: "store", select: "inforByStore" }, // Lấy thông tin tên và ảnh cửa hàng
      ],
    });
    if (!findUser) {
      return res.status(404).json({
        err: 1,
        msg: "User not found",
      });
    }
    let cartUpdated = false;
    findUser.cart.forEach((cartItem) => {
      if (
        cartItem.product._id.toString() === product &&
        cartItem.store._id.toString() === store &&
        cartItem.color === color &&
        cartItem.size === size
      ) {
        cartItem.quantity += Number(quantity);
        cartUpdated = true;
      }
    });
    if (!cartUpdated) {
      findUser?.cart?.push({
        product,
        quantity,
        color,
        size,
        store,
      });
    }
    const updatedUser = await users.findOneAndUpdate(
      { _id: id },
      { $set: { cart: findUser.cart } }, // Cập nhật giỏ hàng
      { new: true } // Trả về đối tượng người dùng mới sau khi cập nhật
    );
    return res.status(200).json({
      success: updatedUser ? true : false,
      updatedUser,
    });
  } catch (e) {
    next(e);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const user = await users.find();
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getGetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.findById(id).populate({
      path: "cart",
      populate: [
        { path: "product", select: "title price photos" }, // Lấy thông tin tên và ảnh sản phẩm
        { path: "store", select: "inforByStore" }, // Lấy thông tin tên và ảnh cửa hàng
      ],
    });
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getDeleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Invalid");
    const user = await users.findByIdAndDelete(id);
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updatedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, username, deposit, role } = req.body;
    const findUser = await users.findById(id);

    const user = await users.findByIdAndUpdate(
      id,
      {
        fullName,
        username,
        deposit: findUser?.deposit + Number(deposit),
        role,
        avatar: req.files.images[0].filename,
      },
      { new: true }
    );
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const DepositUser = async (req, res) => {
  try {
    let data;
    const { id } = req.params;
    const { deposit } = req.body;
    if (!deposit) throw new Error("Vui lòng nhập số tiền");
    const user = await users.findById(id);
    if (user) {
      data = await users.findByIdAndUpdate(id, {
        deposit: user?.deposit + Number(deposit),
      });
    }
    return res.status(200).json({
      success: data ? true : false,
      data,
      message: data
        ? "Đã nộp tiền thành công"
        : "Nộp tiền thất bại! Vui lòng thử lại",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const withDrawAndDepositUser = async (req, res) => {
  try {
    let data;
    const { currentUser } = req;
    const { id } = req.params;
    const { draw } = req.body;

    const user = await users.findById(id);

    if (!draw) {
      throw new Error("Vui lòng nhập số tiền");
    }

    if (user?.withDraw >= Number(draw)) {
      data = await users.findByIdAndUpdate(id, {
        // withDraw: user?.withDraw - Number(draw),
        withDraw: user?.withDraw,
      });
      data.save();

      // const existsWithDraw = await withDraw.findOne({ users: id });
      // let transform;
      // if (!existsWithDraw) {

      // } else {
      //   const updated = await withDraw.findOneAndUpdate(
      //     { users: id },
      //     {
      //       $push: {
      //         withDraw: Number(draw),
      //         users: id,
      //         createdAt: Date.now(),
      //       },
      //     },
      //     { new: true }
      //   );
      // }
      await withDraw.create({
        withDraw: Number(draw),
        users: id,
        createdAt: Date.now(),
      });
    } else {
      throw new Error("Không đủ tiền để rút");
    }
    return res.status(200).json({
      success: data
        ? "Vui lòng đợi trong giây lát"
        : "Không thể rút tiền vui lòng nhập lại",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updatedStatusWithDraw = async (req, res) => {
  try {
    const { WithDrawId, userId } = req.params;
    const { status, reson } = req.body;
    let updateBill;
    let findWithDraw = await withDraw.findById(WithDrawId);
    let user = await users.findById(userId);
    if (findWithDraw && status === "Thành công") {
      updateBill = await users.findByIdAndUpdate(
        userId,
        {
          withDraw: user?.withDraw - findWithDraw.withDraw,
        },
        { new: true }
      );
      if (updateBill) {
        let findBill = await withDraw.findByIdAndUpdate(
          WithDrawId,
          {
            status: status,
            reson: reson,
          },
          { new: true }
        );
        findBill.save();
      }
    }
    if (findWithDraw && status === "Không thành công") {
      updateBill = await withDraw.findByIdAndUpdate(
        WithDrawId,
        {
          status: status,
          reson: reson,
        },
        { new: true }
      );
    }
    return res.status(200).json({
      success:
        status === "Thành công"
          ? true
          : updateBill.status === "Không thành công" && false,
      updateBill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getCurrent,
  updatedUser,
  withDrawAndDepositUser,
  updatedStatusWithDraw,
  getDeleteUserById,
  getGetUserById,
  DepositUser,
  addToCart,
};
