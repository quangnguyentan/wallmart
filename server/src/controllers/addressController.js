const Address = require("../models/address");

const Create = async (req, res, next) => {
    const { id } = req.currentUser;
    const {
      stress,
      phone,
      province,
      houseNumber,
      city,
      revicerName,
      active,
    } = req.body;
    try {
      const order = new Address({
        user: id,
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
  const GetMyAddress = async (req, res, next) => {
    const { id } = req.currentUser;
    try {
      const orders = await Address.find({ user: id }).populate([
       
      ]);
      console.log(orders);
      res.json(orders);
    } catch (e) {
      next(e);
    }
  };
  module.exports = {
    Create,
    GetMyAddress,
  };
  