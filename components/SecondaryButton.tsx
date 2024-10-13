import { useColorScheme, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

export function SecondaryButton({
  buttonTitle,
  onPress,
  isSelected = false,
}: {
  buttonTitle: string;
  onPress: () => void;
  isSelected?: boolean;
}) {
  const theme = useColorScheme() ?? "light";
  const styles = StyleSheet.create({
    selectedButton: {
      backgroundColor:
        theme === "light" ? Colors.dark.background : Colors.light.background,
      color: theme === "light" ? Colors.dark.text: Colors.light.text,
    },
  });
  return (
    <Pressable style={{ flex: 1, padding: 8 }} onPress={onPress}>
      <ThemedView
        style={[
          {
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
          },
          isSelected ? styles.selectedButton : undefined,
        ]}
      >
        <ThemedText style={[isSelected ? styles.selectedButton : undefined]}>{buttonTitle}</ThemedText>
      </ThemedView>
    </Pressable>
  );
}
