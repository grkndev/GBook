import { useColorScheme } from "@/lib/useColorScheme";
import { Image, Pressable, ScrollView, View } from "react-native";
import Text from "components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import MostLikedHero from "@/components/MostLikedHero";
import CategoryList from "@/components/CategoryList";
import { Separator } from "@/components/ui/separator";

export default function HomeScreen() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>
        <View className="bg-blue-500">
          <Pressable
            className="bg-white p-2"
            onPress={() => {
              setColorScheme(isDarkColorScheme ? "light" : "dark");
            }}
          >
            <Text>Toggle Theme</Text>
          </Pressable>
        </View>
        <View className="p-4 flex flex-row items-center justify-between">
          <View className="flex flex-col">
            <Text className="font-bold text-3xl dark:text-white">Hoşgeldin, Gürkan</Text>
            <Text className="text-xs">Heyecan dolu kitaplar seni bekliyor</Text>
          </View>
          <Image
            className="w-16 h-16 rounded-full"
            src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
          />
        </View>
        <Separator className="bg-zinc-300 my-2" />
        <MostLikedHero />
        <View className=" p-4  flex flex-col w-full gap-4 mt-2 mb-8 h-full">
          <CategoryList categoyName="Bilim Kurgu" />
          <CategoryList categoyName="Polisiye" />
          <CategoryList categoyName="Romantizm" />
          <CategoryList categoyName="Modern" />
          <CategoryList categoyName="Klasikler" />
          <CategoryList categoyName="Tüm türler" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
