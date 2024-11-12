const users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var randomstring = require("randomstring");
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
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
const login = async (req, res) => {
  try {
    const { phone, password, email } = req.body;
    const response = await users.findOne({ phone });
    const findEmail = await users.findOne({ email });
    const isCorrectPasswordByPhone =
      response && bcrypt.compareSync(password, response.password);
    const isCorrectPasswordByEmail =
      findEmail && bcrypt.compareSync(password, findEmail.password);
    let accessToken;
    if (!!phone) {
      accessToken =
        isCorrectPasswordByPhone &&
        jwt.sign(
          { id: response?._id, role: response?.role },
          process.env.SECRET_KEY
          // { expiresIn: "2d" }
        );
    }
    if (!!email) {
      accessToken =
        isCorrectPasswordByEmail &&
        jwt.sign(
          { id: findEmail?._id, role: findEmail?.role },
          process.env.SECRET_KEY
        );
    }

    return res.status(200).json({
      success: accessToken
        ? 0
        : isCorrectPasswordByEmail
        ? isCorrectPasswordByEmail
        : isCorrectPasswordByPhone
        ? `Đăng nhập thành công! Chào mừnng bạn quay trở lại ${response?.username}`
        : "Tên đăng nhập hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.",
      accessToken: accessToken || null,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const register = async (req, res) => {
  try {
    const { phone, password, email } = req.body;

    if (!!email) {
      let findEmail = await users.findOne({ email });
      if (findEmail) throw new Error("Email đã tồn tại");
    }
    if (!!phone) {
      let findPhone = await users.findOne({ phone });
      if (findPhone) throw new Error("Số điện thoại đã tồn tại");
    }
    const generate = randomstring.generate({ length: 10 });
    const newUser = await users.create({
      phone: phone,
      email: email,
      fullName: generate,
      password: hashPassword(password),
    });

    newUser.save();
    return res.status(200).json({
      success: newUser ? true : false,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, newPassword, rePassword } = req.body;
    if (!password) throw new Error("Bạn chưa nhập mật khẩu cũ");
    if (!newPassword) throw new Error("Bạn chưa nhập mật khẩu mới");
    if (!rePassword) throw new Error("Bạn chưa nhập lại mật khẩu mới");
    let user = await users.findById(id);
    const isCorrectPassword =
      user && bcrypt.compareSync(password, user.password);

    if (isCorrectPassword) {
      if (newPassword !== rePassword)
        throw new Error("Mật khẩu mới không trùng khớp");
      await users.findByIdAndUpdate(
        user?._id,
        {
          password: hashPassword(newPassword),
        },
        { new: true }
      );
    } else {
      throw new Error("Mật khẩu cũ không đúng");
    }

    return res.status(200).json({
      success: user ? true : false,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllUsers,
  register,
  login,
  changePassword,
};
