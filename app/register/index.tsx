import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContent from "@/components/AuthContent";
import { useNavigation, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  const onpressScreen = (data: boolean) => {
    console.log(data, "onpressScreen");
    if (data) router.push("/login");
  };
  const onPress = ({email,password}) => {
    console.log(email,password,"onPress");
  };

  return (
    <View>
      <AuthContent islogin={true} onpressScreen={onpressScreen} onPress ={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({});
