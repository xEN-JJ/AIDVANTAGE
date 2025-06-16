import React, { useRef, useState } from "react";
import { View, Animated } from "react-native";
import CustomNavBarButton from "./CustomNavBarButton.web";
import tw from "twrnc";

export default function ToggleButton({ onToggle }) {
  const [selected, setSelected] = useState("login");
  const anim = useRef(new Animated.Value(0)).current;

  const handleToggle = (type) => {
    setSelected(type);
    Animated.timing(anim, {
      toValue: type === "login" ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    if (onToggle) onToggle(type);
  };

  const loginBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#2563eb", "#e5e7eb"],
  });
  const signupBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#e5e7eb", "#2563eb"],
  });

  return (
    <View style={tw`flex-row justify-center items-center gap-2`}>
      <Animated.View
        style={{
          borderRadius: 24,
          borderColor: loginBg,
          borderWidth: 2
        }}
      >
        <CustomNavBarButton
          text="Log In"
          onPress={() => handleToggle("login")}
          buttonClassName={`w-24 h-10 rounded-3xl justify-center items-center ${selected === "login" ? "" : "bg-gray-200"}`}
          textClassName={`font-bold ${selected === "login" ? "text-white" : "text-blue-600"}`}
        />
      </Animated.View>
      <Animated.View style={{ borderRadius: 24, backgroundColor: signupBg }}>
        <CustomNavBarButton
          text="Sign Up"
          onPress={() => handleToggle("signup")}
          buttonClassName={`w-24 h-10 rounded-3xl justify-center items-center ${selected === "signup" ? "" : "bg-gray-200"}`}
          textClassName={`font-bold ${selected === "signup" ? "text-white" : "text-blue-600"}`}
        />
      </Animated.View>
    </View>
  );
}
