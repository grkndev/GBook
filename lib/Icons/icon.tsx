import { icons } from "lucide-react-native";

const Icon = ({
  name,
  color,
  size = 24,
}: {
  name: keyof typeof icons;
  color: string;
  size?: number;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
