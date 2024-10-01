import { Image, Text, View } from "react-native";
export default function BookmarkCard() {
  return (
    <View className="flex justify-center items-center flex-col gap-1">
      <View className="w-36 h-36 p-4 bg-secondary  items-center justify-center rounded-2xl">
        <View className="w-14 h-14 flex flex-col items-center justify-center gap-2">
          <View className="w-full h-full flex flex-row items-center justify-center gap-2">
            <Image
              className="w-full aspect-square rounded-lg"
              src="https://via.placeholder.com/150"
            />
            <Image
              className="w-full aspect-square rounded-lg"
              src="https://via.placeholder.com/150"
            />
          </View>
          <View className="w-full h-full flex flex-row items-center justify-center gap-2">
            <Image
              className="aspect-square h-full rounded-lg"
              src="https://via.placeholder.com/150"
            />
            <Image
              className="aspect-square h-full rounded-lg"
              src="https://via.placeholder.com/150"
            />
          </View>
        </View>
      </View>
      <Text className="text-sm font-bold text-primary">Favori Yazarlarım</Text>
    </View>
  );
}
