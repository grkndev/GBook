import { FlatList, Image, Pressable, View } from "react-native";
import Text from "./Text";
import Icon from "@/lib/Icons/icon";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
const fontSize = 12; // text-xs için yaklaşık font boyutu (piksel cinsinden)
const maxWidth = 112; // w-28 için yaklaşık genişlik (4 * 28 = 112 piksel)

type CategoryData = {
  id: number;
  slug: string;
  title: string;
  img: string;
};
export default function CategoryList({ categoyName }: { categoyName: string }) {
  const [state, setState] = useState<{
    categoryName: string;
    data: CategoryData[];
  }>();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await fetch("/api/categories?categoryName=" + categoyName);
    const data = await res.json();
    setState(data);
  }
  if (!state) return null;

  return (
    <View className="flex flex-col items-start justify-start gap-2 ">
      <Pressable className="flex flex-row items-center justify-center gap-2">
        <Text className="text-2xl font-bold">{state.categoryName}</Text>
        <Icon name="ChevronRight" color="black" size={20} />
      </Pressable>
      <FlatList
        data={state.data}
        renderItem={({ item }) => (
          <Card title={item.title} imageUrl={item.img} />
        )}
        keyExtractor={(_, index) => _.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="w-full"
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
}
const Card = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  const maxChars = calculateMaxCharsInLine(fontSize, maxWidth);
  return (
    <Suspense fallback={<Skeleton className="h-28 w-28 rounded-2xl" />}>
      <Pressable className="flex flex-col gap-y-2 w-28">
        <Image className="w-28 aspect-square rounded-2xl" src={imageUrl} />
        <Text className="text-xs w-full px-2">{truncate(title, maxChars)}</Text>
      </Pressable>
    </Suspense>
  );
};

const truncate = (str: string, n: number) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const calculateMaxCharsInLine = (
  fontSize: number,
  maxWidth: number
): number => {
  // Ortalama karakter genişliği için yaklaşık bir değer (fontSize'ın 0.6'sı olarak varsayalım)
  const avgCharWidth = fontSize * 0.6;

  // Maksimum karakter sayısını hesapla
  const maxChars = Math.floor(maxWidth / avgCharWidth);

  return maxChars;
};
