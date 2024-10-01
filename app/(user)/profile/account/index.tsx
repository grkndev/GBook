import HeaderCard from "@/components/HeaderCard";
import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Href, Link, useRouter } from "expo-router";
import { icons } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-zinc-200">
        <Link href={"/profile"}>
          <Icon name="ChevronLeft" size={24} color="#000" />
        </Link>
        <Text className="font-bold text-2xl">Hesap</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="flex w-full flex-col justify-center items-center">
        <View className="w-full">
          <HeaderCard title="İştirak ayarlar" href="/profile/account/partnership" iconName={"Handshake"} />
          <HeaderCard
            title="İstatistikler"
            href="/profile/account/statistics"
            iconName={"ChartNoAxesCombined"}
          />
          <HeaderCard title="Abonelikler ve ödemeler" href="/profile/account/payments" iconName={"CreditCard"} />
          <HeaderCard title="Yardım" href="/profile/account/help" iconName={"CircleHelp"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

