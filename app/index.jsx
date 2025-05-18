import { View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutlined from "../components/ButtonOutline";

export default function App() {
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <SafeAreaView className="flex items-center justify-center px-7 h-full">
        <View className="flex items-center justify-center h-[60vh]">
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            className="h-[30vh] w-[80vw]"
          />
        </View>

        <View className="gap-3 w-full">
          <ButtonFilled title="Login" onClick={() => router.push("/signIn")} />
          <ButtonOutlined
            title="Sign Up"
            onClick={() => router.push("/register")}
          />
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
