import { Image, View } from "react-native";
import Text from "./Text";

export default function MostLikedHero() {
  return (
    <View className="flex flex-col items-start justify-center gap-y-2 p-4 ">
      <View className="flex flex-col">
        <Text className="font-bold text-2xl">ÇOOOK Beğenildi!</Text>
        <Text className="text-sm">Okuyanlar bu yazıyı çok beğeniyor.</Text>
      </View>
      <Image
        src="https://via.placeholder.com/1500x500.png"
        className="w-full aspect-video h-auto rounded-3xl"
      />
    </View>
  );
}
