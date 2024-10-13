import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Switch } from "react-native";

export default function AboutAccount() {
  const [isReportingEnabled, setIsReportingEnabled] = useState(false);

  const toggleSwitch = () => setIsReportingEnabled((prev) => !prev);

  return (
    <ThemedView style={{ flex: 1, padding: 12 }}>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
        }}
      >
        <ThemedView style={{ flex: 1, gap: 8, flexWrap: "wrap" }}>
          <ThemedText style={{ fontSize: 22 }}>Anonymous Reporting</ThemedText>
          <ThemedText style={{ width: "80%" }}>
            Unidentifiable usage stats, perfermance issues, etc
          </ThemedText>
        </ThemedView>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isReportingEnabled ? "#0f4fd8" : "#f4f3f4"}
          value={isReportingEnabled}
          onValueChange={toggleSwitch}
        />
      </ThemedView>
    </ThemedView>
  );
}
