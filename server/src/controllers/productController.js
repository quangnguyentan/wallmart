const User = require("../models/users");
const Product = require("../models/product");
const Create = async (req, res, next) => {
  const { shop } = req.body

  try {
    const product = new Product({
      shop: shop,
    });

    const savedData = await product.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
};

const GetProductByShop = async (req, res, next) => {
    const { shop } = req.body;

    try {
      const orders = await Product.find({shop : shop })
        .populate({
          path: "shop",
          select: "inforByStore identification",
        });
  
      console.log(orders);
      res.json(orders);
    } catch (e) {
      next(e);
    }
  };
  
module.exports = {
   Create,
   GetProductByShop
};
  
