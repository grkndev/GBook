import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { MDXComponents } from "@bacons/mdx";
import Demo from "~/books/demo.mdx";

export default function BookContent() {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-center w-full gap-4 p-4">
        <Text className="text-primary text-2xl font-bold">Bölüm 1: Pilot</Text>
        <ScrollView className="w-full">
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
