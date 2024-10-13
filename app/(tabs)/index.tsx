import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, useColorScheme } from "react-native";
import {
  useLibraryWallpapers,
  useLikedWallpapers,
  useSuggestedWallpapers,
} from "@/hooks/useWallpapers";
import { ThemedView } from "@/components/ThemedView";
import { WallpaperList } from "@/components/WallpaperList";
import { Colors } from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={{ flex: 1, paddingTop: 32 }}>
      <Tab.Navigator
        style={{
          flex: 1,
        }}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tint,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[theme].indicator,
          },
        }}
      >
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </ThemedView>
  );
}

function Suggested() {
  const wallpapers = useSuggestedWallpapers();
  return <WallpaperList wallpapers={wallpapers} />;
}
function Liked() {
  const wallpapers = useLikedWallpapers();
  return <WallpaperList wallpapers={wallpapers} />;
}
function Library() {
  const wallpapers = useLibraryWallpapers();
  return <WallpaperList wallpapers={wallpapers} />;
}
