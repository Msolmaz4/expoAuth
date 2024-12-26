import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "@/components/AuthContent";
import { useRouter } from "expo-router";
import { fetchPosts } from "@/api/data";

export default function index() {
  const router = useRouter();
  const [dat, setDat] = useState([]); // API'den dönen verileri saklamak için state

  const onpressScreen = (data: boolean) => {
    if (data) router.push("/login");
  };

  const onPress = (data) => {
    let { email, password, emailControl, passwordControl } = data;
    email = email.trim();
    password = password.trim();
    emailControl = emailControl.trim();
    passwordControl = passwordControl.trim();

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }

    if (emailControl === "" || passwordControl === "") {
      alert("Bitte geben Sie alle Felder aus");
      return;
    }

    if (email === emailControl && password === passwordControl) {
      if (email.length < 1) {
        alert("Das E-Mail-Feld darf nicht leer sein.");
        return;
      }
      if (password.length < 6) {
        alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
        return;
      }

      const getData = async () => {
        console.log("Veriler alınıyor...", email, password);
        try {
          const posts = await fetchPosts(email, password); // API çağrısı
          setDat(posts); // Dönen veriyi sakla
          alert("Kayıt başarılı!"); // Başarı mesajı
        } catch (error) {
          console.error("Veriler alınamadı:", error);
          alert("Kayıt sırasında bir hata oluştu.");
        }
      };

      getData(); // Asenkron fonksiyonu çağır
    } else {
      alert("E-Mail oder Passwort stimmen nicht überein!");
    }
  };

  return (
    <View>
      <AuthContent
        islogin={true}
        onpressScreen={onpressScreen}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

