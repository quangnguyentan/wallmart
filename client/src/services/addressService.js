import axiosConfig from "../axios";

export const apiUpdateAddress = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/address/update/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiDeleteAddressById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/address/" + id,
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
export const apiGetAddress = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/address/` + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiGetAddressByUserId = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/address/userId/` + userId,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
export const apiCreateAddress = (data) =>
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

export const apiCreateAddresById = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/address/create/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get order", error);
    }
  });
