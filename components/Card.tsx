import { Image, Pressable } from "react-native";
import { Suspense } from "react";

import { calculateMaxCharsInLine, truncate } from "@/lib/utils";
import Text from "./Text";
import { Skeleton } from "./ui/skeleton";
const fontSize = 12; // text-xs için yaklaşık font boyutu (piksel cinsinden)
const maxWidth = 112; // w-28 için yaklaşık genişlik (4 * 28 = 112 piksel)
export default function Card({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  const maxChars = calculateMaxCharsInLine(fontSize, maxWidth);
  return (
    <Suspense fallback={<Skeleton className="h-28 w-28 rounded-2xl" />}>
      <Pressable className="flex flex-col gap-y-2 w-28">
        <Image className="w-28 aspect-square rounded-2xl" src={imageUrl} />
        <Text className="text-xs w-full px-2 text-primary">{truncate(title, maxChars)}</Text>
      </Pressable>
    </Suspense>
  );
}
