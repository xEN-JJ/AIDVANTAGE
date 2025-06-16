import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import ToggleButton from "./ToggleButton.web";

export default function CustomNavBar() {
  const router = useRouter();

  return (
    <View className="h-[5rem] bg-primary flex-row items-center justify-center py-3 px-5">
      <View className="w-full flex-row items-center justify-between">
        <Pressable
          className="flex-row items-center justify-center"
          onPress={() => router.push("/")}
        >
          <Image
            source={require("../../../assets/image/aidvantageLogo.svg")}
            style={{ width: 180, resizeMode: "contain" }}
          />
        </Pressable>

        <View className="flex-row items-center">
          <Pressable onPress={() => router.push("/services")}>
            <Text className="text-white text-base font-medium px-5 rounded-md">
              SERVICES
            </Text>
          </Pressable>
          <Pressable onPress={() => router.push("/news")}>
            <Text className="text-white text-base font-medium px-5 rounded-md">
              NEWS
            </Text>
          </Pressable>
          <Pressable onPress={() => router.push("/aboutus")}>
            <Text className="text-white text-base font-medium px-5 rounded-md">
              ABOUT US
            </Text>
          </Pressable>
          <View>
            <ToggleButton
              onToggle={(type) => {
                if (type === "login") router.push("/signIn");
                else router.push("/register");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}