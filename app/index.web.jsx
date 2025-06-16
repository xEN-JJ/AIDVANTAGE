import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";
import CustomNavBar from "../modules/auth/components/CustomNavBar.web";
import { useRouter } from "expo-router";

const IndexWeb = () => {
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomNavBar />
      <View className="flex flex-row justify-center items-center">
        <View className="justify-center items-center">
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            style={{ height: 250, marginBottom: 20 }}
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
      <View className="w-full h-[100rem] bg-primary justify-start">
        <View className=" items-end justify-start">
          <Image
            resizeMode="contain"
            source={images.AboutUs}
            style={{ width: "90%" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default IndexWeb;
