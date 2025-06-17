import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const ButtonFilled = ({
  title,
  onClick,
  isDisable,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-center bg-primary w-full h-[50px] rounded-full shadow-md"
      onPress={onClick}
      disabled={isDisable}
    >
      {prefixIcon &&
        icons[prefixIcon]({
          color: "#fff",
        })}
      <Text className="text-white text-lg font-rmedium text-md px-2">
        {title}
      </Text>

      {suffixIcon &&
        icons[suffixIcon]({
          color: "#fff",
        })}
    </TouchableOpacity>
  );
};

export default ButtonFilled;