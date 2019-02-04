import Tron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import { createStore, StoreCreator } from "redux";

import rootReducer from "src/redux/rootReducer";
import rootSaga from "src/redux/rootSaga";
import { navigationMiddleware } from "./AppNavigator";
import internalCreateStore from "./internalCreateStore";

// Teach TypeScript about the bad things we want to do.
type CustomTron = typeof Tron & { createStore: StoreCreator };

declare global {
  interface Console {
    /**
     * Hey, it's Reactotron if we're in dev, and no-ops if we're in prod.
     */
    tron: typeof Tron;
  }
}

/** Do Nothing. */
const noop = () => undefined;

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (__DEV__) {
  console.tron = Tron; // attach reactotron to `console.tron`
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    overlay: noop,
    reportError: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
    createSagaMonitor: noop,
  };
}

const setupStore = () => {
  let createAppropriateStore: StoreCreator;
  let sagaMonitor = null;
  if (__DEV__) {
    Tron.useReactNative();
    Tron.use(reactotronRedux());
    Tron.use(sagaPlugin());

    sagaMonitor = Tron.createSagaMonitor();
    createAppropriateStore = (Tron as CustomTron).createStore;
  } else {
    createAppropriateStore = createStore;
  }

  const store = internalCreateStore(rootReducer, rootSaga, createAppropriateStore, sagaMonitor, navigationMiddleware);

  if (__DEV__) {
    Tron.connect();
  }
  return store;
};

export default setupStore;
