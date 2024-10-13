import { IWallpaper } from "@/hooks/useWallpapers";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useCallback } from "react";
import { PictureCard } from "./PictureCard";
import { PrimaryButton } from "./PrimaryButton";
import { ThemedView } from "./ThemedView";
import { Dimensions, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export function PictureDrawer({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: IWallpaper;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const downloadWallpaper = async () => {
    console.log("got wallpaper to download");
    
    const currentTime = new Date().getTime();
    const fileUri = FileSystem.documentDirectory + `${currentTime}.jpg`;
    try {
      await FileSystem.downloadAsync(wallpaper.url, fileUri);
      const writeMediaAccess = await MediaLibrary.requestPermissionsAsync(true);
      if (writeMediaAccess.granted) {
        await MediaLibrary.createAssetAsync(fileUri);
        alert("Wallpaper downloaded");
        console.log("Wallpaper downloaded");
      }
    } catch (e) {
      alert("Failed to download wallpaper");
      console.error(e);
    }
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={[0.9 * Dimensions.get("window").height]}
      onClose={onClose}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      enablePanDownToClose
    >
      <BottomSheetView style={{ flex: 1 }}>
        <ThemedView style={styles.contentContainer}>
          <PictureCard
            wallpaper={wallpaper}
            onClose={onClose}
            hasIcons
            imageStyles={{ width: 340, height: 420, borderRadius: 12 }}
          />
          <ThemedText style={{ fontSize: 20 }}>{wallpaper.name}</ThemedText>
          <PrimaryButton
            iconName="download"
            buttonTitle="Get WallPapeṛ"
            onPress={downloadWallpaper}
          />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
