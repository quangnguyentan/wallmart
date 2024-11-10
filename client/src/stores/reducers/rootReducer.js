import authReducer from "./authReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import userReducer from "./userReducer";
import lotteryReducer from "./lotteryReducer";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  lottery: lotteryReducer,
});
export default rootReducer;
