import { icons } from "lucide-react-native";
import { SvgProps } from "react-native-svg";

const Icon = ({
  name,
  color,
  size = 24,
  ...params
}: SvgProps & {
  name: keyof typeof icons;
  color: string;
  size?: number;
} 
) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} {...params} />;
};

export default Icon;
