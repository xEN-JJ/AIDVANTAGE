import { View, Text } from "react-native";
import React from "react";

const InformationBox = ({ description, title, variant, items }) => {
  return (
    <View className="w-full border border-blue-500 bg-blue-500/10 rounded-xl p-4">
      <Text className="text-blue-500 text-xl font-rbold">{title}</Text>
      {variant === "normal" && <Text className="mx-2">{description}</Text>}

      {variant === "numbers" &&
        items.map((item, index) => (
          <Text key={index} className="text-base my-1">
            {index + 1 + "."} {item}
          </Text>
        ))}
    </View>
  );
};

export default InformationBox;
