import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";
import CustomNavBar from "../modules/auth/components/CustomNavBar.web";
import { useRouter } from "expo-router";
import ButtonOutlined from "../components/ButtonOutline";

const IndexWeb = () => {
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomNavBar />
      <View className="flex flex-row justify-end items-center w-full mt-10">
        <View className="grid justify-items-start mr-10 right-[20%]">
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
        <View className="flex justify-center items-center">
          <Image
            source={images.basta}
            resizeMode="cover"
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

          <View className="mt-10 w-[30%]">
            <ButtonOutlined
              title={"Discover our Story"}
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
