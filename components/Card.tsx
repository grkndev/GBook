import { Image, Pressable } from "react-native";
import { Suspense } from "react";

import { calculateMaxCharsInLine, truncate } from "@/lib/utils";
import Text from "./Text";
import { Skeleton } from "./ui/skeleton";
import { Href, useRouter } from "expo-router";
const fontSize = 12; // text-xs için yaklaşık font boyutu (piksel cinsinden)
const maxWidth = 112; // w-28 için yaklaşık genişlik (4 * 28 = 112 piksel)
export default function Card({
  title,
  imageUrl,
  href,
}: {
  title: string;
  imageUrl: string;
  href: string;
}) {
  const maxChars = calculateMaxCharsInLine(fontSize, maxWidth);
  const router = useRouter();
  return (
    <Suspense fallback={<Skeleton className="h-28 w-28 rounded-2xl" />}>
      <Pressable
        onPress={() => router.push(`/book/${href}` as Href)}
        className="flex flex-col gap-y-2 w-28 md:w-48"
      >
        <Image className="w-28 md:w-48 aspect-square rounded-2xl" src={imageUrl} />
        <Text className="text-xs md:text-sm w-full px-2 text-primary">
          {truncate(title, maxChars)}
        </Text>
      </Pressable>
    </Suspense>
  );
}
