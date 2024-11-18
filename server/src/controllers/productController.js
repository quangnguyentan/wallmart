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
    const products = await Product.findById(id).populate({
      path: "store",
      select: "inforByStore logoStore industry",
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const GetProductByCategory = async (req, res, next) => {
  try {
    const { category } = req.query;
    const products = await Product.find({ category }).populate({
      path: "store",
      select: "inforByStore logoStore industry",
    });
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
    const products = await Product.findById(id).populate({
      path: "store",
      select: "inforByStore logoStore industry",
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const GetProductByStorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ store: id }).populate({
      path: "store",
      select: "inforByStore logoStore industry",
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const DeleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id);
    return res.status(200).json({
      success: products ? true : false,
    });
  } catch (e) {
    next(e);
  }
};
const CreateNewProduct = async (req, res, next) => {
  const { id } = req.currentUser;

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
      store,
      category,
      industry,
    } = req.body;
    const files = req.files;
    console.log(store);
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
      store: store,
      inventory,
      sold,
      color,
      size,
      stockOff,
      category,
      industry,
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const UpdateProduct = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
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
      industry,
      category,
      store,
    } = req.body;
    console.log(priceOld);
    const files = req.files;
    let arrayFiles = [];
    if (files) {
      let index, len;
      for (index = 0, len = files.length; index < len; ++index) {
        arrayFiles.push(files[index].filename);
      }
    }
    const products = await Product.findByIdAndUpdate(
      id,
      {
        photos: arrayFiles,
        title,
        industry,
        category,
        description,
        price,
        priceOld,
        inventory,
        sold,
        color,
        size,
        stockOff,
      },
      { new: true }
    );
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
  UpdateProduct,
  DeleteProductById,
  GetProductByStorId,
  GetProductByCategory,
};
