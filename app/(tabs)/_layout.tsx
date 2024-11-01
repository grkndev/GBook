import "~/global.css";
import Icon from "@/lib/Icons/icon";
import { useColorScheme } from "@/lib/useColorScheme";
import NetInfo from "@react-native-community/netinfo";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import Offline from "../(offline)/offline";

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const router = useRouter();
  const [isConnected, setIsConnected] = React.useState(true);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setIsConnected(false);
        router.replace("/offline" as any);
        router.dismissAll();
      } else {
        setIsConnected(true);
        router.canGoBack() ?? router.back();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return isConnected ? (
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
              <Image
                src="https://placehold.jp/150x150.png"
                className="w-full h-full"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  ) : (
    <Offline />
  );
}
