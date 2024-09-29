import Text from "@/components/Text";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import * as PopoverPrimitive from "@rn-primitives/popover";
import { Separator } from "@/components/ui/separator";
import Icon from "@/lib/Icons/icon";
import { cn } from "@/lib/utils";
import { Link } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FlatList, Pressable, View, Platform } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
export default function StatisticsIndex() {
  const [selectedPeriod, setSelectedPeriod] = React.useState<"7" | "14" | "30">(
    "7"
  );
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["22%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsModalVisible(true);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      setIsModalVisible(false);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  useEffect(() => {
    bottomSheetModalRef.current?.close();
    console.log("selectedPeriod", selectedPeriod);
  }, [selectedPeriod]);

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-zinc-200">
        <Link href={"/profile/account"}>
          <Icon name="ChevronLeft" size={24} color="#000" />
        </Link>
        <Text className="font-bold text-2xl">Aktivite</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="w-full px-4 mt-4">
        <Pressable
          className="bg-zinc-200 p-2 rounded-xl"
          onPress={handlePresentModalPress}
        >
          <Text className="font-semibold">Son {selectedPeriod} Gün</Text>
        </Pressable>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView className="flex-1 items-center p-4">
            <Pressable
              onPress={() => setSelectedPeriod("7")}
              className={cn("w-full p-2 flex flex-row items-center gap-2 rounded-xl",
                selectedPeriod === "7" && "bg-zinc-200"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "7" && (
                  <Icon name="Check" size={16} color="#000" />
                )}
              </View>
              <Text>Son 7 Gün</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedPeriod("14")}
              className={cn("w-full p-2 flex flex-row items-center gap-2 rounded-xl",
                selectedPeriod === "14" && "bg-zinc-200"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "14" && (
                  <Icon name="Check" size={16} color="#000" />
                )}
              </View>
              <Text>Son 14 Gün</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedPeriod("30")}
              className={cn("w-full p-2 flex flex-row items-center gap-2 rounded-xl",
                selectedPeriod === "30" && "bg-zinc-200"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "30" && (
                  <Icon name="Check" size={16} color="#000" />
                )}
              </View>
              <Text>Son 30 Gün</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View className="flex w-full flex-col justify-center items-center px-4">
        <View className="w-full py-8">
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            numColumns={2}
            renderItem={({ item }) => (
              <Card
                title="Hesap durumu"
                period="/hafta"
                value="22.4K"
                persentage={40}
              />
            )}
            key={"#"}
            keyExtractor={(_, index) => "#" + index.toString()}
            contentContainerStyle={{ gap: 16 }}
            columnWrapperStyle={{ gap: 16, justifyContent: "space-between" }}
          />
        </View>
      </View>
      {isModalVisible && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          className="absolute inset-0 bg-black/50"
        />
      )}
    </SafeAreaView>
  );
}
function Card({
  title,
  period,
  value,
  persentage,
}: {
  title: string | React.ReactNode;
  period?: string | React.ReactNode;
  value: string;
  persentage: number;
}) {
  return (
    <Pressable className="bg-zinc-200 rounded-xl p-4 w-[48%]">
      <View className="flex flex-row items-center justify-between">
        {typeof title === "string" ? (
          <Text className="font-bold text-base">{title}</Text>
        ) : (
          title
        )}
        <Text className="text-black/25 text-sm">{period}</Text>
      </View>
      <Separator className="bg-zinc-300 my-2" />
      <View className="flex flex-row items-center justify-between">
        <Text className="text-3xl font-bold text-black">{value}</Text>
        <Text
          className={cn(
            "text-2xl font-bold",
            persentage > 20 ? "text-green-500" : "text-red-500"
          )}
        >
          {persentage}%
        </Text>
      </View>
    </Pressable>
  );
}
