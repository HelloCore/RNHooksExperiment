import RootNavigator from "src/navigation/rootNavigator";

export default (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};
