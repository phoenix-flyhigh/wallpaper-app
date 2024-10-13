import { IWallpaper } from "@/hooks/useWallpapers";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useCallback } from "react";
import { PictureCard } from "./PictureCard";
import { PrimaryButton } from "./PrimaryButton";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

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
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["90%"]}
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
            onPress={() => {}}
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
