import axiosConfig from "../axios";

export const apiGetOrder = ({ page, limit, search }) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = `/order/?page=${page}&limit=${limit}`;
      const response = await axiosConfig({
        method: "GET",
        url: url,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetOrderSuccess = ({ page, limit, search }) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = `/order/success/?page=${page}&limit=${limit}`;
      const response = await axiosConfig({
        method: "GET",
        url: url,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiDeleteOrderById = (id) =>
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
export const apiGetOrderByShop = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/order/myOrderByShop`,
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
export const apiOrderPaymentBot = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/order/paymentBot",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiOrderPaymentStore = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/order/paymentStore",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiUpdateOrder = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/order/updateOrder/${id}`,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
