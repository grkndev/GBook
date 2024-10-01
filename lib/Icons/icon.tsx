import { icons } from "lucide-react-native";
import { SvgProps } from "react-native-svg";
import * as Tw from "~/tailwind.config";
import { useColorScheme } from "../useColorScheme";
const Icon = ({
  name,
  // color,
  size = 24,
  ...params
}: SvgProps & {
  name: keyof typeof icons;
  // color?: string;
  size?: number;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];
  const { colorScheme } = useColorScheme();

  return (
    <LucideIcon
      color={colorScheme === "dark" ? "#fff" : "#000"}
      size={size}
      {...params}
    />
  );
};

const getTailwindVariable = (colorKey: string) => {
  if (colorKey.startsWith("#")) return colorKey;

  const colorParts = colorKey.split("-");
  const baseColor = colorParts[0];
  const subColor = colorParts[1] || "DEFAULT";

  // Anahtarların Tailwind tema nesnesindeki karşılığını bul
  const color =
    Tw.theme?.extend?.colors?.[
      baseColor as keyof typeof Tw.theme.extend.colors
    ];

  // Eğer renk mevcutsa, istenen değeri döndür
  return color ? color[subColor as keyof typeof color] : undefined;
};

export default Icon;
