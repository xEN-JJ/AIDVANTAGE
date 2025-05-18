import { View, Text, Image } from "react-native";
import React from "react";
import ButtonFilled from "../../components/ButtonFilled";
import { images } from "../../constants";

const SignInWeb = () => {
  return (
    <View>
      <View className="h-[5rem] w-full bg-primary"></View>
      <View className="flex flex-row justify-around items-center my-10 ">
        <View className="justify-center items-center">
          {/* <Image source={images.basta} /> */}
          <Image
            source={images.logoBlue}
            resizeMethod="contain"
            className="h-1 w-1 object-contain"
          />
          <ButtonFilled title="Login" otherStyles={"w-[50]"} />
        </View>
        <View>
          <View className="bg-white w-[30rem] h-[30rem] rounded-2xl">
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInWeb;
