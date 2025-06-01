import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import TextField from "../../components/TextField";
import AssistanceCard from "../../components/AssistanceCard";
import { images } from "../../constants";

const Home = () => {
  const assistance = [
    {
      title: "Medical Assistance",
      description: "Lorem",
      link: "/medical-assistance",
      cover: images.medicalCover,
    },
    {
      title: "Educational Assistance",
      description: "Lorem",
      link: "/educational-assistance",
    },
    {
      title: "Burial Assistance",
      description: "Lorem",
      link: "/burial-assistance",
      cover: images.burialCover,
    },
    {
      title: "Relief Assistance",
      description: "Lorem",
      link: "/medical-assistance",
    },
  ];
  return (
    <SafeAreaView className="px-5">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className=" mt-10 flex flex-row w-full gap-3 items-center justify-center ">
          <View className="w-[86%] justify-center pt-3">
            <TextField title="Search" />
          </View>
          <Pressable>
            <MaterialIcons name="tune" size={32} color="black" />
          </Pressable>
        </View>

        <View className="w-full h-[120px] bg-primary rounded-xl"></View>

        <View>
          <Text className="text-3xl font-rbold mt-10 text-blue-500">
            Hello, Maria Isabel!
          </Text>
          <View>
            <Text className="text-base text-gray-500">
              Here are your available assistance programs
            </Text>
          </View>
        </View>

        <View className="flex-row flex-wrap -mx-2 mt-5 pb-[100]">
          {assistance.map((assistance, index) => (
            <View key={index} className="w-1/2 px-2 mb-4">
              <AssistanceCard
                cover={assistance.cover}
                title={assistance.title}
                description={assistance.description}
                link={assistance.link}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
