import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "..";

declare var module: NodeModule;

storiesOf("components/screens/HomeScreen", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>{story()}</SafeAreaView>
    </View>
  ))
  .add("default", () => <HomeScreen />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
