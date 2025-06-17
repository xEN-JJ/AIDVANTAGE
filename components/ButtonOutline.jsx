import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonOutlined = ({
  title,
  onClick,
  isDisable,
  textColor,
  borderColor,
}) => {
  const borderClassMap = {
    white: "border-white",
    black: "border-black",
    primary: "border-primary",
  };

  const textClassMap = {
    white: "text-white",
    black: "text-black",
    primary: "text-primary",
  };

  return (
    <TouchableOpacity
      className={`flex items-center justify-center bg-transparent w-full h-[50px] rounded-lg border ${
        borderClassMap[borderColor] || "border-primary"
      }`}
      onPress={onClick}
      disabled={isDisable}
    >
      <Text
        className={`font-regular text-lg will-change-auto ${
          isDisable
            ? "text-gray-500"
            : textClassMap[textColor] || "text-primary"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutlined;
