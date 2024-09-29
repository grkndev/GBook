import "~/global.css"
import Icon from "@/lib/Icons/icon";
import { useColorScheme } from "@/lib/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkColorScheme ? "#fff" : "#000",
        tabBarShowLabel: false,
        headerShown: false,
        
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={"House"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={"Search"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={"Bookmark"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View className="w-8 h-8 rounded-full overflow-hidden">
              <Image src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg" className="w-full h-full" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
