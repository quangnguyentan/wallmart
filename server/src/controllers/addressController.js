const Address = require("../models/address");

const Create = async (req, res, next) => {
  const { id } = req.currentUser;
  const { stress, phone, province, houseNumber, city, revicerName, active } =
    req.body;
  try {
    const getAddress = await Address.find({ user: id });
    for (let address of getAddress) {
      const isDuplicateAddress =
        address.phone === phone &&
        address.province === province &&
        address.houseNumber === houseNumber &&
        address.city === city &&
        address.stress === stress &&
        address.revicerName === revicerName;

      if (isDuplicateAddress) {
        await Address.findByIdAndDelete(address._id);
      }

      // Kiểm tra trạng thái active
      if (active === true && address.active === true) {
        await Address.findByIdAndUpdate(address._id, { active: false });
      }
    }
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
const updateAddress = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { stress, phone, province, houseNumber, city, revicerName, active } =
    req.body;
  console.log(stress, phone, province, houseNumber, city, revicerName, active);
  try {
    const getAddress = await Address.findById(id);
    console.log(getAddress);
    const isDuplicateAddress =
      getAddress.phone === phone &&
      getAddress.province === province &&
      getAddress.city === city &&
      getAddress.stress === stress &&
      getAddress.revicerName === revicerName;

    if (isDuplicateAddress) {
      await Address.findByIdAndDelete(id);
    }

    // Kiểm tra trạng thái active
    if (active === true && address.active === true) {
      await Address.findByIdAndUpdate(id, { active: false });
    }
    const order = await Address.findByIdAndUpdate(id, {
      phone,
      province,
      houseNumber,
      city,
      stress,
      revicerName,
      active,
    });
    const savedData = await order.save();
    console.log(saveData);
    res.json(savedData);
  } catch (e) {
    next(e);
  }
};
const deleteAddress = async (req, res, next) => {
  const { id } = req.params;
  try {
    const address = await Address.findByIdAndDelete(id);
    res.json(address);
  } catch (e) {
    next(e);
  }
};
const GetMyAddress = async (req, res, next) => {
  const { id } = req.currentUser;
  try {
    const orders = await Address.find({ user: id }).populate([]);
    res.json(orders);
  } catch (e) {
    next(e);
  }
};
const GetAddressById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const address = await Address.findById(id);
    res.json(address);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  Create,
  GetMyAddress,
  deleteAddress,
  updateAddress,
  GetAddressById,
};
