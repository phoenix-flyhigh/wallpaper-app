import { IWallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { PictureCard } from "./PictureCard";
import { PictureDrawer } from "./PictureDrawer";
import { ThemedView } from "./ThemedView";

export function WallpaperList({
  wallpapers,
  onScroll,
}: {
  wallpapers: IWallpaper[];
  onScroll?: (yOffset: number) => void;
}) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<IWallpaper | null>(
    null
  );
  return (
    <>
      <ThemedView
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={wallpapers.slice(1)}
          onScroll={(e) => {
            let yOffset = e.nativeEvent.contentOffset.y / 1;
            onScroll?.(yOffset);
          }}
          renderItem={({ item }) => (
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setSelectedWallpaper(item)}
            >
              <PictureCard
                wallpaper={item}
                imageStyles={{ height: 320, padding: 8, borderRadius: 12 }}
                hasLabel
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ThemedView>
      {selectedWallpaper && (
        <PictureDrawer
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </>
  );
}
