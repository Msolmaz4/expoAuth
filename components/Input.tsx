import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onUpdateInput,
  value,
  secure,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateInput}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 20,

    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 18,
  },
});
