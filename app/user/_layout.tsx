import { Link, Stack } from "expo-router";
import { useContext, useEffect } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import { AuthContext } from "@/store/authContext";

export default function RootLayout() {
  const { logout, token } = useContext(AuthContext);

  console.log(token, "user");

  return (
    <>
      {token ? (
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "User",
              headerRight: () => (
                <Pressable
                  style={({ pressed }) => pressed && { opacity: 0.5 }}
                  onPress={logout}
                >
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color="black"
                  />
                </Pressable>
              ),
            }}
          />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <>
          <View>
            <Text>INDEX APP</Text>
            <Link href="/login">Go to Custom login</Link>
            <Link href="/register">Go to Custom register</Link>
          </View>
        </>
      )}
    </>
  );
}
