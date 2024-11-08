const User = require("../models/users");
const Store = require("../models/store");
const Create = async (req, res, next) => {
    const { id } = req.currentUser;
    let inforByStore = req.body.inforByStore;
    try {
      const store = new Store({
        inforByStore: { 
          nameStore: inforByStore.name,
          descriptionStore: inforByStore.description
        },
      });
  
      const savedData = await store.save();
      console.log(savedData)
      res.json(savedData);
    } catch (e) {
      next(e);
    }
  };
  
module.exports = {
   Create
};
