import Card from "@/components/HeaderCard";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Icon from "@/lib/Icons/icon";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LanguageIndex() {
  const [languageList, setLanguageList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState({
    native: "Türkçe",
    code: "tr",
    ISO639: "tr",
    name: "Turkish",
  });
  useEffect(() => {
    fetchLanguages();
  }, []);
  async function fetchLanguages() {
    const response = await fetch("/api/languagelist");
    const data = await response.json();
    setLanguageList(data);
  }
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="flex flex-col justify-between "
    >
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/settings"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">Dili değiştir</Text>
        <View className="w-6 h-6" />
      </View>

      <View style={{ flex: 1 }} className="px-4">
        {languageList.length > 0 ? (
          <>
            <TouchableOpacity
              key={selectedLanguage.code}
              className="w-full p-2 flex flex-row items-center justify-between"
            >
              <Text>{selectedLanguage.native}</Text>
              <Icon name="Check" size={16} />
            </TouchableOpacity>
            <Separator className="border-primary/10 h-[2px] w-full" />
            <FlatList
              className="w-full"
              data={languageList}
              showsVerticalScrollIndicator={false}
              key={"#"}
              keyExtractor={(item, index) => "#" + index.toString()}
              renderItem={({
                item,
              }: {
                item: {
                  code: string;
                  ISO639: string;
                  name: string;
                  native: string;
                };
              }) => (
                <>
                  <TouchableOpacity
                    key={item.code}
                    className="w-full p-2 items-start justify-center"
                  >
                    <Text>{item.native}</Text>
                  </TouchableOpacity>
                  <Separator className="border-primary/10 h-[2px] w-full" />
                </>
              )}
            />
          </>
        ) : (
          <View className="flex flex-col gap-8">
            {Array.from({ length: 16 }).map((_, index) => (
              <Skeleton
                className="h-4 w-full rounded-full "
                key={index.toString()}
              />
            ))}
          </View>
        )}
      </View>

      {languageList.length > 0 && (
        <View className="w-full p-6 border-t border-primary/10 ">
          <TouchableOpacity className="bg-primary p-4 rounded-xl items-center">
            <Text className="text-primary-foreground font-bold">Kaydet</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
