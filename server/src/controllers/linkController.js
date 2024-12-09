const getCSKH = async (req, res, next) => {
  const { id } = req.params;
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

module.exports = {};
