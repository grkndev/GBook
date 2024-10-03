import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import { MDXComponents } from "@bacons/mdx";
import Demo from "~/books/demo.mdx";
import Icon from "@/lib/Icons/icon";

export default function BookContent() {
  const { id } = useLocalSearchParams();
  const [season, chapter] = (id as string).split("-");
  return (
    <SafeAreaView className="w-full">
      <View className="w-full flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={`/book/seasons/${season}`}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">
          Bölüm {chapter}: Part title
        </Text>
        <View className="w-6 h-6" />
      </View>
      <View className="flex flex-col items-center justify-center w-full gap-4 pt-4 mb-8 px-4">
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          style={{ height: "90%" }}
        >
          <MDXComponents
            components={{
              h1: (props) => (
                <Text
                  {...props}
                  className="text-primary"
                  style={{ fontSize: 32, fontWeight: "bold" }}
                />
              ),
              h2: (props) => (
                <Text
                  {...props}
                  className="text-primary"
                  style={{ fontSize: 24 }}
                />
              ),
              h3: (props) => (
                <Text
                  {...props}
                  className="text-primary"
                  style={{ fontSize: 20 }}
                />
              ),
              h4: (props) => (
                <Text
                  {...props}
                  className="text-primary"
                  style={{ fontSize: 16 }}
                />
              ),
              p: (props) => <Text {...props} className="text-primary" />,
              a: (props) => (
                <Text
                  {...props}
                  className="text-primary font-medium underline"
                />
              ),
            }}
          >
            <Demo />
          </MDXComponents>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
