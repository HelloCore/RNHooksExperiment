import React from "react";
import { connect } from "react-redux";
import { RootState } from "src/typings/RootState";
import HomeScreen from "src/components/screens/HomeScreen";

type Props = ReduxProps & DispatchProps;

const HomeContainer: React.FunctionComponent<Props> = props => {
  return <HomeScreen title={props.title} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    title: state.home.title,
  };
};

type ReduxProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {};

type DispatchProps = typeof mapDispatchToProps;

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default class extends React.Component {
  render() {
    return <ConnectedContainer />;
  }
}
