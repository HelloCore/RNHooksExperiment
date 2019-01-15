import React, { useContext, useState } from "react";
import { Text, Button } from "react-native";
import CounterContext from "./CounterContext";

export const CounterText: React.SFC = () => {
  const { counter } = useContext(CounterContext);
  return <Text>Counter = {counter}</Text>;
};

export const CounterContextButton: React.SFC = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <>
      <Button title={"increment"} onPress={() => setCounter(counter + 1)} />
      <Button title={"decrement"} onPress={() => setCounter(counter - 1)} />
      <Button title={"reset"} onPress={() => setCounter(0)} />
    </>
  );
};

export const CounterProvider: React.SFC = props => {
  let [counter, setCounter] = useState(0);
  return <CounterContext.Provider value={{ counter, setCounter }}>{props.children}</CounterContext.Provider>;
};
