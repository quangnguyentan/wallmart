const users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Deposit = require("../models/deposit");
const WithDraw = require("../models/withDraw");

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
const createUser = async (req, res) => {
  try {
    const {
      fullName,
      username,
      deposit,
      role,
      gender,
      nameOfBank,
      nameOfUser,
      creditCartOfBank,
      password,
      phone,
    } = req.body;
    let user;
    const findPhone = await users.find({ phone });
    if (findPhone.length > 0) {
      return res.status(400).json({
        msg: "Số điện thoại đã tồn tại",
      });
    }
    user = await users.create({
      fullName,
      username,
      nameOfBank,
      nameOfUser,
      creditCartOfBank,
      deposit: deposit && Number(deposit),
      role,
      phone,
      avatar: req?.file && req.files.images[0].filename,
      gender,
      password: hashPassword(password),
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
const updatedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      username,
      deposit,
      role,
      gender,
      nameOfBank,
      nameOfUser,
      creditCartOfBank,
      password,
    } = req.body;
    const user = await users.findByIdAndUpdate(
      id,
      {
        fullName,
        username,
        nameOfBank,
        nameOfUser,
        creditCartOfBank,
        deposit: deposit && Number(deposit),
        role,
        avatar: req.files.images[0].filename && req.files.images[0].filename,
        gender,
        password: password && hashPassword(password),
      },
      { new: true }
    );
    console.log(user);
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
    let createDeposit;
    const { id } = req.params;
    const { deposit, reason } = req.body;
    if (!deposit) throw new Error("Vui lòng nhập số tiền");
    const user = await users.findById(id);
    if (user) {
      data = await users.findByIdAndUpdate(id, {
        deposit: user?.deposit + Number(deposit),
      });
      createDeposit = await Deposit.create({
        money: Number(deposit),
        reason: reason,
        user: id,
        createdAt: Date.now(),
      });
      createDeposit.save();
    }

    return res.status(200).json({
      success: data ? true : false,
      data,
      createDeposit,
      message: createDeposit
        ? "Đã nộp tiền thành công"
        : "Nộp tiền thất bại! Vui lòng thử lại",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const withDrawtUser = async (req, res) => {
  try {
    let data;

    const { id } = req.params;
    const { draw } = req.body;
    console.log(draw);
    let createWithDraw;
    const user = await users.findById(id);

    if (!draw) {
      throw new Error("Vui lòng nhập số tiền muốn rút");
    }

    if (user?.deposit >= Number(draw)) {
      data = await users.findByIdAndUpdate(
        id,
        {
          // withDraw: user?.withDraw - Number(draw),
          deposit: user?.deposit - Number(draw),
        },
        { new: true }
      );

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
      createWithDraw = await WithDraw.create({
        money: Number(draw),
        user: id,
        createdAt: Date.now(),
      });
      createWithDraw.save();
    } else {
      throw new Error("Không đủ tiền để rút");
    }
    return res.status(200).json({
      success: data ? true : false,
      message: data
        ? "Đã rút tiền thành công! Vui lòng đợi duyệt."
        : "Không thể rút tiền vui lòng nhập lại",
      data,
      createWithDraw,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updatedStatusWithDraw = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;
    let user;
    let findBill;
    let findWithDraw = await WithDraw.findById(id);
    if (findWithDraw) {
      user = await users.findById(findWithDraw?.user);
    }
    if (findWithDraw && status === "Thành công") {
      findBill = await WithDraw.findByIdAndUpdate(
        id,
        {
          status: status,
          reason: reason,
        },
        { new: true }
      );
    }
    if (findWithDraw && status === "Không thành công") {
      let findUpdateUser = await users.findByIdAndUpdate(
        user?._id,
        {
          deposit: Number(user?.deposit) + Number(findWithDraw?.money),
        },
        { new: true }
      );
      if (findUpdateUser) {
        findBill = await WithDraw.findByIdAndUpdate(
          id,
          {
            status: status,
            reason: reason,
          },
          { new: true }
        );
      }
    }
    return res.status(200).json({
      success: findBill ? true : false,
      user,
      findBill,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getMyDeposit = async (req, res) => {
  const { id } = req.currentUser;
  try {
    const deposit = await Deposit.find({ user: id });
    return res.status(200).json({
      success: deposit ? true : false,
      deposit,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getMyWithDraw = async (req, res) => {
  const { id } = req.currentUser;
  try {
    const withDraw = await WithDraw.find({ user: id });
    return res.status(200).json({
      success: withDraw ? true : false,
      withDraw,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllWithDraw = async (req, res) => {
  try {
    const withDraw = await WithDraw.find().populate({
      path: "user",
      select: "fullName deposit nameOfBank nameOfUser creditCartOfBank",
    });
    return res.status(200).json({
      success: withDraw ? true : false,
      withDraw,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllDeposit = async (req, res) => {
  try {
    const deposit = await Deposit.find();
    return res.status(200).json({
      success: deposit ? true : false,
      deposit,
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
  withDrawtUser,
  updatedStatusWithDraw,
  getDeleteUserById,
  getGetUserById,
  DepositUser,
  addToCart,
  getMyDeposit,
  getMyWithDraw,
  getAllWithDraw,
  getAllDeposit,
  createUser,
};
