import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function ToggleButton({ onToggle }) {
  const [selected, setSelected] = useState("login");

  const handleToggle = (type) => {
    setSelected(type);
    if (onToggle) onToggle(type);
  };

  return (
    <View className="flex-row bg-blue-900 bg-opacity-30 rounded-full border border-gray-400 border-opacity-50 overflow-hidden">
      {/* Log In Button - Left side with solid blue background */}
      <Pressable 
        onPress={() => handleToggle("login")}
        className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full"
      >
        <Text className="text-white text-sm font-semibold">
          Log In
        </Text>
      </Pressable>

      {/* Sign Up Button - Right side with transparent background */}
      <Pressable 
        onPress={() => handleToggle("signup")}
        className="bg-transparent hover:bg-white hover:bg-opacity-10 px-6 py-4"
      >
        <Text className="text-white text-sm font-semibold">
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
}