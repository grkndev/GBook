import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, Link, useLocalSearchParams } from "expo-router";
import Icon from "@/lib/Icons/icon";
import { Separator } from "@/components/ui/separator";

export default function Seasons() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        gap: 16,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text className="text-primary font-bold text-xl">
        Sezon {id} (10 Chapters)
      </Text>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={Array.from({ length: 20 })}
          contentContainerStyle={{ rowGap: 16 }}
          renderItem={({ item, index }) => (
            <Link href={`/book/content/${id}-${index + 1}` as Href}>
              <View className="flex flex-row gap-2 items-center p-2 ">
                <Icon name="Book" size={24} />
                <Text className="text-primary font-medium">
                  {index + 1}. Bölüm
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
    </SafeAreaView>
  );
}
