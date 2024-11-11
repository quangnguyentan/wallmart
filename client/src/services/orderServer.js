import axiosConfig from "../axios";

export const apiGetOrder = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/order/",
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
        url: "/order/delete/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to delete order", error);
    }
  });
export const apiGetOrderById = (id, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/order/myOrder`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiGetOrderByIdOrder = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/order/getOrder/` + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });

export const apiCreateOrder = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/order",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });

export const apiOrderPayment = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/order/payment",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiUpdateOrder = (id, userId, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/product/update/${id}/${userId}`,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
