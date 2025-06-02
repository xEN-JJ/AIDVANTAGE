import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router } from "expo-router";

const ReliefAssistance = () => {
  return (
    <ScrollView className="h-full">
      <View className="items-center justify-center">
        <View className="rounded-xl w-[90%] mt-7 justify-center items-center">
          <Image
            source={images.reliefCover}
            resizeMode="cover"
            className="w-full h-[30vh] rounded-xl"
          />
        </View>

        <View className="w-full">
          <Text className="px-6 text-justify font-rlight text-black text-base/6 mt-8 text-pretty">
            The{" "}
            <Text className="font-rsemibold">
              City Social Welfare and Development Office
            </Text>{" "}
            is committed to ensuring the well-being of its residents through the Relief Assistance Program. 
            This initiative is designed to provide essential nutritional support to individuals and families facing food insecurity, 
            ensuring fair and efficient distribution of aid to those in need.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Objectives
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. To provide timely food assistance to individuals and families facing crises or chronic food insecurity.{"\n\n"}
            2. To ensure a transparent and efficient application process for distributing food aid.{"\n\n"}
            3. To promote equity and fairness in the provision of nutritional support to vulnerable sectors within the community.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Services Offered
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            • <Text className="font-rsemibold">Nutritional Support:</Text> Provision of food packs containing essential staples, such as rice, canned goods, and other non-perishable items.{"\n\n"}
            • <Text className="font-rsemibold">Cash Assistance for Food Needs:</Text> Financial support for purchasing groceries to address specific dietary requirements.{"\n\n"}
            • <Text className="font-rsemibold">Emergency Food Aid:</Text> Immediate provision of food supplies to individuals and families affected by disasters or sudden emergencies.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            How to Apply
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. Visit the City Social Welfare and Development Office (CSWDO) during office hours (8:00 AM - 5:00 PM).{"\n\n"}
            2. Submit all required documents, including:{"\n"}
            • Valid ID {"\n"}
            3. Undergo an interview or assessment conducted by program staff to evaluate the applicant’s needs and eligibility.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Contact Information
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            For inquiries or assistance, please contact the [Office Name] at:{"\n"}
            • Hotline: +63-54-205-2980 (Globe) | +63-54-871-2050 (PLDT){"\n"}
            • Email: cswdo@naga.gov.ph{"\n"}
            • Office Address: City Social Welfare Development Office G/F Social Development Center, Naga City Hall Complex, Juan Q. Miranda Ave., Concepcion Pequeña, Naga City
          </Text>

          <Text className="font-rsemibold text-xl py-5 px-6 text-primary">
            Commitment to Health and Welfare
          </Text>
          <Text className="px-6 pb-3 text-justify font-rlight text-black text-base/6 text-pretty">
            The Relief Assistance Program is part of the local government’s broader initiative to combat food insecurity and support the nutritional needs of its constituents. 
            By improving the application and approval process, the City Social Welfare Development Office ensures that aid reaches eligible individuals and families promptly and equitably. 
            This program aims to foster a healthier, more resilient, and food-secure community.
          </Text>
        </View>

        <View className="mx-5 gap-3">
          <ExpansionPanel
            title="Eligibility"
            description={`• Must be a resident of Naga City\n• Enrolled in any educational institution\n• From indigent or marginalized families\n• With good academic standing\n• Must not be receiving similar assistance from other programs`}
          />
          <ExpansionPanel
            title="Requirements"
            description={`• Complete application form\n• Valid identification documents\n• Proof of enrollment or school certification\n• Academic records or report cards\n• Barangay certification of residency and indigency\n• Letter of request addressed to CSWDO Director`}
          />
        </View>

        <View className="w-full px-5 my-7">
          <ButtonFilled
            title="Apply"
            onClick={() => router.push("/ApplicationForm")}
            otherStyles="max-w-[28rem]"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ReliefAssistance;