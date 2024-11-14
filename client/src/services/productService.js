import axiosConfig from "../axios";

export const apiGetProduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/product/",
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiDeleteProductById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/product/delete/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to delete product", error);
    }
  });
export const apiGetProductById = (id, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/product/${id}/${userId}`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetProductByStoreId = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/product/store/${id}`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetProductByCategory = (category) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/product/getCategory?category=${category}`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetProductByShop = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/product/shop/` + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetProductDifferentById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/product/different/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiCreateProduct = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/product/create",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiUpdateProduct = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/product/update/${id}`,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
