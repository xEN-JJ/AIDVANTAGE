import { View, Text, Pressable, Animated } from "react-native";
import React, { useEffect } from "react";

import icons from "../constants/icons";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const CustomTabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 },
    );
  }, [isFocused, scale]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
    };
  });
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 justify-center items-center gap-1 rounded-full"
    >
      <Animated.View style={{ animatedIconStyle }}>
        {icons[routeName]({
          color: isFocused ? "#fff" : "#222",
        })}
      </Animated.View>

      <Text
        className="font-rlight text-center text-xs"
        style={{
          color: isFocused ? "#fff" : "#222",
          fontWeight: isFocused ? "bold" : "light",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomTabBarButton;
