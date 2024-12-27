import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Link } from "expo-router";
import { AuthContext } from "@/store/authContext";
import { Video } from "expo-av";

export default function index() {
  const { token } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Video
        source={require(".././assets/video/doga.mp4")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        shouldPlay
        isLooping
        muted
      />
      <View style={styles.overlay}>
       
        <Link href="/login" style={styles.link}>
          Go to Custom login
        </Link>
        <Link href="/register" style={styles.link}>
          Go to Custom register
        </Link>
        {token && (
          <Link href="/user" style={styles.link}>
            Go to Custom User
          </Link>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Şeffaf siyah arka plan
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "#00f",
    marginVertical: 10,
  },
});
