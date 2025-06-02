import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router } from "expo-router";

const MedicalAssistance = () => {
  return (
    <ScrollView className="h-full">
      <View className="items-center justify-center pb-8">
        <View className="rounded-xl w-[90%] mt-7 justify-center items-center">
          <Image
            source={images.medicalCover}
            resizeMode="contain"
            className="w-full h-[30vh] rounded-xl"
          />
        </View>

        <View className=" w-full">
          <Text className="px-6 text-justify font-rlight text-black text-base/6 mt-8 text-pretty">
            The{" "}
            <Text className="font-rsemibold">
              City Social Welfare Development Office
            </Text>{" "}
            is committed to ensuring the health and well-being of its residents
            through the Medical Assistance Program. This initiative is designed
            to provide financial and logistical support to individuals and
            families facing medical emergencies, chronic illnesses, or other
            healthcare-related needs.
          </Text>
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Objectives
          </Text>

          {/* fix this hahaahahh */}
          <Text className="list-decimal px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. To provide timely financial assistance for medical expenses,
            including hospitalization, medications, and diagnostic procedures.
            {"\n"}
            {"\n"}
            2. To alleviate the financial burden of individuals and families in
            accessing quality healthcare services.
            {"\n"}
            {"\n"}
            3.To promote the health and welfare of marginalized and vulnerable
            sectors within the community.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Service offered
          </Text>

          {/* fix this hahaahahh */}
          <Text className="list-decimal px-6 text-justify font-rlight text-black text-base/6 ">
            1. To provide timely financial assistance for medical expenses,
            including hospitalization, medications, and diagnostic procedures.
            {"\n"}
            {"\n"}
            2. To alleviate the financial burden of individuals and families in
            accessing quality healthcare services.
            {"\n"}
            {"\n"}
            3.To promote the health and welfare of marginalized and vulnerable
            sectors within the community.
          </Text>
        </View>

        <View className="mx-5 gap-3 my-3">
          <ExpansionPanel
            title="Eligibility"
            description={`• Must be a resident of Naga City
                        \n• Enrolled in any educational institution
                        \n• From indigent or marginalized families
                        \n• With good academic standing
                        \n• Must not be receiving similar assistance from other programs`}
          />
          <ExpansionPanel
            title="Requirements"
            description={`• Job Order Certificate from the Mayor’s Office (official referral).
                        \n• Death Certificate of the deceased (photocopy or original).
                        \n• Valid Government-issued ID of the applicant.
                        \n• Barangay Certification or Indigency Certificate indicating financial status.
                        \n• Proof of Relationship to the deceased (e.g., birth certificate, marriage certificate).
                        \n• Funeral Contract or Quotation from the funeral service provider.`}
          />
        </View>

        <View className="w-full px-5 my-7 pb-10">
          <ButtonFilled
            title="Apply"
            onClick={() => router.push("/ApplicationForm")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MedicalAssistance;
