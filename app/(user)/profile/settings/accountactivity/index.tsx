import Card from "@/components/HeaderCard";
import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import Icon from "@/lib/Icons/icon";
import { Link } from "expo-router";

import {
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

export default function ActivityScreen() {
  return (
    <SafeAreaView className="flex flex-col justify-between ">
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/settings"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">Aktivite</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="flex flex-col gap-2 w-full p-4">
        <Text className="text-primary font-bold text-lg">Son giriş</Text>

        <View className="flex flex-col bg-secondary rounded-2xl p-3 gap-2 items-start justify-start">
          <View className="flex flex-row items-center justify-center gap-2">
            <View className="flex flex-row items-center justify-center gap-2">
              <Icon name="Smartphone" size={12} />
              <Text className="text-primary font-bold text-sm">Cihaz</Text>
            </View>
            <Text className="text-sm ">iOS 18 (12.12.12.12)</Text>
          </View>

          <View className="flex flex-row items-center justify-center gap-2">
            <View className="flex flex-row items-center justify-center gap-2">
              <Icon name="Calendar" size={12} />
              <Text className="text-primary font-bold text-sm">Tarih</Text>
            </View>
            <Text className="text-sm ">24/09/2024 - 22:30</Text>
          </View>

          <View className="flex flex-row items-center justify-center gap-2">
            <View className="flex flex-row items-center justify-center gap-2">
              <Icon name="MapPin" size={12} />
              <Text className="text-primary font-bold text-sm">Konum</Text>
            </View>
            <Text className="text-sm ">Ankara, TR</Text>
          </View>
        </View>
      </View>

      <View className="flex flex-col gap-2 w-full p-4">
        <Text className="text-primary font-bold text-lg">Hesap hakkında</Text>

        <View className="flex flex-col bg-secondary rounded-2xl p-3 gap-2 items-start justify-start">
          <View className="flex flex-row items-center justify-center gap-2">
            <Icon name="Calendar" size={12} />
            <Text className="text-sm ">01.01.2001 Tarihinde oluşturuldu.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
