import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContent from "@/components/AuthContent";
import { useNavigation, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  const onpressScreen = (data: boolean) => {
    console.log(data, "onpressScreen");
    if (!data) router.push("/register");
    else router.push("/login");
  };
  const onPress = (data) => {
    console.log(data.email,data.password, "login deki geleneler");
  }


  return (
    <View>
      <AuthContent islogin={false} onpressScreen={onpressScreen}  onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
