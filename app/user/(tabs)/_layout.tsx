import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Router'ı import ediyoruz.
import { TouchableWithoutFeedback } from "react-native";
export default function TabsLayout() {
  const router = useRouter(); 
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "User Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
          tabBarButton: (props) => (
            // Home sekmesini özelleştiriyoruz.
            <TouchableWithoutFeedback
              onPress={() => {
                router.push("/"); // Ana sayfaya yönlendiriyoruz.
              }}
            >
              <Ionicons name="home" size={24} color="black" />
            </TouchableWithoutFeedback>
          ),
        }}
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

