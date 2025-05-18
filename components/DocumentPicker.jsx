import { View, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

const DocumentPickerField = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [Uri, setUri] = useState("");
  const pick = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (!response.canceled) {
      const { name, size, uri } = response.assets[0];
      setName(name);
      setSize(size);
      setUri(uri);
    }
    console.log(response);
  };
  return (
    <View
      className={`justify-center border h-[68] max-w-[22rem] rounded-xl justify-center px-5 ${name ? "border-primary bg-primary " : "border-gray-500"}`}
    >
      <TouchableOpacity
        className="bg-transparent justify-between flex flex-row"
        onPress={pick}
      >
        <View className="max-w-[14rem] justify-center">
          <Text
            className={`font-rmedium text-lg mt-2 ${name ? "text-white" : ""}`}
          >
            Hello
          </Text>
          {name && (
            <Text
              className={`line-clamp-1 break-all truncate text-clip text-sm ${name ? "text-white" : ""}`}
            >
              {name}
            </Text>
          )}
        </View>
        <View className="justify-center">
          <Ionicons
            name={name ? "document" : "document-outline"}
            size={35}
            color={name ? "white" : " black"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentPickerField;
