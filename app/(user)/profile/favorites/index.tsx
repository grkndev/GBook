import BookCard from "@/components/BookCard";
import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Link } from "expo-router";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FavIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile"}>
          <Icon name="ChevronLeft" size={24} />
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
