import { INIT_NETWORK_CONNECTION, CHANGED_NETWORK_CONNECTION } from "../actions/types";

const INITIAL_STATE = {
  isChecked: false,
  isConnected: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_NETWORK_CONNECTION:
      return {
        ...state,
        isChecked: true,
        isConnected: action.payload === "none" || action.payload === "unknown" ? false : true
      };
    case CHANGED_NETWORK_CONNECTION:
      return {
        ...state,
        isChecked: true,
        isConnected: action.payload === "none" || action.payload === "unknown" ? false : true
      };
    default:
      return state;
  }
};
