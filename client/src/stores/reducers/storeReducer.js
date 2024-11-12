import actionType from "../actions/actionType";

const initState = {
  userData: {},
};

const storeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_CURRENT:
      return {
        ...state,
        storeData: action.storeData || {},
      };
    default:
      return state;
  }
};
export default storeReducer;
