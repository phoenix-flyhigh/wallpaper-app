import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const theme = useColorScheme() ?? "light";
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen
          name="(account)/aboutAccount"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors[theme].indicator,
            },
            headerBackTitle: "Go back",
            headerTitle: "Account",
            headerTitleStyle: {
              color: theme === "light" ? Colors.light.text : Colors.dark.text,
            },
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
