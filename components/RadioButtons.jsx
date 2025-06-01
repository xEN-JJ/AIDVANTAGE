import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import RadioGroup from "react-native-radio-buttons-group";

const RadioButtons = ({ options, checkedValue, onChange, style }) => {
  return (
    <View className=" w-[22rem]  rounded-lg border border-gray-400">
      <Text className="my-2 mx-3">Label</Text>
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
