import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CounterButton from "./components/CounterButton";
import { CounterProvider, CounterText, CounterContextButton } from "./components/CounterContext/CounterText";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>useState</Text>
          <CounterButton />
          <View style={styles.lineSeperator} />

          <Text>useContext</Text>
          <CounterProvider>
            <View style={styles.backgroundContainer}>
              <CounterText />
            </View>
            <View style={styles.buttonContainer}>
              <CounterContextButton />
            </View>
          </CounterProvider>

          <View style={styles.lineSeperator} />
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
  lineSeperator: {
    width: "90%",
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ddd",
  },
  backgroundContainer: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#eee",
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default App;
