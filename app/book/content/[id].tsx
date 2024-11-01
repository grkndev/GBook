import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,

} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";
import Markdown from "react-native-markdown-display";
import { cacheManager } from "@/lib/storage";
import Icon from "@/lib/Icons/icon";
import { useMarkdownStyles } from "@/lib/MarkdownStyles";

export default function BookContent() {
  const { id } = useLocalSearchParams();
  const [season, chapter] = (id as string).split("-");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const markdownStyles = useMarkdownStyles();
  const [isCache, setIsCache] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const cacheKey = `book-${season}-${chapter}`;

        // Önbellekten kontrol et
        const cachedContent = await cacheManager.get(cacheKey);
        if (cachedContent) {
          setIsCache(true);
          setContent(cachedContent);
          setLoading(false);
          return;
        }

        const cdnUri =
          "https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/demo1.mdx";
        // CDN'den fetch et
        const response = await fetch(
          cdnUri //`https://your-cdn-url.com/books/${season}/chapter-${chapter}.md`
        );

        if (!response.ok) {
          throw new Error("Content could not be loaded");
        }

        const markdownContent = await response.text();

        // Önbelleğe kaydet
        await cacheManager.set(cacheKey, markdownContent);
        setIsCache(false);
        setContent(markdownContent);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [season, chapter]);

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
          <Text className="text-center text-primary/60">
            {isCache ? "Cached content" : "Content fetched from CDN"}
          </Text>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : error ? (
            <Text className="text-red-500">{error}</Text>
          ) : (
            <Markdown style={markdownStyles}>{content}</Markdown>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
