import HeaderCard from "@/components/HeaderCard";
import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Href, Link, useRouter } from "expo-router";
import { icons } from "lucide-react-native";
import { FlatList, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FavIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile"}>
          <Icon name="ChevronLeft" size={24}  />
        </Link>
        <Text className="font-bold text-2xl text-primary">Favorileirm</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="flex w-full justify-center items-center pb-8">
        <FlatList
          data={Array.from({ length: 25 })}
          columnWrapperStyle={{ justifyContent: "space-around", gap: 4 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 32 }}
          className="w-full p-4"
          numColumns={3}
          key={"#"}
          keyExtractor={(item, index) => "#" + index.toString()}
          renderItem={({ item }) => <BookCard />}
        />
      </View>
    </SafeAreaView>
  );
}

function BookCard() {
  return (
    <Pressable className="max-w-28 p-2 bg-secondary rounded-xl gap-2">
      <View className="w-full rounded-xl overflow-hidden">
        <Image
          src="https://placehold.jp/600x750.png"
          className="aspect-[4/5] w-24 object-cover"
        />
      </View>
      <Text className="text-sm text-center truncate text-primary">
        Lorem ipsum dolor sit amet.
      </Text>
    </Pressable>
  );
}
