import Text from "@/components/Text";
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
import { PROTOTYPE_DATA } from "./stats";
import { useColorScheme } from "@/lib/useColorScheme";

export default function StatisticsIndex() {
  const { isDarkColorScheme } = useColorScheme();
  const [statsData, setStatsData] = useState(PROTOTYPE_DATA.weekly);
  const [selectedPeriod, setSelectedPeriod] = React.useState<"7" | "14" | "30">(
    "7"
  );
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["20%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsModalVisible(true);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
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
    changeData();
  }, [selectedPeriod]);
  const changeData = () => {
    switch (selectedPeriod) {
      case "7":
        setStatsData(PROTOTYPE_DATA.weekly);
        break;
      case "14":
        setStatsData(PROTOTYPE_DATA.biweekly);
        break;
      case "30":
        setStatsData(PROTOTYPE_DATA.monthly);
        break;
    }
  };

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/account"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">Aktivite</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="w-full px-4 mt-4">
        <Pressable
          className="bg-muted p-2 rounded-xl"
          onPress={handlePresentModalPress}
        >
          <Text className="font-semibold text-primary">
            Son {selectedPeriod} Gün
          </Text>
        </Pressable>
        <BottomSheetModal
          handleIndicatorStyle={{
            backgroundColor: isDarkColorScheme
              ? "hsl(240 4.8% 95.9%)"
              : "hsl(240 3.7% 15.9%)",
          }}
          handleStyle={{
            backgroundColor: isDarkColorScheme
              ? "hsl(240 3.7% 15.9%)"
              : "hsl(240 4.8% 95.9%)",
          }}
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView className="flex-1 items-center p-4 dark:bg-secondary">
            <Pressable
              onPress={() => setSelectedPeriod("7")}
              className={cn(
                "w-full p-2 flex flex-row items-center gap-2 rounded-xl ",
                selectedPeriod === "7" && "bg-muted"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "7" && <Icon name="Check" size={16} />}
              </View>
              <Text className="text-primary">Son 7 Gün</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedPeriod("14")}
              className={cn(
                "w-full p-2 flex flex-row items-center gap-2 rounded-xl",
                selectedPeriod === "14" && "bg-muted"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "14" && <Icon name="Check" size={16} />}
              </View>
              <Text className="text-primary">Son 14 Gün</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedPeriod("30")}
              className={cn(
                "w-full p-2 flex flex-row items-center gap-2 rounded-xl",
                selectedPeriod === "30" && "bg-muted"
              )}
            >
              <View className="w-8 h-8 items-center justify-center">
                {selectedPeriod === "30" && <Icon name="Check" size={16} />}
              </View>
              <Text className="text-primary">Son 30 Gün</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
      <View className="flex w-full flex-col justify-center items-center px-4">
        <View className="w-full py-8">
          {/* <FlatList
            data={statsData}
            numColumns={2}
            renderItem={({ item }) => (
              <Card
                title="Hesap durumu"
                // period="/hafta"
                value="22.4K"
                persentage={40}
              />
            )}
            key={"#"}
            keyExtractor={(_, index) => "#" + index.toString()}
            contentContainerStyle={{ gap: 16 }}
            columnWrapperStyle={{ gap: 16, justifyContent: "space-between" }}
          /> */}
          <View className="flex flex-row flex-wrap gap-4  justify-between">
            <Card
              title={"Profil Ziyaretleri"}
              value={statsData.profileVisits.newValue}
              persentage={Math.round(
                ((statsData.profileVisits.newValue /
                  statsData.profileVisits.oldValue) *
                  100) /
                  2
              )}
            />
            <Card
              title={"Yeni Okuyucu"}
              value={statsData.newReaders.newValue}
              persentage={Math.round(
                ((statsData.newReaders.newValue /
                  statsData.newReaders.oldValue) *
                  100) /
                  2
              )}
            />
            <Card
              title={"Geri Gelen Okuyucu"}
              value={statsData.returningReaders.newValue}
              persentage={Math.round(
                ((statsData.returningReaders.newValue /
                  statsData.returningReaders.oldValue) *
                  100) /
                  2
              )}
            />
            <Card
              title={"Beğeni"}
              value={statsData.likes.newValue}
              persentage={Math.round(
                ((statsData.likes.newValue / statsData.likes.oldValue) * 100) /
                  2
              )}
            />
            <Card
              title={"Okuma Süresi"}
              value={statsData.readingTime.newValue}
              persentage={Math.round(
                ((statsData.readingTime.newValue /
                  statsData.readingTime.oldValue) *
                  100) /
                  2
              )}
            />
            <Card
              title={"Takipçi"}
              value={statsData.followers.newValue}
              persentage={Math.round(
                ((statsData.followers.newValue / statsData.followers.oldValue) *
                  100) /
                  2
              )}
            />
          </View>
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
  value: number;
  persentage: number;
}) {
  return (
    <Pressable className="bg-muted rounded-xl p-4 w-[48%]">
      <View className="flex flex-row items-center justify-between">
        {typeof title === "string" ? (
          <Text className="font-bold text-base text-primary">{title}</Text>
        ) : (
          title
        )}
        <Text className="text-primary/25 text-sm">{period}</Text>
      </View>
      <Separator className="bg-primary/10 my-2" />
      <View className="flex flex-row items-center justify-between">
        <Text className="text-3xl font-bold text-primary">{value}</Text>
        <View className="flex flex-row gap-1 items-center justify-center">
          <Icon name="ArrowUp" size={18} color="#22c55e" />
          <Text
            className={cn(
              "text-2xl font-bold",
              persentage > 20 ? "text-green-500" : "text-red-500"
            )}
          >
            {persentage}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
