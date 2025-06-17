import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const AssistanceCard = ({ title, description, link, cover }) => {
  return (
    <View className="my-3 ">
      <View className="bg-blue-500 w-[25rem] h-[13rem] rounded-xl items-center justify-center ">
        <Image
          source={cover}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
          className="w-full h-[3rem] rounded-xl bg-linear-to-t from-primary to-white"
        />
      </View>

      <View className="">
        <Text className="font-rsemibold mt-3 text-xl text-primary">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default AssistanceCard;
