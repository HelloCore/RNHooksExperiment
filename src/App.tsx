import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CounterButton from "./components/CounterButton";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Hello World</Text>
          <CounterButton />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default App;
