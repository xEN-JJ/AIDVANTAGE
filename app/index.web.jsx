import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";
import CustomNavBar from "../modules/auth/components/CustomNavBar.web";
import ButtonOutlined from "../components/ButtonOutline";
import AssistanceCard from "../components/AssistanceCard";
import { useRouter } from "expo-router";

const IndexWeb = () => {
  const router = useRouter();

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomNavBar />
      <View className="flex flex-row justify-center items-center border">
        <View className="grid justify-items-start">
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            style={{ height: 250, marginBottom: 20, width: 500 }}
          />
          <View>
            <ButtonFilled
              title="Getting Started  -> "
              onClick={() => router.push("/signIn")}
            />
          </View>
        </View>
        <View className="justify-center items-center">
          <Image
            source={images.basta}
            resizeMode="contain"
            style={{ width: "50rem", height: "40rem" }}
          />
        </View>
      </View>

      <View className="w-full bg-[#253D6A]">
        <View className="items-end">
          <Image source={images.AboutUs} resizeMode="cover" />
        </View>
        <View className="absolute w-[40%] top-[18%] left-[5%]">
          <Text className="text-white text-5xl font-rblack mb-10">
            About Us
          </Text>

          <Text className="text-white text-4xl font-rlight my-10">
            <Text className=" text-5xl font-rbold">"</Text>
            Empowering Communities Through Compassion and Support
            <Text className="text-white text-5xl font-rbold">"</Text>
          </Text>

          <View className="mt-10 w-[40%] ">
            <ButtonOutlined
              title={"Discover our Story"}
              textColor={"white"}
              borderColor={"white"}
            />
          </View>
        </View>
      </View>

      <View className="items-center justify-center mt-10">
        <View className="flex-row flex-wrap -mx-2 mt-5 pb-[100] w-[70%]  items-center justify-center">
          {assistance.map((assistance, index) => (
            <View
              key={index}
              className="w-1/2 px-2 mb-4 items-center justify-center "
            >
              <AssistanceCard
                cover={assistance.cover}
                title={assistance.title}
                description={assistance.description}
                link={assistance.link}
              />
            </View>
          ))}
        </View>
      </View>

      <View className="w-full bg-primary">
        <View className="items-start">
          <Image source={images.donateImage} resizeMode="cover" />
        </View>
        <View className="absolute w-[40%] top-[25%] left-[55%] items-end">
          <Text className="text-white text-5xl font-rblack mb-10 text-right">
            Join Us in Making a Difference!
          </Text>

          <Text className="text-white text-xl font-rlight my-10 text-right">
            Every contribution helps us provide essential services and resources
            to those in need.
            {"\n \n"}
            Together, we can create lasting change.
          </Text>

          <View className="mt-10 w-[40%] ">
            <ButtonOutlined
              title={"Donate"}
              textColor={"white"}
              borderColor={"white"}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default IndexWeb;
