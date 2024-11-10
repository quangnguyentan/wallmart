const User = require("../models/users");
const Store = require("../models/store");
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
    console.log(savedData);
    res.json(savedData);
  } catch (e) {
    next(e);
  }
};
const  GetProductByShop = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const store = await Product.find({ userId });
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
    console.log(id);
    const products = await Store.findById(id);
    res.json(products);
  } catch (e) {
    next(e);
  }
};

const CreateNewStore = async (req, res, next) => {
  try {
    const {
      follow,
      industry,
      catergory,
      userId,
      fullname,
      phone,
      idYourself,
      emailYourself,
      identification,
      inforByStore,
      address,
      codeByFriend,
      businessLicense,
    } = req.body;
    // const files = req.files;
    // let arrayFiles = [];
    // if (files) {
    //   let index, len;
    //   for (index = 0, len = files.length; index < len; ++index) {
    //     arrayFiles.push(files[index].filename);
    //   }
    // }
    const products = await Store.create({
      follow,
      industry,
      catergory,
      userId: userId,
      // logoStore: req.files.images[0].filename,
      phone,
      fullname,
      idYourself,
      emailYourself,
      identification,
      inforByStore,
      address,
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
module.exports = {
  Create,
  CreateNewStore,
  GetAllStore,
  GetStoreById,
  GetProductByShop,
};
