import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonOutlined = ({ title, onClick, isDisable }) => {
  return (
    <TouchableOpacity
      className="flex items-center justify-center border enabled:border-primary bg-transparent w-full h-[50px] rounded-lg disabled:bg-gray-300 disabled:border-gray-400 will-change-auto"
      onPress={onClick}
      disabled={isDisable}
    >
      <Text className="enabled:text-primary font-regular text-md disabled:text-gray-500 will-change-auto">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutlined;
