import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AuthContent from "@/components/AuthContent";
import { useNavigation, useRouter } from "expo-router";
import { login } from "@/api/data";
import { AuthContext } from "@/store/authContext";

export default function index() {
  const router = useRouter();
 
  const authContext = useContext(AuthContext);
  const onpressScreen = (data: boolean) => {
   // console.log(data, "onpressScreen");
    if (!data) router.push("/register");
    else router.push("/login");
  };
  const onPress = (data) => {
    //console.log(data.email,data.password, "login deki geleneler");
    let { email, password } = data;
    email = email.trim();
    password = password.trim();
    const emailControl =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailControl.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }
    if (email.length < 1) {
      alert("Das E-Mail-Feld darf nicht leer sein.");
      return;
    }
    if (password.length < 6) {
      alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }
    console.log(email, password, "login deki geleneler");
    const getData = async () => {
      try {
        const token = await login(email, password);
        authContext.auth(token)
        token ? router.push("/user") : alert("Bir hata oluştu");
      } catch (error) {
        alert("Veriler alınamadı:", error);
      }
    };

    getData();
  };

  return (
    <View>
      <AuthContent
        islogin={false}
        onpressScreen={onpressScreen}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
