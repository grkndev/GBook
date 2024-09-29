import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Href, useRouter } from "expo-router";
import { icons } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-between w-full h-full py-8">
        <View className="flex w-full flex-col justify-center items-center">
          <View className="w-full">
            <Card title="Hesap"       href="/user" iconName={"UserRound"} />
            <Card title="Favorilerim" href="/user" iconName={"Heart"} />
            <Card title="Ayarlar"     href="/user" iconName={"Settings"} />
            <Card title="Çıkış Yap"   href="/user" iconName={"LogOut"} />
          </View>
        </View>
        <View>
          <Text className="text-black/25">Uygulama sürümü: 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Card({
  iconName,
  title,
  href,
}: {
  iconName: keyof typeof icons;
  title: string;
  href: Href<string | object>;
}) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(href);
      }}
      className="flex flex-row items-center justify-between p-8 border-b border-zinc-200"
    >
      <View className="flex flex-row items-center justify-center gap-4">
        <Icon name={iconName} size={24} color="#000" />
        <Text className="font-medium text-xl">{title}</Text>
      </View>
      <View className="flex flex-row items-center justify-center">
        <Icon name="ChevronRight" size={24} color="#000" />
      </View>
    </Pressable>
  );
}
