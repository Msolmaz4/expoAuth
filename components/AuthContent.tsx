import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import Button from "./Button";
import { useNavigation } from "expo-router";

export default function AuthContent({ islogin, onpressScreen ,onPress}) {
  console.log(islogin, "islogin");



  return (
    <View style={styles.container}>
      <AuthForm islogin={islogin}  onPress={onPress}/>
      <View>
        <Button onPress={()=>onpressScreen(islogin)}>
          {islogin ? "Login" : "Register"}{" "}
        </Button>
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
