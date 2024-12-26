import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="login" options={{ headerShown: false }} />
    <Stack.Screen name="user" options={{ headerTitle: "Profil" ,headerShown: false}} />
    <Stack.Screen name="register" options={{ headerShown: false }} />
   
  </Stack>
  );
}
