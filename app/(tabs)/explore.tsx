import Text from "@/components/Text";
import { TextInput, View } from "react-native";
import { Input } from "~/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/lib/Icons/icon";
import { Separator } from "@/components/ui/separator";
import CategoryList from "@/components/CategoryList";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View className="flex flex-col gap-3 p-4">
        <View className="flex flex-col gap-[2px]">
          <Text className="font-bold text-4xl text-primary">Ara</Text>
          <Text>Favori yazılar, yazarlar ve daha fazlası</Text>
        </View>
        <View className="bg-primary/20 rounded-full flex flex-row w-full overflow-hidden  p-4 gap-2 items-center justify-start border-zinc-400">
          <Icon name="Search" color="#b3b3b3" size={24} />
          <TextInput
            placeholder="Ara"
            className="w-[76vw] font-medium  text-primary"
          />
        </View>
      </View>
      <Separator className="bg-secondary my-2" />
      <View className="flex flex-col gap-6 p-4">
        <CategoryList categoyName="Favori Yazarlar" />
        <CategoryList categoyName="Gündemdekiler" />
        <CategoryList categoyName="Türler" />
      </View>
    </SafeAreaView>
  );
}
