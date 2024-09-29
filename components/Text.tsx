import { Text as RNText, TextProps } from "react-native";

export default function Text({ children, ...props }: TextProps & { children: React.ReactNode }) {
  return (
    <RNText
      style={{
        fontFamily: "SF-Pro",
      }}
      {...props}
    >
      {children}
    </RNText>
  );
}
