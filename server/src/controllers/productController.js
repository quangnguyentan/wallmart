const User = require("../models/users");
const Product = require("../models/product");
const Store = require("../models/store");
const Create = async (req, res, next) => {
  // const { shop } = req.body;
  // try {
  //   const product = new Product({
  //     shop: shop,
  //   });
  //   const savedData = await product.save();
  //   res.json(savedData);
  // } catch (e) {
  //   next(e);
  // }
};

const GetProductByShop = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const products = await Product.findById(id).populate(
      { path: "store", select: "inforByStore logoStore industry" }
    );
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const GetAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    next(e);
  }
};
const GetProductById = async (req, res, next) => {
  try {
    const { id, userId } = req.params;
    console.log(id, userId);
    const products = await Product.findById(id).populate(
      { path: "store", select: "inforByStore logoStore industry" }
    );
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const CreateNewProduct = async (req, res, next) => {
  const { id } = req.currentUser
  try {
    const {
      title,
      description,
      price,
      priceOld,
      userId,
      inventory,
      sold,
      color,
      size,
      stockOff,
    } = req.body;
    const store = Store.find({ userId : id })
    const files = req.files;
    let arrayFiles = [];
    if (files) {
      let index, len;
      for (index = 0, len = files.length; index < len; ++index) {
        arrayFiles.push(files[index].filename);
      }
    }
    const products = await Product.create({
      photos: arrayFiles,
      title,
      description,
      price,
      priceOld,
      userId: userId,
      store : store?._id,
      inventory,
      sold,
      color,
      size,
      stockOff,
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = {
  Create,
  GetProductByShop,
  GetAllProduct,
  CreateNewProduct,
  GetProductById,
};
