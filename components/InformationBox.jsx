import { View, Text } from "react-native";
import React from "react";

const InformationBox = ({ title }) => {
  return (
    <View className="w-full py-3 px-3 bg-blue-100 rounded-xl border rounded-xl border-blue-500">
      <Text className="text-blue-500 font-rbold text-lg">Title</Text>
      <View className="ml-2 text-pretty">
        <Text className="">
          1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 2. Nisi
          nesciunt similique quaerat nobis repudiandae ut tempore id consectetur
          reiciendis itaque? 3.Ducimus cum molestias nobis placeat repellat.
          Expedita illum voluptatum iure!
        </Text>
      </View>
    </View>
  );
};

export default InformationBox;
