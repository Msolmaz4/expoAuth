import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Link } from "expo-router";
import { AuthContext } from "@/store/authContext";

export default function index() {
  const { token } = useContext(AuthContext);
  return (
    <View>
      <Text>INDEX APP</Text>
      <Link href="/login">Go to Custom login</Link>
      <Link href="/register">Go to Custom register</Link>
      {token && <Link href="/user">Go to Custom User</Link>}
    </View>
  );
}

const styles = StyleSheet.create({});
