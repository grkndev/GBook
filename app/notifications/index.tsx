import Text from "@/components/Text";
import Icon from "@/lib/Icons/icon";
import { Link } from "expo-router";
import { FlatList, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationIndex() {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-full">
        <View className="flex flex-row justify-between items-center p-8 border-b border-zinc-200">
          <Link href={"/user"}>
            <Icon name="ChevronLeft" size={24} color="#000" />
          </Link>
          <Text className="font-bold text-2xl">Bildirimler</Text>
          <View className="w-6 h-6" />
        </View>
        <FlatList
          data={Array.from({ length: 20 })}
          renderItem={({ index }) => <NotificationCard text={`${index+1}`} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

function NotificationCard({ text }: { text: string }) {
  return (
    <Pressable className="flex flex-row justify-start items-center w-full p-4 border-b border-zinc-200 gap-2">
      <Image
        src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
        className="w-12 h-12 rounded-full"
      />
      <Text>{text}</Text>
    </Pressable>
  );
}
