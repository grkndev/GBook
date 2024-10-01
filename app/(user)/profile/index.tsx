import Card from "@/components/HeaderCard";
import Text from "@/components/Text";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-between w-full h-full py-8">
        <View className="flex w-full flex-col justify-center items-center">
          <View className="w-full">
            <Card
              title="Hesap"
              href="/profile/account"
              iconName={"UserRound"}
            />
            <Card
              title="Favorilerim"
              href="/profile/favorites"
              iconName={"Heart"}
            />
            <Card title="Ayarlar" href="/user" iconName={"Settings"} />
            <Card title="Çıkış Yap" href="/user" iconName={"LogOut"} />
          </View>
        </View>
        <View>
          <Text className="text-black/25">Uygulama sürümü: 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
