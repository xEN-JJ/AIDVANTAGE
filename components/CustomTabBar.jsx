import { View } from "react-native";
import CustomTabBarButton from "./CustomTabBarButton";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const [dimension, setDimension] = useState({ height: 20, width: 100 });

  const buttonWidth = dimension.width / state.routes.length;

  const onTabBarLayout = (e) => {
    setDimension({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View
      onLayout={onTabBarLayout}
      className="absolute bottom-[50] flex-row items-center justify-center bg-white mx-12 py-4 rounded-full shadow-black shadow-lg"
    >
      {/* Animated highlight background (active tab) */}
      <Animated.View
        className="bg-primary border-2 border-primary rounded-[28] absolute"
        style={[
          animatedStyle,
          {
            height: dimension.height - 12,
            width: buttonWidth - 12,
            left: 6,
          },
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            damping: 15,
            stiffness: 150,
          });

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <CustomTabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? "#fff" : "#222"}
            label={label}
          />
        );
      })}
    </View>
  );
}