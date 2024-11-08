import User from "../../models/user";
import Order from "../models/order";
import Boom from "boom";
import OrderSchema from "./validations";

const Create = async (req, res, next) => {
    const { id } = req.currentUser;
  const { shop, address } = req.body
  const { user_id } = req.payload;

  try {
    const order = new Order({
      user: user_id,
      adress: address,
      shop: shop,
    });

    const savedData = await order.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
};

const List = async (req, res, next) => {
  try {
    const orders = await Order.find({})
      .populate("user", "-password -__v")
      .populate("items");

    res.json(orders);
  } catch (e) {
    next(e);
  }
};

const GetMyOrders = async (req, res, next) => {
  const { user_id } = req.payload;
  try {
    const orders = await Order.find({ user: user_id })
      .populate("items")
      .populate({
        path: "items.product",
        select: "image title description price",
      });

    console.log(orders);
    res.json(orders);
  } catch (e) {
    next(e);
  }
};

export default {
  Create,
  List,
  GetMyOrders,
};
