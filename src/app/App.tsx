import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { Persistor } from "redux-persist";
import AppNavigator from "./AppNavigator";
import setupStore from "./setupStore";

interface RootComponentState {
  rootStore?: Store;
  persistor?: Persistor;
}

class App extends React.Component<{}, RootComponentState> {
  componentDidMount() {
    const store = setupStore();

    this.setState({
      rootStore: store.store,
      persistor: store.persistor,
    });
  }
  render() {
    const rootStore = this.state && this.state.rootStore;
    const persist = this.state && this.state.persistor;
    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    //
    // This step should be completely covered over by the splash screen though.
    //
    // You're welcome to swap in your own component to render if your boot up
    // sequence is too slow though.
    if (!rootStore || !persist) {
      return null;
    }

    return (
      <Provider store={rootStore}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;
