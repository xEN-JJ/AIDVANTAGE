import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../constants";

const ButtonFilled = ({
  title,
  onClick,
  otherStyles,
  isDisable,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <TouchableOpacity
      className={`flex flex-row items-center justify-center bg-primary w-full max-w-[23rem] h-[50px] rounded-md focus:border ${otherStyles}`}
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
