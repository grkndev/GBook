import { Image, Text, View } from "react-native";
export default function BookmarkCard() {
  return (
    <View className="flex justify-center items-center flex-col gap-1">
      <View className="w-36 h-36 p-4 bg-zinc-300  items-center justify-center rounded-2xl">
        <View className="w-14 h-14 flex flex-col items-center justify-center gap-2">
          <View className="w-full h-full flex flex-row items-center justify-center gap-2">
            <Image
              className="w-full aspect-square rounded-lg"
              src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
            />
            <Image
              className="w-full aspect-square rounded-lg"
              src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
            />
          </View>
          <View className="w-full h-full flex flex-row items-center justify-center gap-2">
            <Image
              className="aspect-square h-full rounded-lg"
              src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
            />
            <Image
              className="aspect-square h-full rounded-lg"
              src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
            />
          </View>
        </View>
      </View>
      <Text className="text-sm font-bold">Favori Yazarlarım</Text>
    </View>
  );
}
