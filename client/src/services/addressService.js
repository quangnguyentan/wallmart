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
export const apiGetAddressById = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/address/myAddress`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });

export const apiCreateAddress= (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/address",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });

