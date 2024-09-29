import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import Icon from "@/lib/Icons/icon";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserScreen() {
  const [postList, setPostList] = useState(9);
  const [hasFollowing, setHasFollowing] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView className="px-8 py-4">
        <View className="flex flex-row items-center justify-between">
          <Pressable onPress={() => router.back()} className="p-2">
            <Icon name="ChevronLeft" size={24} color="#000" />
          </Pressable>
          <View className="flex flex-row items-center justify-center gap-4">
            <Link href={"/notifications"} className="p-2">
              <Icon name="Bell" size={24} color="#000" />
            </Link>
            <Link href={"/profile"} className="p-2">
              <Icon name="Settings" size={24} color="#000" />
            </Link>
          </View>
        </View>
        <View className="flex flex-col items-center justify-center mt-8">
          <View className="flex flex-col items-center justify-center gap-y-2">
            <Image
              className="rounded-full w-48 h-48"
              src="https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/me3.jpg"
            />
            <View className="flex flex-col items-center justify-center mt-4">
              <Text className="font-bold text-2xl">GrknDev</Text>
              <Text className="text-black/50">@grkndev</Text>
            </View>
            <Text className="text-center mt-2 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              maximus nisi odio, ut lobortis odio condimentum a. Integer et enim
              et mi consectetur solli
            </Text>
            <View className="flex flex-row w-full ">
              <View className="w-24 h-24 flex flex-col items-center justify-center p-2">
                <Text className="font-bold text-lg">9</Text>
                <Text className="font-semibold text-xs">Paylaşım</Text>
              </View>
              <View className="w-24 h-24 flex flex-col items-center justify-center p-2">
                <Text className="font-bold text-lg">100M</Text>
                <Text className="font-semibold text-xs">Takipçi</Text>
              </View>
              <View className="w-24 h-24 flex flex-col items-center justify-center p-2">
                <Text className="font-bold text-lg">1</Text>
                <Text className="font-semibold text-xs">Takip Edilen</Text>
              </View>
            </View>
            <View className="flex mb-8 w-full">
              {hasFollowing ? (
                <Button
                  onPress={() => setHasFollowing(false)}
                  className="bg-[#DC2626] rounded-2xl px-4 items-center justify-center flex"
                >
                  <Text className="text-white">Takipten Çık</Text>
                </Button>
              ) : (
                <Button
                  onPress={() => setHasFollowing(true)}
                  className="bg-[#131313] rounded-2xl px-4 items-center justify-center flex"
                >
                  <Text className="text-white">Takip Et</Text>
                </Button>
              )}
            </View>
          </View>
          <View className="items-center justify-center flex flex-col gap-6">
            <Text className="font-bold">GrknDev'in paylaşımları</Text>
            <View className="flex flex-row flex-wrap gap-4 items-center justify-center mb-8">
              <FlatList
                key={"#"}
                scrollEnabled={false}
                data={Array.from({ length: postList })}
                renderItem={() => (
                  <Card
                    title="title"
                    imageUrl="https://via.placeholder.com/150"
                  />
                )}
                keyExtractor={(item, index) => "_" + index.toString()}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                contentContainerStyle={{ gap: 16 }}
                // onEndReached={() => {
                //   setPostList(postList + 9);
                // }}
                // refreshControl={<ActivityIndicator />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
