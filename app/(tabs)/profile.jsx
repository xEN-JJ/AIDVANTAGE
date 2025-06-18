import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import TextField from "../../components/TextField";
import ProfilePicturePicker from "../../components/PicturePicker";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(images.profilePicture);
  const [information, setInformation] = useState({
    name: "Maria Isabel Dela Cruz",
    gender: "Female",
    birthday: "May 20, 1981",
    placeOfBirth: "San Felipe, Naga City, Camarines Sur",
    occupation: "Teacher",
    address: "San Felipe, Naga City, Camarines Sur",
    mobile: "09456745331",
    email: "email@example.com",
  });

  const sections = [
    {
      title: "Basic Info",
      data: [
        { key: "gender", icon: "♀", label: "Gender" },
        { key: "birthday", icon: "🎂", label: "Birthday" },
        { key: "placeOfBirth", icon: "🏛", label: "Place of Birth" },
      ],
    },
    {
      title: "Occupation",
      data: [{ key: "occupation", icon: "💼", label: "Occupation" }],
    },
    {
      title: "Address",
      data: [{ key: "address", icon: "📍", label: "Address" }],
    },
    {
      title: "Contact Info",
      data: [
        { key: "mobile", icon: "📱", label: "Mobile" },
        { key: "email", icon: "✉️", label: "Email" },
      ],
    },
  ];

  const handleFieldUpdate = (key, newValue) => {
    setInformation((prev) => ({ ...prev, [key]: newValue }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      Alert.alert("Success", "Profile updated successfully!");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-6 mb-10" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center mt-6 mb-2">
          <Text className="text-2xl font-bold">My Profile</Text>
          <TouchableOpacity
            onPress={toggleEdit}
            className={`px-4 py-2 rounded-lg ${isEditing ? "bg-green-600" : "bg-blue-600"}`}
          >
            <Text className="text-white font-medium">
              {isEditing ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <ProfilePicturePicker
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          editable={isEditing}
        />

        {/* Name */}
        <View className="mt-5">
          {isEditing ? (
            <TextField
              title="Name"
              value={information.name}
              onChangeText={(text) => handleFieldUpdate("name", text)}
              placeholder="Enter your name"
            />
          ) : (
            <Text className="text-center text-2xl font-semibold mt-2">
              {information.name}
            </Text>
          )}
        </View>

        {/* Profile Sections */}
        <View className="mt-8 pb-10">
          {sections.map((section, idx) => (
            <View key={section.title} className="mb-6">
              <Text className="text-lg font-semibold mb-3 text-gray-800">
                {section.title}
              </Text>
              <View className="bg-gray-50 rounded-xl p-4 shadow-sm">
                {section.data.map((item, index) => (
                  <View
                    key={item.key}
                    className="flex-row items-start mb-4 last:mb-0"
                  >
                    <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                      <Text className="text-lg">{item.icon}</Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-base font-medium text-gray-800">
                        {information[item.key]}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {item.label}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
