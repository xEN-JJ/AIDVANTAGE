import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonOutlined = ({
  title,
  onClick,
  isDisable,
  textColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      className={`flex items-center justify-center border bg-transparent w-full h-[50px] rounded-full disabled:bg-gray-300 disabled:border-gray-400 will-change-auto ${borderColor ? `border-${borderColor}` : "border-primary"}`}
      onPress={onClick}
      disabled={isDisable}
    >
      <Text
        className={`enabled:text-primary font-regular text-md disabled:text-gray-500 will-change-auto ${textColor ? `text-${textColor}` : "text-primary"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutlined;
