import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import TextField from "../../components/TextField";
import { Link, router } from "expo-router";
import ButtonFilled from "../../components/ButtonFilled";

import { required, isEmail } from "../../backend/util/ValidationRule";

const SignIn = () => {
  return (
    <SafeAreaView className="h-full mx-7">
      <View className="mt-[70px]">
        <Text className="text-center text-xl text-gray-700 font-rlight">
          Welcome to
        </Text>
        <Image
          source={images.logoBlue}
          resizeMode="contain"
          className="h-[15vh] w-full"
        />
      </View>

      <View className="mt-[80px] w-full">
        <TextField title="Email Address" validation={[required, isEmail]} />
        <TextField title="Password" secureTextEntry={true} />
        <View className="items-start pl-1">
          <Link href="/reset-password" className=" text-blue-500">
            Forgot Password
          </Link>
        </View>
      </View>
      <View className="mt-10">
        <ButtonFilled title="Login" onClick={() => router.push("/home")} />
      </View>

      <View className="flex flex-row gap-1 justify-center items-end mt-3">
        <Text className="text-[#787575]">Don't have an account?</Text>
        <Link href={"/register"} className=" text-blue-500">
          Register
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
