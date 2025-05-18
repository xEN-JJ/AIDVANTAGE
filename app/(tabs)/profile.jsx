import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import TextField from "../../components/TextField";

const Profile = () => {
  const information = {
    name: "Maria Isabel Dela Cruz",
    gender: "Female",
    barangay: "San Felipe",
    occupation: "Teacher",
    placeOfBirth: "San Felipe",
    contactInfo: "09563753347",
    email: "isabel@gmail.com",
  };

  const infoArray = Object.entries(information).map(([key, value]) => ({
    key,
    value,
  }));
  return (
    <SafeAreaView>
      <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
        <View className=" items-center mt-7">
          <View className="border-4 border-blue-500 p-2 rounded-full">
            <Image
              source={images.profilePicture}
              resizeMode="contain"
              style={{ height: 200, width: 200 }}
              className="rounded-full"
            />
          </View>
          <Text className="font-rbold text-3xl mt-5">
            Maria Isabel Dela Cruz
          </Text>
        </View>

        <View>
          <FlatList
            data={infoArray}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TextField title={item.key} value={item.value} />
            )}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            className="pt-10"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
