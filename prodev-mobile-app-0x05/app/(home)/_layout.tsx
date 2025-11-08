import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ReactNode } from "react";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34967C",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }: { color: ReactNode }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: true,
          tabBarIcon: ({ color }: { color: ReactNode }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: true,
          tabBarIcon: ({ color }: { color: ReactNode }) => (
            <EvilIcons name="heart" size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: true,
          tabBarIcon: ({ color }: { color: ReactNode }) => (
            <Ionicons name="chatbubbles-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          tabBarIcon: ({ color }: { color: ReactNode }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default HomeRootLayout;
