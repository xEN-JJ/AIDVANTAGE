import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const RadioButtons = ({ label, options, checkedValue, onChange, style }) => {
  return (
    <View className=" w-[22rem] rounded-lg">
      <Text className="my-1 mx-3 text-lg font-rmedium text-primary">
        {label}
      </Text>
      {options.map((option) => {
        let active = checkedValue == option.value;
        return (
          <TouchableOpacity
            className="my-2 mx-7 flex flex-row items-center gap-3"
            onPress={() => {
              onChange(option.value);
            }}
            key={option.value}
          >
            <MaterialIcons
              name={active ? "radio-button-checked" : "radio-button-unchecked"}
              size={24}
              color="#0C3278"
            />
            <Text>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButtons;
