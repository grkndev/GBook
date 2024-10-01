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

export default function AccountDetailsIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/settings"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">Hesap Detayları</Text>
        <View className="w-6 h-6" />
      </View>
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{ justifyContent: "center" }}
      >
       
        <ScrollView>
          <View className="flex flex-col items-center justify-between w-full p-4 gap-8">
            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">
                Profil fotoğrafı
              </Text>
              <View className="flex flex-row justify-between">
                <Image
                  src="https://placehold.jp/150x150.png"
                  className="w-24 h-24 rounded-full"
                />
                <View className="flex flex-row gap-3 items-center justify-center">
                  <TouchableOpacity className="h-10 bg-primary rounded-2xl px-4 flex items-center justify-center text-center">
                    <Text className="text-secondary">Değiştir</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="h-10 border-destructive border rounded-2xl px-4 flex items-center justify-center text-center">
                    <Text className="text-destructive">Kaldır</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-xs text-primary/50">
                Yeni yükleyeceğiniz fotoğraf en fazla 2MB olabilir. Şık ve
                kullanıcıların sizi tanıyacağı fotoğrafları tercih etmeniz
                tavsiye edeilir.
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">Görünen ad</Text>
              <View className="flex flex-row bg-secondary rounded-2xl p-3">
                <TextInput
                  className="text-primary w-full"
                  placeholder="Görünen adınız"
                />
              </View>
              <Text className="text-xs text-primary/50">
                Görünen adınız profilinizde görünen addır. Kullanıcılar genelde
                sizi bu isimle tanır.
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">
                Kullanıcı adı
              </Text>
              <View className="flex flex-row bg-secondary rounded-2xl p-3">
                <TextInput
                  className="text-primary w-full"
                  placeholder="Kullanıcı adınız"
                />
              </View>
              <Text className="text-xs text-primary/50">
                Kullanıcı adınızı 90 günde bir defa değiştirebilirsiniz.
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">Biyografi</Text>
              <View className="flex flex-row bg-secondary rounded-2xl p-3">
                <TextInput
                  multiline
                  textAlign="left"
                  textAlignVertical="top"
                  className="text-primary w-full min-h-20"
                  placeholder="Biyografi"
                  maxLength={150}
                />
              </View>
              <Text className="text-xs text-primary/50">
                Profilinizi görüntüleyenlere kendiniz hakkında ufak bilgi verin.
                En fazla 150 karakter yazabilirsiniz.
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">Telefon</Text>
              <View className="flex flex-row bg-secondary rounded-2xl p-3">
                <TextInput
                  className="text-primary w-full"
                  placeholder="Telefon numaranız"
                  keyboardType="phone-pad"
                />
              </View>
              <Text className="text-xs text-primary/50">
                Telefon numaranızı değiştirdiğinizde doğrulamak için SMS ile kod
                gönderilecektir. Doğrulama kodu onaylandıktan sonra numaranız
                güncellenecektir.
              </Text>
            </View>

            <View className="flex flex-col gap-2 w-full">
              <Text className="text-primary font-bold text-lg">E-Posta</Text>
              <View className="flex flex-row bg-secondary rounded-2xl p-3">
                <TextInput
                  className="text-primary w-full"
                  placeholder="E-Posta adresiniz"
                  keyboardType="email-address"
                />
              </View>
              <Text className="text-xs text-primary/50">
                E-Posta adresinizi değiştirdiğinizde doğrulamak için kod
                gönderilecektir. Doğrulama kodu onaylandıktan sonra mail
                adresiniz güncellenecektir.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View className="w-full p-6 border-t border-primary/10">
          <TouchableOpacity className="bg-primary p-4 rounded-xl items-center">
            <Text className="text-primary-foreground font-bold">Kaydet</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
