import React, { useState } from "react";
import { Button, StyleSheet, StyleProp, ViewStyle, View } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const CounterButton: React.SFC<Props> = props => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <View style={[styles.btnStyle, props.style]}>
      <Button onPress={increment} title={`Counter: ${counter}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: 100,
    height: 50,
  },
});

export default CounterButton;
