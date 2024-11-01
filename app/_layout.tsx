import "~/global.css";

import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
// import { PortalHost } from '~/components/primitives/portal';


import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as React from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Offline from "./(offline)/offline";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  const [loaded, error] = useFonts({
    "SF-Pro": require("assets/fonts/SF-Pro.ttf"),
  });

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");
      if (Platform.OS === "web") {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })();
  }, []);

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!isColorSchemeLoaded) {
    return null;
  }
  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <StatusBar style={isDarkColorScheme ? "light" : "dark"} />

            <Stack screenOptions={{ headerShown: false }} />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
        {/* <PortalHost /> */}
      </ThemeProvider>
    </>
  );
}
