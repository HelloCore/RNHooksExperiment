import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import CounterButton from "src/components/buttons/CounterButton";

interface Props {
  title?: string;
}

const HomeScreen: React.SFC<Props> = props => {
  return (
    <View>
      <SafeAreaView>
        <Text>{props.title != null ? props.title : "Hello World"}</Text>
        <CounterButton />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
