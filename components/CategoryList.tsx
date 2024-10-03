import {
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import Text from "./Text";
import Icon from "@/lib/Icons/icon";
import { Suspense, useEffect, useRef, useState } from "react";
import Card from "./Card";
import { Animated } from "react-native";

type CategoryData = {
  id: number;
  slug: string;
  title: string;
  img: string;
};
export default function CategoryList({ categoyName }: { categoyName: string }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = useWindowDimensions().width > 640 ? 192 : 112;
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
        <Icon name="ChevronRight" size={20} />
      </Pressable>

      <Animated.FlatList
        data={state.data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 4),
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                transform: [{ scale }],
              }}
            >
              <Card title={item.title} imageUrl={item.img} href={"bookId1"} />
            </Animated.View>
          );
        }}
        keyExtractor={(_, index) => _.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="w-full"
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
}
