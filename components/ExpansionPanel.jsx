import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Collapsible from "react-native-collapsible"; //imported collapsible from npm (npm install --save react-native-collapsible)
import AntDesign from "@expo/vector-icons/AntDesign";

const ExpansionPanel = ({ title, description }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };
  return (
    <View
      className={`w-full border px-3 rounded-lg  ${collapsed ? "border-[#b9b6b6]" : "border-primary"}`}
    >
      <TouchableOpacity
        className="flex flex-row my-5 w-full justify-between"
        onPress={toggleExpand}
      >
        <Text
          className={`font-rregular text-lg ${collapsed ? "text-black" : "text-primary"}`}
        >
          {title}
        </Text>
        <AntDesign
          name={collapsed ? "caretdown" : "caretup"}
          size={24}
          color={collapsed ? "gray" : "#0C3278"}
        />
      </TouchableOpacity>

      <Collapsible collapsed={collapsed}>
        <View className="border-t ">
          <Text className="my-4 ">{description}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default ExpansionPanel;
