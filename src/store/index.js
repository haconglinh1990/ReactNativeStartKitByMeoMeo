import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";

// import rootSaga from './sagas';

// const saga = createSagaMiddleware();
const middleWare = [logger];
// const middleWare = [logger, saga];
if (process.env.NODE_ENV === "development") {
  // middleWare.push(logger);
}
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debounce: 500,
  blacklist: ['form', 'ui', 'requests', 'toast'],
  // whitelist: ["myInfo", "friends"],
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = () => {
  const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(...middleWare)));
  // saga.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;