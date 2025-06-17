import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router, useLocalSearchParams } from "expo-router";

const MedicalAssistanceWeb = () => {
  const { title } = useLocalSearchParams();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="items-start justify-center">
        <View className="rounded-xl w-[100%] justify-center items-center rounded-b-lg">
          <Image
            source={images.medicalCover}
            resizeMode="cover"
            className="w-full rounded-xl"
            style={{ height: 600, width: "100%" }}
          />
        </View>

        <View className="w-full px-[10rem] mt-5">
          <Text className="text-primary text-3xl font-rbold">
            Medical Assistance
          </Text>
          <Text className=" text-justify font-rlight text-black text-lg/6 mt-8 text-pretty">
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
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary ">
            Objectives
          </Text>

          {/* fix this hahaahahh */}
          <Text className="list-decimal  text-justify font-rlight text-black text-lg/6 text-pretty">
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

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary">
            Service offered
          </Text>

          {/* fix this hahaahahh */}
          <Text className="list-decimal text-justify font-rlight text-black text-lg/6 ">
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

        <View className="px-[10rem]">
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary">
            How to Apply
          </Text>

          <Text className="text-justify font-rlight text-black text-lg/6">
            1. Visit the City Social Welfare and Development Office (CSWDO)
            during office hours (8:00 AM - 5:00 PM).{"\n \n"}
            2. Submit all required documents, including:
            {"\n \n \t \t"}• Request Job Order from Mayor’s Office (Building ,
            room 00)
            {"\n \n \t \t"}• Valid ID (List of accepted Valid ID)
            {"\n \n \t \t"}• Proof of residency and any supporting documents
            indicating food insecurity, such as a barangay certification or
            disaster incident report.
            {"\n \n"}3. Undergo an interview or assessment conducted by program
            staff to evaluate the applicant's needs and eligibility. Contact
            Information
          </Text>

          <Text className="text-justify font-rlight text-black text-lg/6">
            For inquiries or assistance, please contact the CSWDO at:
            {"\n \n \t \t"}• Hotline: +63-54-205-2980 (Globe)
            {"\n \n \t \t"}• Email: cswdo@naga.gov.ph Office Address: City
            Social Welfare Development
            {"\n \n \t \t"}• Office G/F Social Development Center, Naga City
            Hall Complex, Juan Q. Miranda Ave., Concepcion Pequeña, Naga City
          </Text>
        </View>

        <View className="px-[10rem] mt-5">
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary">
            Commitment to Nutrition and Equity
          </Text>
          <Text className="text-justify font-rlight text-black text-lg/6">
            The Food Assistance Program is part of the local government’s
            broader initiative to combat food insecurity and support the
            nutritional needs of its constituents. By improving the application
            and approval process, the City Social Welfare Development Office
            ensures that aid reaches eligible individuals and families promptly
            and equitably. This program aims to foster a healthier, more
            resilient, and food-secure community.
          </Text>
        </View>

        <View className=" gap-3 my-3 justify-start items-start w-full px-[10rem] mt-10">
          <ExpansionPanel
            title="Eligibility"
            description={`• Must be a resident of Naga City.
                        \n• From indigent or marginalized families.
                        \n• Must not be receiving similar assistance from other programs.`}
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

        <View className="w-[40%] px-[10rem] my-7 pb-10 ">
          <ButtonFilled
            title="Apply"
            onClick={() => router.push("/ApplicationForm")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MedicalAssistanceWeb;
