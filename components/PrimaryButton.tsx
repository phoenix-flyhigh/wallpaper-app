import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export function PrimaryButton({
    iconName,
    buttonTitle,
    onPress,
  }: {
    iconName: keyof typeof Ionicons.glyphMap;
    buttonTitle: string;
    onPress: () => void;
  }) {
    const theme = useColorScheme() ?? "light";
  
    return (
      <Pressable
        style={{
          display: "flex",
          width: 240,
          gap: 24,
          margin: 16,
          alignSelf: "center",
        }}
        onPress={onPress}
      >
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
          <Ionicons
            name={iconName}
            size={18}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <ThemedText>{buttonTitle}</ThemedText>
        </ThemedView>
      </Pressable>
    );
  }