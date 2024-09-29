import BookmarkCard from "@/components/BookmarkCard";
import { Separator } from "@/components/ui/separator";
import Icon from "@/lib/Icons/icon";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookmarkScreen() {
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-between gap-3 p-8">
        <View className="flex flex-col gap-[2px]">
          <Text className="font-bold text-4xl">Kaydedilenler</Text>
          <Text className="text-sm text-black/50">
            Tekrar okumak üzere işaretdiklerin seni bekliyor!
          </Text>
        </View>
        <View>
          <Icon fill={"#000"} name="Bookmark" color="#000" size={48} />
        </View>
      </View>
      <Separator className="bg-zinc-300 my-2" />

      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
        contentContainerStyle={{
          padding: 16,
          gap: 32,
        }}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item, index }) => <BookmarkCard key={index} />}
      />
    </SafeAreaView>
  );
}
