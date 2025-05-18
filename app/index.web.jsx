import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";

const IndexWeb = () => {
  return (
    <ScrollView>
      <View className="h-[5rem] w-full bg-primary"></View>
      <View className="flex flex-row justify-center items-center ">
        <View className="justify-center items-center">
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            style={{ height: 250, marginBottom: 20 }}
          />
          <ButtonFilled title="Login" otherStyles={"w-[50]"} />
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
