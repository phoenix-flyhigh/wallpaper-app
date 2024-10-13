import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { StyleSheet, Appearance, useColorScheme } from "react-native";
import { SecondaryButton } from "@/components/SecondaryButton";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function account() {
  
  const theme = useColorScheme() ?? "light";
  
  return (
    <ThemedView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
      <ThemedText style={{ ...styles.h1 }}>Wallpaper app</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
      <PrimaryButton
        buttonTitle="Sign in"
        iconName="logo-google"
        onPress={() => {}}
      />

      <ThemedText style={styles.h2}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <ThemedView
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <SecondaryButton
          buttonTitle="Light"
          isSelected={theme.toLowerCase() === "light"}
          onPress={() => Appearance.setColorScheme("light")}
        />
        <SecondaryButton
          buttonTitle="Dark"
          isSelected={theme.toLowerCase() === "dark"}
          onPress={() => Appearance.setColorScheme("dark")}
        />
      </ThemedView>
      <ThemedText style={{ ...styles.h2, marginTop: 24 }}>About</ThemedText>

      <Link href="/aboutAccount">
        <ThemedText>Account</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  h1: { fontSize: 32, fontWeight: 600, marginVertical: 16, paddingTop: 16 },
  h2: {
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 12,
  },
});
