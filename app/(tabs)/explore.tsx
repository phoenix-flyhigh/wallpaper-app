import React from "react";
import useWallpapers from "@/hooks/useWallpapers";
import { WallpaperList } from "@/components/WallpaperList";

export default function explore() {
  const wallpapers = useWallpapers();
  return <WallpaperList wallpapers={wallpapers} />;
}
