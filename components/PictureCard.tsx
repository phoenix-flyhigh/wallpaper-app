import { Colors } from "@/constants/Colors";
import { IWallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import {
  useColorScheme,
  Pressable,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export function PictureCard({
  wallpaper,
  onClose = () => {},
  onLike = () => {},
  imageStyles,
  hasLabel = false,
  hasIcons = false,
}: {
  wallpaper: IWallpaper;
  onClose?: () => void;
  onLike?: () => void;
  imageStyles: object;
  hasLabel?: boolean;
  hasIcons?: boolean;
}) {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={{ position: "relative", margin: 8 }}>
      <Image source={{ uri: wallpaper.url }} style={{ ...imageStyles }} />
      {hasLabel && (
        <ThemedView style={styles.labelContainer}>
          <ThemedText style={{ color: "white" }}>{wallpaper.name}</ThemedText>
          <View>
            <Ionicons
              name="heart"
              size={18}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </ThemedView>
      )}
      {hasIcons && (
        <View style={styles.iconsContainer}>
          <Pressable onPress={onClose}>
            <View>
              <Ionicons
                name="close"
                size={24}
                color={Colors.light.background}
              />
            </View>
          </Pressable>
          <View style={styles.iconsRightPanel}>
            <Pressable onPress={onLike}>
              <View>
                <Ionicons
                  name="heart"
                  size={24}
                  color={Colors.light.background}
                />
              </View>
            </Pressable>
            <Pressable>
              <View>
                <Ionicons
                  name="share-social"
                  size={24}
                  color={Colors.light.background}
                />
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0 , 0, 0.5)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  iconsContainer: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  iconsRightPanel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
