const User = require("../models/users");
const Store = require("../models/store");
const users = require("../models/users");
const Product = require("../models/product");
const Create = async (req, res, next) => {
  const { id } = req.currentUser;
  let inforByStore = req.body.inforByStore;
  try {
    const store = new Store({
      inforByStore: {
        nameStore: inforByStore.name,
        descriptionStore: inforByStore.description,
      },
    });

    const savedData = await store.save();
    res.json(savedData);
  } catch (e) {
    next(e);
  }
};
const GetProductByShop = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const store = await Product.find({ userId: { $in: userId } });
    console.log(store);
    res.json(store);
  } catch (e) {
    next(e);
  }
};
const GetAllStore = async (req, res, next) => {
  try {
    const products = await Store.find();
    res.json(products);
  } catch (e) {
    next(e);
  }
};
const GetStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Store.findById(id);
    res.json(products);
  } catch (e) {
    next(e);
  }
};

const CreateNewStore = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    const {
      follow,
      industry,
      catergory,
      active,
      userId,
      fullname,
      phone,
      idYourself,
      emailYourself,
      service,
      codeByFriend,
      businessLicense,
      nameStore,
      area,
      street,
      descriptionStore,
    } = req.body;
    const products = await Store.create({
      follow,
      industry,
      catergory,
      userId: id,
      logoStore: req.files.images[0].filename,
      phone,
      fullname,
      active: "wait",
      service,
      idYourself,
      emailYourself,
      identification: {
        front: req.files.front[0].filename,
        backside: req.files.back[0].filename,
        yourFace: req.files.yourFace[0].filename,
      },
      inforByStore: {
        nameStore: nameStore,
        descriptionStore: descriptionStore,
      },

      address: {
        area: area,
        street: street,
      },
      codeByFriend,
      businessLicense,
    });
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const updateStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      follow,
      active,
      industry,
      catergory,
      fullname,
      phone,
      idYourself,
      emailYourself,
      service,
      codeByFriend,
      businessLicense,
    } = req.body;
    const products = await Store.findByIdAndUpdate(id, {
      follow,
      industry,
      catergory,
      active,
      logoStore: req.files && req.files.images[0].filename,
      phone,
      fullname,
      service,
      active,
      idYourself,
      emailYourself,
      codeByFriend,
      businessLicense,
    });
    if (products) {
      await users.findByIdAndUpdate(
        products?.userId,
        {
          role: "agent",
        },
        { new: true }
      );
    }
    return res.status(200).json({
      success: products ? true : false,
      products: products,
    });
  } catch (e) {
    next(e);
  }
};
const GetMyStore = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    const orders = await Store.find({ userId: id });
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const deleteStore = async (req, res, next) => {
  const { id } = req.params;
  try {
    const orders = await Store.findByIdAndDelete(id);
    return res.status(200).json({
      success: orders ? true : false,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = {
  Create,
  CreateNewStore,
  GetAllStore,
  GetStoreById,
  GetProductByShop,
  GetMyStore,
  updateStore,
  deleteStore,
};
