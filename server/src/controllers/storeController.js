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
    const products = await Store.find().populate({
      path: "order",
      populate: [
        {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry",
        }, // Lấy thông tin tên và ảnh sản phẩm
      ],
    });
    res.json(products);
  } catch (e) {
    next(e);
  }
};
const GetStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await Store.findById(id)
      .populate({
        path: "cart",
        populate: {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry", // Lấy thông tin tên và ảnh sản phẩm
        },
      })
      .populate({
        path: "order",
        populate: {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry", // Lấy thông tin tên và ảnh sản phẩm
        },
      });
    res.json(products);
  } catch (e) {
    next(e);
  }
};
const addToCart = async (req, res, next) => {
  const { id } = req.currentUser;
  const { productsInCart } = req.body;
  if (!productsInCart || productsInCart.length === 0) {
    return res.status(400).json({
      err: 1,
      msg: "Vui lòng chọn sản phẩm",
    });
  }
  if (!id)
    res.status(400).json({
      err: 1,
      msg: "missing input",
    });
  try {
    const findUser = await Store.find({ userId: id }).populate({
      path: "cart",
      populate: [
        {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry",
        },
      ],
    });
    // const findProduct = await Product.findById(product);
    // if (!findUser[0]) {
    //   return res.status(404).json({
    //     err: 1,
    //     msg: "Chưa đăng nhập",
    //   });
    // }
    // if (findProduct.inventory === 0) {
    //   return res.status(400).json({
    //     err: 1,
    //     msg: "Hết hàng",
    //   });
    // }
    let existingOrder;
    for (const item of productsInCart) {
      existingOrder = findUser[0].cart.find(
        (orderItem) => orderItem.product?._id?.toString() === item?.toString()
      );
      if (existingOrder) {
        findUser[0].cart = findUser[0].cart.filter(
          (orderItem) => orderItem.product?._id?.toString() !== item?.toString()
        );
        findUser[0].cart.push({
          product: item,
        });
        return res.status(200).json({
          success: true,
        });
      } else {
        findUser[0].cart.push({
          product: item,
        });
      }
    }
    await findUser[0].save();

    // let cartUpdated = false;
    // findUser[0]?.cart?.forEach((cartItem) => {
    //   if (
    //     cartItem.product._id.toString() === product &&
    //     cartItem.status === status
    //   ) {
    //     cartItem.quantity += Number(quantity);
    //     cartUpdated = true;
    //   }
    // });

    // findUser[0].cart = findUser[0]?.cart?.filter(
    //   (cartItem) => cartItem.quantity > 0
    // );
    // if (!cartUpdated) {
    //   findUser[0]?.cart?.push({
    //     product,
    //     quantity,
    //   });
    // }
    // const updatedUser = await Store.findOneAndUpdate(
    //   { _id: findUser[0]?._id },
    //   { $set: { cart: findUser[0].cart } }, // Cập nhật giỏ hàng
    //   { new: true } // Trả về đối tượng người dùng mới sau khi cập nhật
    // );
    // if (updatedUser) {
    //   await Product.findByIdAndUpdate(
    //     product,
    //     {
    //       inventory: findProduct.inventory - quantity,
    //     },
    //     { new: true }
    //   );
    // }
    return res.status(200).json({
      success: !existingOrder ? true : false,
      existingOrder,
    });
  } catch (e) {
    next(e);
  }
};
// const processPayment = async (req, res, next) => {
//   const { id } = req.currentUser;
//   const { productsInCart } = req.body;
//   if (!productsInCart) {
//     return res.status(400).json({
//       err: 1,
//       msg: "Missing input data",
//     });
//   }

//   try {
//     const findUser = await users.findById(id).populate({
//       path: "cart",
//       populate: [
//         { path: "product", select: "title price photos" },
//         { path: "store", select: "inforByStore" },
//       ],
//     });

//     if (!findUser) {
//       return res.status(404).json({
//         err: 1,
//         msg: "User not found",
//       });
//     }
//     let totalPrice = 0;
//     productsInCart.forEach((item) => {
//       const productPrice = item.product?.price || 0;
//       totalPrice += productPrice * item?.quantity; // Tính tổng giá trị cần thanh toán
//     });
//     if (findUser?.deposit < totalPrice) {
//       return res.status(400).json({
//         err: 1,
//         msg: "Không đủ tiền để thanh toán",
//       });
//     }
//     const newDeposit = findUser?.deposit - totalPrice;
//     const paymentSuccess = true;
//     if (paymentSuccess) {
//       const productIds = productsInCart.map((item) => item.product._id); // Lấy _id của từng sản phẩm trong giỏ hàng

//       await Store.updateMany(
//         { "cart.product": { $in: productIds } },
//         {
//           $inc: { "cart.$[elem].quantity": 1 }, // Cộng số lượng thực tế (ví dụ: cộng 3 vào số lượng)
//           $set: { "cart.$[elem].status": "paid" }, // Cập nhật trạng thái 'paid' cho sản phẩm
//         },
//         {
//           arrayFilters: [
//             { "elem.product": { $in: productIds } }, // Điều kiện lọc các phần tử trong mảng cart
//           ],
//         }
//       );

//       await users.findOneAndUpdate(
//         { _id: id },
//         { $set: { deposit: newDeposit } },
//         { new: true }
//       );

//       return res.status(200).json({
//         success: true,
//         msg: "Payment successful, orders created, cart updated",
//       });
//     } else {
//       return res.status(400).json({
//         err: 1,
//         msg: "Payment failed",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// };

const processPayment = async (req, res, next) => {
  const { id } = req.currentUser; // User ID
  const { productsInCart } = req.body; // Danh sách sản phẩm trong giỏ hàng
  if (!productsInCart || productsInCart.length === 0) {
    return res.status(400).json({
      err: 1,
      msg: "Missing input data",
    });
  }

  try {
    // Tìm thông tin người dùng và giỏ hàng
    const findUser = await users.findById(id).populate({
      path: "cart",
      populate: {
        path: "product",
        select:
          "title price priceOld photos color size createdAt inventory updatedAt category industry",
      },
    });

    if (!findUser) {
      return res.status(404).json({
        err: 1,
        msg: "User not found",
      });
    }

    // Tính tổng giá trị thanh toán
    let totalPrice = 0;
    productsInCart.forEach((item) => {
      const productPrice = item.product?.price || 0;
      totalPrice += productPrice * item.quantity;
    });

    // Kiểm tra số dư tài khoản
    if (findUser.deposit < totalPrice) {
      return res.status(400).json({
        err: 1,
        msg: "Không đủ tiền để thanh toán",
      });
    }

    // Lấy danh sách ID sản phẩm trong cart
    const productIds = productsInCart.map((item) => item.product._id);

    // Tìm store của user để cập nhật
    const userStore = await Store.findOne({ userId: id });

    if (!userStore) {
      return res.status(404).json({
        err: 1,
        msg: "Store not found",
      });
    }

    // Duyệt qua từng sản phẩm trong `productsInCart`
    for (const item of productsInCart) {
      const { product, quantity } = item;

      // Kiểm tra sản phẩm đã tồn tại trong `order` hay chưa
      const existingOrder = userStore.order.find(
        (orderItem) => orderItem.product.toString() === product._id.toString()
      );

      if (existingOrder) {
        // Nếu sản phẩm đã tồn tại, cập nhật quantity
        existingOrder.quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào `order`
        userStore.order.push({
          product: product._id,
          quantity,
          status: "paid",
        });
      }

      // Xóa sản phẩm khỏi giỏ hàng
      userStore.cart = userStore.cart.filter(
        (cartItem) => cartItem.product.toString() !== product._id.toString()
      );
    }

    // Cập nhật Store
    await userStore.save();

    // Trừ số dư trong tài khoản người dùng
    findUser.deposit -= totalPrice;
    await findUser.save();

    return res.status(200).json({
      success: true,
      msg: "Payment successful, orders updated",
    });
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
    const findUser = await users.findById(id);
    if (findUser) {
      await users.findByIdAndUpdate(
        findUser._id,
        {
          role: "agent",
        },
        { new: true }
      );
    }
    const products = await Store.create({
      follow,
      industry,
      catergory,
      userId: id,
      logoStore:
        req?.file &&
        req?.files?.images[0]?.filename &&
        req.files.images[0].filename,
      phone,
      fullname,
      active: "wait",
      service,
      idYourself,
      emailYourself,
      identification: {
        front:
          req?.file &&
          req.files?.front[0]?.filename &&
          req.files?.front[0].filename,
        backside:
          req?.file &&
          req?.files?.back[0]?.filename &&
          req.files.back[0].filename,
        yourFace:
          req?.file &&
          req?.files?.yourFace[0]?.filename &&
          req.files.yourFace[0].filename,
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
      logoStore:
        req?.files &&
        req?.files?.images[0]?.filename &&
        req.files.images[0].filename,
      phone,
      fullname,
      service,
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
    const orders = await Store.find({ userId: id })
      .populate({
        path: "cart",
        populate: {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry", // Lấy thông tin tên và ảnh sản phẩm
        },
      })
      .populate({
        path: "order",
        populate: {
          path: "product",
          select:
            "title price priceOld photos color size createdAt inventory updatedAt category industry", // Lấy thông tin tên và ảnh sản phẩm
        },
      });
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
  addToCart,
  processPayment,
};
