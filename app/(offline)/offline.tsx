import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Offline() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="h-full p-8 sm:p-16 flex items-center justify-center flex-col gap-3">
        <View className="bg-red-500/50 flex items-center justify-center p-6 rounded-full">
          <Icon name="WifiOff" size={48} />
        </View>
        <Text className="text-primary text-2xl font-bold">Opps!</Text>
        <Text className="text-primary text-lg text-center">
          You are currently offline. To read the latest books, check your
          internet connection and make sure you have an active internet
          connection.
        </Text>
      </View>
    </SafeAreaView>
  );
}
