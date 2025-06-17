import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import { images } from "../../constants";
import TextField from "../../components/TextField";
import { Link, router } from "expo-router";
import ButtonFilled from "../../components/ButtonFilled";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";

const SignInWeb = () => {
  return (
    <ScrollView>
      <CustomNavBar />
      <View
        className={`flex flex-row justify-center items-center gap-[10%] mt-10 h-[100%]`}
      >
        <View className="">
          <Text className="text-center text-3xl text-gray-700 font-rlight">
            Welcome to
          </Text>
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            className=" w-full"
            style={{ width: 500, height: 300 }}
          />
        </View>

        <View className="w-[30%] bg-white px-7 justify-center h-[90%] rounded-lg">
          <Text className="font-rbold text-5xl text-primary">Log in</Text>
          <View className=" w-full mt-10">
            <TextField title="Email Address" isError={true} />
            <TextField title="Password" secureTextEntry={true} isError={true} />
            <View className="items-end ">
              <Link href="/reset-password" className=" text-blue-500">
                Forgot Password
              </Link>
            </View>
          </View>
          <View className="mt-10">
            <ButtonFilled title="Login" onClick={() => router.push("/")} />
          </View>

          <View className="flex flex-row gap-1 justify-center items-end  mt-5">
            <Text className="text-[#787575]">Don't have an account?</Text>
            <Link href={"/register"} className=" text-blue-500">
              Register
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInWeb;
