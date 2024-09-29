import Icon from "@/lib/Icons/icon";
import { Href, useRouter } from "expo-router";
import { icons } from "lucide-react-native";
import { Pressable, View } from "react-native";
import Text from "@/components/Text";

export default function HeaderCard({
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
