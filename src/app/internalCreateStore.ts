import { applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

const internalCreateStore = (rootReducer, rootSaga, createAppropriateStore, sagaMonitor, navigationMiddleware) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
  middleware.push(navigationMiddleware);

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return {
    store,
    sagasManager,
    sagaMiddleware,
    persistor,
  };
};
export default internalCreateStore;
