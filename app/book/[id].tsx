import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Href, Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { useColorScheme } from "@/lib/useColorScheme";
import Icon from "@/lib/Icons/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function BookScreen() {
  const { isDarkColorScheme } = useColorScheme();
  const [value, setValue] = React.useState("about");
  //   const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <ImageBackground
        className="w-full aspect-video object-cover"
        src="https://v4-archive.patternfly.org/v4/images/basic.f4f127adeeaf58d28161c05c04b22668.png"
      >
        <BlurView
          intensity={100}
          tint={isDarkColorScheme ? "dark" : "light"}
          className="w-full h-full p-4 flex flex-col justify-between pb-8"
        >
          <View className="flex flex-row justify-between items-center">
            <Link
              href={"/"}
              className="bg-secondary/50 flex p-3 items-center justify-center aspect-square rounded-full"
            >
              <Icon name="ChevronLeft" size={24} />
            </Link>

            <View className="flex flex-row justify-center items-center gap-4">
              <Pressable className="bg-secondary/50 flex p-3 items-center justify-center aspect-square rounded-full">
                <Icon name="Heart" size={24} />
              </Pressable>
              <Pressable className="bg-secondary/50 flex p-3 items-center justify-center aspect-square rounded-full">
                <Icon name="Bookmark" size={24} />
              </Pressable>
            </View>
          </View>

          <View className="flex flex-row w-full gap-2 px-2">
            <View className="bg-primary/25 flex rounded-xl p-2">
              <Image
                src="https://placehold.jp/600x750.png"
                className="aspect-[4/5] w-24 object-cover rounded-lg"
              />
            </View>
            <View className="flex flex-col items-start justify-center">
              <Text className="text-primary text-lg font-bold">
                Lorem ipsum dolar sit
              </Text>
              <Text className="text-primary/50 text-sm">by GrknDev</Text>
              <Text className="text-primary/50 text-xs">3 Season</Text>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
      <View className="p-4">
        <Tabs value={value} onValueChange={setValue}>
          <TabsList className="flex-row w-full">
            <TabsTrigger value="about" className="flex-1 rounded-lg">
              <Text className="text-primary">Hakkında</Text>
            </TabsTrigger>

            <TabsTrigger value="chapters" className="flex-1 rounded-lg">
              <Text className="text-primary">Bölümer</Text>
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex-1 rounded-lg">
              <Text className="text-primary">Yorumlar</Text>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <View className="flex flex-col justify-center items-center w-full gap-16 p-4">
              <View className="flex flex-row w-full justify-center gap-8 items-center">
                <View className="w-24 h-24 flex flex-col gap-1 items-center justify-center bg-muted p-2 rounded-2xl">
                  <Text className="text-primary/50 text-sm">Rating</Text>
                  <Text className="text-primary font-bold  text-lg">4.7</Text>
                </View>
                <View className="w-24 h-24 flex flex-col gap-2 items-center justify-center bg-muted p-2 rounded-2xl">
                  <Text className="text-primary/50 text-sm">Tür</Text>
                  <Text className="text-primary font-bold truncate text-sm">
                    Biyografi
                  </Text>
                </View>
                <View className="w-24 h-24 flex flex-col gap-1 items-center justify-center bg-muted p-2 rounded-2xl">
                  <Text className="text-primary/50 text-sm">Yaş</Text>
                  <Text className="text-primary font-bold  text-lg">14+</Text>
                </View>
              </View>
              <View className="w-full gap-2 items-center justify-center flex flex-col">
                <Text className="text-primary font-bold text-lg">
                  Kitap hakkında
                </Text>
                <Text className="text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  cupiditate earum voluptate ea, vel facere dolorem sint.
                  Dolorum corrupti, dolor dolorem suscipit quidem reprehenderit,
                  minima quo similique aperiam culpa aut.
                </Text>
              </View>
            </View>
          </TabsContent>
          <TabsContent value="chapters" className="p-4  w-full h-[80%]">
            <View style={{ flex: 1 }}>
              <FlatList
                data={Array.from({ length: 10 })}
                contentContainerStyle={{ rowGap: 16 }}
                renderItem={({ item, index }) => (
                  <Link href={`/book/seasons/${index + 1}` as Href}>
                    <View className="flex flex-row gap-2 items-center p-2 ">
                      <Icon name="GalleryVerticalEnd" size={24} />
                      <Text className="text-primary font-medium">
                        {index + 1}. Sezon
                      </Text>
                    </View>
                  </Link>
                )}
                ItemSeparatorComponent={() => (
                  <Separator className="h-0.5 bg-primary/25 mt-4" />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TabsContent>
          <TabsContent value="comments" className="p-4  w-full h-[80%]">
            <View style={{ flex: 1 }}>
              <FlatList
                data={Array.from({ length: 10 })}
                contentContainerStyle={{ rowGap: 16 }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity className="flex flex-col gap-2 items-center p-2 ">
                    <View className="flex flex-row justify-between items-center w-full">
                      <View className="flex flex-row items-center gap-2">
                        <Image
                          src="https://placehold.jp/150x150.png"
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <Text className="text-primary font-medium">
                          GrknDev
                        </Text>
                      </View>
                      <View className="flex flex-row gap-1 items-center">
                        <Icon
                          name="Star"
                          fill={"#FF9500"}
                          color={"#FF9500"}
                          size={12}
                        />
                        <Icon
                          name="Star"
                          fill={"#FF9500"}
                          color={"#FF9500"}
                          size={12}
                        />
                        <Icon
                          name="Star"
                          fill={"#FF9500"}
                          color={"#FF9500"}
                          size={12}
                        />
                        <Icon
                          name="Star"
                          fill={"#FF9500"}
                          color={"#FF9500"}
                          size={12}
                        />
                        <Icon
                          name="Star"
                          fill={"#FF9500"}
                          color={"#FF9500"}
                          size={12}
                        />
                      </View>
                    </View>
                    <Text className="text-primary text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi corporis odio porro quasi dignissimos
                    </Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                  <Separator className="h-0.5 bg-primary/25 mt-4" />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TabsContent>
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
