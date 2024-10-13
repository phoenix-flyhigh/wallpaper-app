import React from "react";
import useWallpapers from "@/hooks/useWallpapers";
import { WallpaperList } from "@/components/WallpaperList";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useCarousel } from "@/hooks/useCarousel";
import { ThemedView } from "@/components/ThemedView";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { PictureDrawer } from "@/components/PictureDrawer";

export default function explore() {
  const wallpapers = useWallpapers();
  const carouselItems = useCarousel();
  const INITIAL_CAROUSEL_HEIGHT = 250;
  const [yOffset, setScrollY] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        yOffset,
        [-INITIAL_CAROUSEL_HEIGHT, 0, INITIAL_CAROUSEL_HEIGHT],
        [1, 1, 0]
      ),
    };
  });

  const carouselAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-INITIAL_CAROUSEL_HEIGHT, 0, INITIAL_CAROUSEL_HEIGHT],
            [1.5, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={{ flex: 1, paddingTop: 32 }}>
      <Animated.View
        style={[
          {
            height: Math.max(0, INITIAL_CAROUSEL_HEIGHT - yOffset),
          },
          carouselAnimatedStyle,
        ]}
      >
        <Carousel
          width={Dimensions.get("window").width}
          height={INITIAL_CAROUSEL_HEIGHT}
          data={carouselItems}
          onSnapToItem={(index) => setCarouselIndex(index)}
          renderItem={({ index }) => (
            <>
              <View>
                <Image
                  source={{ uri: carouselItems[index].url }}
                  style={{ height: INITIAL_CAROUSEL_HEIGHT }}
                />
              </View>
              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  bottom: 0,
                  height: INITIAL_CAROUSEL_HEIGHT * 0.6,
                  width: "100%",
                  zIndex: 10,
                }}
              >
                <Animated.View style={textAnimatedStyle}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 30,
                      fontWeight: 600,
                      textAlign: "center",
                      paddingTop: INITIAL_CAROUSEL_HEIGHT / 3,
                    }}
                  >
                    {carouselItems[index].title}
                  </Text>
                  <View style={styles.indicatorContainer}>
                    {Array(carouselItems.length)
                      .fill(0)
                      .map((_, i) => (
                        <View
                        key={i}
                          style={
                            i === carouselIndex
                              ? styles.currentIndicator
                              : styles.indicator
                          }
                        />
                      ))}
                  </View>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <WallpaperList
        wallpapers={wallpapers}
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: "gray",
    borderRadius: 4,
    padding: 4,
  },
  indicatorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    width: "100%",
    height: 12,
    marginTop: 4
  },
  currentIndicator: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 4,
  },
});
