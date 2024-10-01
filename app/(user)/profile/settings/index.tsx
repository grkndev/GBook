import HeaderCard from "@/components/HeaderCard";
import Text from "@/components/Text";
import { Switch } from "@/components/ui/switch";
import Icon from "@/lib/Icons/icon";
import { Href, Link, useRouter } from "expo-router";
import { icons } from "lucide-react-native";
import React from "react";
import { FlatList, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsIndex() {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-zinc-200">
        <Link href={"/profile"}>
          <Icon name="ChevronLeft" size={24} color="#000" />
        </Link>
        <Text className="font-bold text-2xl">Ayarlar</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="flex w-full flex-col justify-center items-center">
        <View className="w-full">
          <HeaderCard
            title="Hesap detayları"
            href="/profile/settings/accountdetails"
            iconName={"UserRound"}
          />
          <HeaderCard
            title="Şifre değiştir"
            href="/profile/settings/changepassword"
            iconName={"KeyRound"}
          />
          <HeaderCard
            title="Hesap aktiviteleri"
            href="/profile/settings/accountactivity"
            iconName={"SquareActivity"}
          />
          <HeaderCard
            title="Uygulama dili"
            href="/profile/settings/language"
            iconName={"Languages"}
          />
          <Pressable
            onPress={() => {
              setChecked(!checked);
            }}
            className="flex flex-row items-center justify-between p-8 border-b border-zinc-200"
          >
            <View className="flex flex-row items-center justify-center gap-4">
              <Icon name={"SunMoon"} size={24} color="#000" />
              <Text className="font-medium text-xl">{"Koyu Tema"}</Text>
            </View>
            <View className="flex flex-row items-center justify-center">
            <Switch checked={checked} onCheckedChange={setChecked} nativeID='dark-mode' />
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
