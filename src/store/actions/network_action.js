import { INIT_NETWORK_CONNECTION, CHANGED_NETWORK_CONNECTION } from "./types";

export const changedNetworkConnection = status => ({
  type: CHANGED_NETWORK_CONNECTION,
  payload: status.type
});

export const initNetworkConnection = status => ({
  type: INIT_NETWORK_CONNECTION,
  payload: status.type
});
