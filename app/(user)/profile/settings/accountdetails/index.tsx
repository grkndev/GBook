import Card from "@/components/HeaderCard";
import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Link } from "expo-router";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountDetailsIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/settings"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">Hesap Detayları</Text>
        <View className="w-6 h-6" />
      </View>
      <View className="flex flex-col items-center justify-between w-full h-full ">
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
            <Card title="Ayarlar" href="/profile/settings" iconName={"Settings"} />
            <Card title="Çıkış Yap" href="/user" iconName={"LogOut"} />
          </View>
        </View>
        <View>
          <Text className="text-primary/25">Uygulama sürümü: 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
