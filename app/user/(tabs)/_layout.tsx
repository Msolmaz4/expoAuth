import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "User Home", tabBarIcon: () => <Ionicons name="home" /> }}
      />
      <Tabs.Screen
        name="favori"
        options={{ title: "Favorites", tabBarIcon: () => <Ionicons name="star" /> }}
      />
      <Tabs.Screen
        name="user"
        options={{ title: "Profile", tabBarIcon: () => <Ionicons name="star" /> }}
      />
    </Tabs>
  );
}

