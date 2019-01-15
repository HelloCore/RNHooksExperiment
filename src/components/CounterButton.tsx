import React, { useState } from "react";
import { Button, Text } from "react-native";

interface Props {
  title?: string;
}

const CounterButton: React.SFC<Props> = ({ title = "counter" }) => {
  const [counter, setCounter] = useState(0);
  return <Button title={`${title}:${counter}`} onPress={() => setCounter(counter + 1)} />;
};

export default CounterButton;
