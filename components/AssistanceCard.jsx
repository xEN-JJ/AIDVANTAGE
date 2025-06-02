import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const AssistanceCard = ({ title, description, link, cover }) => {
  return (
    <View className="my-3 w-full">
      <View className="bg-blue-500 w-full h-[130px] rounded-xl items-center justify-center ">
        <Image
          source={cover}
          resizeMode="cover"
          className="w-full h-[130px] rounded-xl bg-linear-to-t from-primary to-white"
        />
      </View>

      <View className="">
        <Text className="font-rsemibold mt-3">{title}</Text>
        <Text className="text-gray-500 font-rlight text-sm line-clamp-5">
          {description}
        </Text>
        <Pressable onPress={() => router.push(link)}>
          <Text className="text-sm text-blue-500">See More</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AssistanceCard;
