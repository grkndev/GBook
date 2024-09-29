import { useColorScheme } from "@/lib/useColorScheme";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Pressable
          className="bg-white p-2"
          onPress={() => {
            setColorScheme(isDarkColorScheme ? "light" : "dark");
          }}
        >
          <Text>Toggle Theme</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
