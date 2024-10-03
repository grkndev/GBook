import Text from "@/components/Text";
import { Image, Pressable, View } from "react-native";

export default function BookCard() {
    return (
      <Pressable className="w-28 md:w-48 p-2 bg-secondary rounded-xl gap-2">
        <View className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://placehold.jp/600x750.png"
            className="aspect-[4/5] w-24 md:w-48 object-cover"
          />
        </View>
        <Text className="text-sm text-center truncate text-primary">
          Lorem ipsum dolor sit amet.
        </Text>
      </Pressable>
    );
  }
  