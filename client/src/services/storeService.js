import axiosConfig from "../axios";

export const apiGetStore = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/store/",
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
export const apiDeletestoreById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/store/delete/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to delete store", error);
    }
  });
export const apiGetstoreById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/store/${id}`,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
export const apiGetstoreByShop = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/store/shop/` + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
export const apiGetstoreDifferentById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/store/different/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
export const apiCreatestore = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/store/create",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
export const apiUpdatestore = (id, userId, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/store/update/${id}/${userId}`,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get store", error);
    }
  });
