---
to: src/components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {

}

const <%= h.changeCase.pascal(name) %>: React.SFC<Props> = (props) => {
  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default <%= h.changeCase.pascal(name) %>;