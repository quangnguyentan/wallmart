import {  apiGetStore } from "@/services/storeService";
import actionType from "./actionType";

export const getStore = () => async (dispatch) => {
  try {
    let response = await apiGetStore();
      dispatch({
        type: actionType.GET_STORE,
        storeData: response,
      });
    
  } catch (error) {
    dispatch({
      type: actionType.GET_STORE,
      storeData: null,
      msg: error,
    });
  }
};
