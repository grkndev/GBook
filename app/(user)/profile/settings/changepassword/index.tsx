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

export default function ChangePasswordIndex() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="flex flex-col justify-between "
    >
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/settings"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">
          Parolayı değiştir
        </Text>
        <View className="w-6 h-6" />
      </View>

      <View
        style={{ flex: 1 }}
        className="flex flex-col items-center w-full p-4 gap-8"
      >
        <View className="flex flex-col gap-2 w-full">
          <Text className="text-primary font-bold text-lg">
            Mevcut şifreniz
          </Text>
          <View className="flex flex-row bg-secondary rounded-2xl p-3">
            <TextInput
              className="text-primary w-full"
              placeholder="Mevcut şifreniz"
              placeholderTextColor={"hsl(240 3.8% 46.1%)"}
              secureTextEntry
            />
          </View>
          <Text className="text-xs text-primary/50">
            Şuanda aktif olarak kullanmakta olduğunuz şifrenizi giriniz.
          </Text>
        </View>

        <View className="flex flex-col gap-2 w-full">
          <Text className="text-primary font-bold text-lg">Yeni şifreniz</Text>
          <View className="flex flex-row bg-secondary rounded-2xl p-3">
            <TextInput
              className="text-primary w-full"
              placeholder="Yeni şifreniz"
              placeholderTextColor={"hsl(240 3.8% 46.1%)"}
              secureTextEntry
            />
          </View>
          <Text className="text-xs text-primary/50">
            Bu şifre yeni şifreniz olacaktır. Güçlü ve unutmayacağınız bir şifre
            tercih ediniz.
          </Text>
        </View>

        <View className="flex flex-col gap-2 w-full">
          <Text className="text-primary font-bold text-lg">
            Yeni şifreniz (Tekrar)
          </Text>
          <View className="flex flex-row bg-secondary rounded-2xl p-3">
            <TextInput
              className="text-primary w-full"
              placeholder="Yeni şifreniz tekrar"
              placeholderTextColor={"hsl(240 3.8% 46.1%)"}
              secureTextEntry
            />
          </View>
          <Text className="text-xs text-primary/50">
            Yeni şifrenizi tekrar giriniz.
          </Text>
        </View>
      </View>

      <View className="w-full p-6 border-t border-primary/10 ">
        <TouchableOpacity className="bg-primary p-4 rounded-xl items-center">
          <Text className="text-primary-foreground font-bold">Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
