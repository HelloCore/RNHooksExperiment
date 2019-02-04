---
to: src/components/<%= h.changeCase.camel(group) %>/<%= h.changeCase.pascal(name) %>/__stories__/<%= h.changeCase.pascal(name) %>.story.tsx
---
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, SafeAreaView, StyleSheet } from "react-native";
import <%= h.changeCase.pascal(name) %> from "..";

declare var module: NodeModule;

storiesOf("components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>", module)
  .addDecorator(story => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      {story()}
      </SafeAreaView>
    </View>
  ))
  .add("default", () => <<%= h.changeCase.pascal(name) %> />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
