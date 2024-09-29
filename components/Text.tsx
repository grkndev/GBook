import { useColorScheme } from "@/lib/useColorScheme";
import { Text as RNText, TextProps } from "react-native";

export default function Text({
  children,
  ...props
}: TextProps & { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme();
  return (
    <RNText
      className={"text-primary"}
      style={{
        fontFamily: "SF-Pro",
      }}
      {...props}
    >
      {children}
    </RNText>
  );
}
