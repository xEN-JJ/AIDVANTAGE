import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../constants";
import ButtonFilled from "../components/ButtonFilled";
import CustomNavBar from "../modules/auth/components/CustomNavBar.web";
import { useRouter } from "expo-router";

const IndexWeb = () => {
  const router = useRouter();

  const services = [
    {
      title: "MEDICAL ASSISTANCE",
      image: images.medicalAssistance || images.basta, // fallback to existing image
      description: "Comprehensive medical support and healthcare assistance",
    },
    {
      title: "FOOD AND NON-FOOD ASSISTANCE",
      image: images.foodAssistance || images.basta,
      description: "Essential food supplies and non-food items distribution",
    },
    {
      title: "EMERGENCY SHELTER ASSISTANCE",
      image: images.shelterAssistance || images.basta,
      description: "Temporary housing and emergency shelter solutions",
    },
    {
      title: "TRANSPORTATION ASSISTANCE",
      image: images.transportAssistance || images.basta,
      description: "Transportation support for those in need",
    },
    {
      title: "BURIAL ASSISTANCE",
      image: images.burialAssistance || images.basta,
      description: "Dignified burial services and financial assistance",
    },
    {
      title: "EDUCATIONAL ASSISTANCE",
      image: images.educationalAssistance || images.basta,
      description: "Educational support and scholarship programs",
    },
  ];

  return (
    <View className="flex-1">
      <CustomNavBar />
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="bg-white px-8">
          <View className="flex flex-row justify-between items-center max-w-7xl mx-auto">
            <View className="flex-1 justify-center items-start pr-8">
              <Image
                source={images.logoBlue}
                resizeMode="contain"
                style={{ height: 120, marginBottom: 20 }}
              />
              <View className="mt-8">
                <ButtonFilled
                  title="GET STARTED"
                  onClick={() => router.push("/signIn")}
                />
              </View>
            </View>
            <View className="flex-1 justify-center items-center">
              <Image source={images.basta} resizeMode="full" />
            </View>
          </View>
        </View>

        {/* About Us Section */}
        <View className="flex-row w-full h-100">
          {/* Left: blue background with padded inner content */}
          <View className="flex-1 bg-[#183D72] justify-center">
            {/* --- add overall left padding just for the inner block --- */}
            <View className="pl-6">
              {/* Bigger heading */}
              <Text className="text-5xl font-bold text-white mb-6">
                About Us
              </Text>

              <Text className="text-xl italic text-white mb-6">
                "Empowering Communities{"\n"}Through Compassion and Support"
              </Text>

              <TouchableOpacity
                className="border-2 border-white rounded-full px-6 py-3 self-start"
                onPress={() => {
                  /* navigate */
                }}
              >
                <Text className="text-white font-semibold">
                  Discover Our Story
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Right: image */}
          <Image
            source={images.AboutUs}
            resizeMode="cover"
            className="w-1/2 h-full"
          />
        </View>

        {/* Services Section */}
        <View className="bg-gray-50 px-8 py-16">
          <View className="max-w-7xl mx-auto">
            <Text className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Services
            </Text>
            <View className="flex flex-row flex-wrap justify-center">
              {services.map((service, index) => (
                <View
                  key={index}
                  className="w-80 m-4 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    source={service.image}
                    resizeMode="cover"
                    style={{ width: "100%", height: 200 }}
                  />
                  <View className="p-6">
                    <Text className="text-lg font-bold text-primary mb-3">
                      {service.title}
                    </Text>
                    <Text className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Call to Action Section */}
        <View className="bg-primary px-8 py-16">
          <View className="max-w-4xl mx-auto text-center">
            <Text className="text-4xl font-bold text-white mb-6">
              Join Us In Making A Difference!
            </Text>
            <Text className="text-lg text-white mb-4 opacity-90">
              Every contribution helps us provide essential
            </Text>
            <Text className="text-lg text-white mb-6 opacity-90">
              services and resources to those in need.
            </Text>
            <Text className="text-lg text-white mb-8 opacity-90">
              Together, we can create lasting change.
            </Text>
            <TouchableOpacity
              className="bg-white rounded-full px-8 py-4 self-center"
              onPress={() => {
                /* Navigate to donation page */
              }}
            >
              <Text className="text-primary font-bold text-lg">Donate Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Section */}
        <View className="bg-gray-900 px-8 py-12">
          <View className="max-w-7xl mx-auto">
            <View className="flex flex-row justify-between">
              <View className="flex-1 pr-8">
                <Text className="text-white font-bold text-lg mb-4">
                  OFFICIAL WEBSITE OF THE
                </Text>
                <Text className="text-white font-bold text-lg mb-4">
                  CITY GOVERNMENT OF BAGO
                </Text>
                <View className="flex flex-row mt-4">
                  {/* Social media icons would go here */}
                </View>
              </View>

              <View className="flex-1 px-4">
                <Text className="text-white font-bold mb-4">
                  CITY GOVERNMENT LINKS
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Official Website
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  City Mayor's Office
                </Text>
                <Text className="text-gray-400 text-sm mb-2">City Council</Text>
              </View>

              <View className="flex-1 px-4">
                <Text className="text-white font-bold mb-4">
                  GOVERNMENT LINKS
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Department of Social Welfare
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Local Government Unit
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Provincial Government
                </Text>
              </View>

              <View className="flex-1 pl-4">
                <Text className="text-white font-bold mb-4">ABOUT DSWD</Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Mission & Vision
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Programs & Services
                </Text>
                <Text className="text-gray-400 text-sm mb-2">
                  Contact Information
                </Text>
              </View>
            </View>

            <View className="border-t border-gray-700 mt-8 pt-8 text-center">
              <Text className="text-gray-400 text-sm">
                © 2024 Aid Vantage. All rights reserved. | Privacy Policy |
                Terms of Service
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default IndexWeb;
