import { View, Text, Pressable, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import TextField from "../../components/TextField";
import AssistanceCard from "../../components/AssistanceCard";
import { images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const assistance = [
    {
      title: "Medical Assistance",
      description:
        "Provides financial support for individuals and families in crisis who need assistance with medical expenses.",
      link: "/medical-assistance",
      cover: images.medicalCover,
    },
    {
      title: "Educational Assistance",
      description:
        "Provides financial support to students from low-income families to help cover school-related expenses such as tuition, supplies, and transportation.",
      link: "/educational-assistance",
      cover: images.burialProfile,
    },
    {
      title: "Burial Assistance",
      description:
        "Provides financial support to families in crisis to help cover funeral and burial expenses for a deceased loved one.",
      link: "/burial-assistance",
      cover: images.burialProfile,
    },
    {
      title: "Relief Assistance",
      description:
        "Provides immediate aid in the form of food, water, and basic necessities to individuals and families affected by natural disasters or emergencies.",
      link: "/relief-assistance",
      cover: images.burialProfile,
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

        <View className="w-full h-[122px] rounded-xl justify-center items-center overflow-hidden">
          <LinearGradient
            colors={["#0F71F1", "#253D6A"]}
            start={{ x: 0.5, y: -0.9 }}
            end={{ x: 1, y: 0 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "0.75rem",
            }}
          />
          <Image
            source={images.logoWhite}
            style={{ height: 120, width: "80%" }}
            resizeMode="contain"
          />
        </View>

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
