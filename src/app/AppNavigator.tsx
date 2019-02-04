import { createReactNavigationReduxMiddleware, reduxifyNavigator } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import RootNavigator from "src/navigation/rootNavigator";
import { RootState } from "src/typings/RootState";

export const navigationMiddleware = createReactNavigationReduxMiddleware<RootState>("root", state => state.nav);
const App: any = reduxifyNavigator(RootNavigator, "root");
const mapStateToProps = state => ({
  state: state.nav,
});
const AppNavigator = connect(mapStateToProps)(App);

export default AppNavigator;
