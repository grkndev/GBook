import { FlatList, Image, Pressable, View } from "react-native";
import Text from "./Text";
import Icon from "@/lib/Icons/icon";
import { Suspense, useEffect, useState } from "react";
import Card from "./Card";

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
        <Text className="text-2xl font-bold text-primary">
          {state.categoryName}
        </Text>
        <Icon
          name="ChevronRight"
          size={20}
        />
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
