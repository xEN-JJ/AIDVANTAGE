import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const AssistanceCardWeb = ({ title, description, link, icon }) => {
  return (
    <View className="py-5 border border-blue-500 w-[23%] rounded-lg  items-center">
      <Image source={icon} resizeMode="contain" style={{ width: 80 }} />

      <View className="w-full px-5 my-2 mt-6">
        <View>
          <Text className="text-primary text-xl font-rbold">{title}</Text>
        </View>
        <View className="mt-4">
          <Text className="text-[#565353] text-base text-justify">
            {description}
          </Text>
        </View>
        <View className="mt-4">
          <Link href={{ pathname: link, query: { title: title } }}>
            <Text className="text-blue-500 text-base">Learn More</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default AssistanceCardWeb;
