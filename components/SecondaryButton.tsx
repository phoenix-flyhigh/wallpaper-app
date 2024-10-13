import { useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

export function SecondaryButton({
    buttonTitle,
    onPress,
  }: {
    buttonTitle: string;
    onPress: () => void;
  }) {
    const theme = useColorScheme() ?? "light";
  
    return (
      <Pressable style={{ flex: 1, padding: 8 }} onPress={onPress}>
        <ThemedView
          style={{
            flexDirection: "row",
            display: "flex",
            padding: 16,
            margin: 8,
            gap: 8,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            borderWidth: 2,
            borderColor:
              theme === "light"
                ? Colors.dark.background
                : Colors.light.background,
          }}
        >
          <ThemedText>{buttonTitle}</ThemedText>
        </ThemedView>
      </Pressable>
    );
  }