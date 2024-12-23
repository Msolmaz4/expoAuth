import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import Button from "./Button";

export default function AuthContent({ islogin }) {
  return (
    <View style={styles.container}>
      <AuthForm isLogin={false} />
      <View>
        <Button>{islogin ? "Login" : "Register"} </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    marginTop: 100,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
});
