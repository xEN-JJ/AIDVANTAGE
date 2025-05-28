import { View, Text, Image } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const FilePreview = ({ status }) => {
  const icons = {
    approved: <AntDesign name="checkcircle" size={24} color="green" />,
    declined: <MaterialIcons name="error" size={24} color="red" />,
  };

  const statusBackgroundColor = {
    approved: "#72CD95",
    declined: "#C32131",
    pending: "#E5F1FF",
  };

  return (
    <View
      className={`bg-[${statusBackgroundColor[status]}] w-full rounded-xl px-3 py-3 `}
    >
      <View className="flex flex-row gap-2 mt-2 mb-3">
        {icons && icons[status]}
        <Text className="text-lg text-white font-rmedium">
          Medical Certificate
        </Text>
      </View>
      <View className="w-full bg-gray-200 rounded-xl">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/en/c/c0/Lana_Del_Rey_-_Henry%2C_Come_On.png",
          }}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

export default FilePreview;
