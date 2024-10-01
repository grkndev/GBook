import Text from "@/components/Text";
import { Separator } from "@/components/ui/separator";
import Icon from "@/lib/Icons/icon";
import PartnerIcon from "@/lib/Icons/Partner";
import { Link } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PartnerShipIndex() {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center p-8 border-b border-primary/10">
        <Link href={"/profile/account"}>
          <Icon name="ChevronLeft" size={24} />
        </Link>
        <Text className="font-bold text-2xl text-primary">İştirak ayarları</Text>
        <View className="w-6 h-6" />
      </View>

      <View className="flex w-full flex-col justify-center items-center px-4">
        <View className="w-full gap-4 mt-4">
          <Card
            title="Hesap durumu"
            title2="Ortaklık programına dahil edilmiş"
            description="Hesabınız onaylandı. Artık iştirak özelliklerini kullanabilirsiniz."
          />
          <Card
            title="Para kazanma"
            title2="Aktif"
            description="Kitap yayınlayarak ve faydalı yorumlarda bulunarak para kazanabilirsiniz."
          />
          <Card
            title="Banka bilgilerini düzenle"
            title2=""
            description="Banka ayarlarını düzenleyerek paranızın hangi hesaba yatırılacağını ayarlayın."
          />
          <Card
            title="Abonelik ayarları"
            title2=""
            description="Kazanalınızın abonelik bilgilerini bu menüden düzeleyin"
          />
          <Card
            title={
                <View className="flex flex-row items-center">
                    <PartnerIcon  />
                    <Text className="font-bold text-lg text-primary">Doğrula</Text>
                </View>
            }
            title2="Zaten programa dahil"
            description="Hesap adınızın yanında görünen şöhretli bir işaret."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
function Card({
  title,
  title2,
  description,
}: {
  title: string | React.ReactNode;
  title2?: string | React.ReactNode;
  description: string;
}) {
  return (
    <Pressable className="bg-muted rounded-xl p-4">
      <View className="flex flex-row items-center justify-between">
        {typeof title === "string" ? (
          <Text className="font-bold text-lg text-primary">{title}</Text>
        ) : (
          title
        )}
        <Text className="text-green-500 ">{title2}</Text>
      </View>
      <Separator className="bg-primary/20 my-2" />
      <Text className="text-xs text-primary/50">{description}</Text>
    </Pressable>
  );
}
