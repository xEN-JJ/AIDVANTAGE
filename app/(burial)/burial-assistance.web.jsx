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
            source={images.burialCover}
            resizeMode="contain"
            className="w-full rounded-xl"
            style={{ height: 550, width: "100%" }}
          />
        </View>

        <View className="w-full px-[10rem] mt-5">
          <Text className="text-primary text-3xl font-rbold">{title}</Text>
          <Text className=" text-justify font-rlight text-black text-lg/6 mt-8 text-pretty">
            The{" "}
            <Text className="font-rsemibold">
              City Social Welfare Development Office
            </Text>{" "}
            aims to support families during difficult times through the Burial
            Assistance Program. This initiative is designed to provide financial
            assistance to cover funeral and related expenses, ensuring that
            families can honor their deceased loved ones without undue financial
            strain.
          </Text>
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary ">
            Objectives
          </Text>

          {/* fix this hahaahahh */}
          <Text className="list-decimal text-justify font-rlight text-black text-lg/6 text-pretty">
            1. To provide timely financial support for funeral and burial
            expenses.{"\n\n"}
            2. To assist families in transporting the deceased to their
            residence or burial site.{"\n\n"}
            3. To alleviate the financial burden associated with cremation or
            burial services for marginalized and vulnerable sectors.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary">
            Service offered
          </Text>

          <Text className="px-6 text-justify font-light text-black text-lg text-pretty">
            • <Text className="font-semibold">Funeral Cost Assistance:</Text>{" "}
            Financial support to cover funeral-related expenses, including
            funeral home services.{"\n\n"}•{" "}
            <Text className="font-semibold">Transport of Remains:</Text>{" "}
            Assistance in transporting the deceased from the place of death to
            their residence or burial site.{"\n\n"}•{" "}
            <Text className="font-semibold">Cremation Cost Support:</Text>{" "}
            Coverage for cremation expenses, ensuring a dignified send-off.
          </Text>
        </View>

        <View className="px-[10rem]">
          <Text className="font-rsemibold text-xl py-5 uppercase text-primary">
            How to Apply
          </Text>

          <Text className="text-justify font-rlight text-black text-lg/6">
            1. Visit the City Social Welfare and Development Office (CSWDO)
            during office hours (8:00 AM – 5:00 PM).{"\n\n"}
            2. Submit all required documents, including:{"\n\n"}• Photocopy of the
            deceased's Death Certificate.{"\n"}• OSCA ID and Certification of
            Membership (for Senior Citizens).{"\n"}• PWD ID and Certification of
            Membership (for Persons with Disabilities).{"\n"}• Solo Parent ID
            (if applicable).{"\n"}• Affidavit of residency (if the deceased died
            outside Naga City but was a registered resident of Naga City).{"\n"}
            • Original Funeral Contract.{"\n\n"}
            3. Undergo an interview or assessment conducted by program staff to
            evaluate the applicant’s needs and eligibility.
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
            The Burial Assistance Program is part of the local government's
            ongoing commitment to support the community in times of crisis. By
            addressing funeral-related needs, the CSWDO seeks to provide dignity
            and relief to grieving families.
          </Text>
        </View>

        <View className=" gap-3 my-3 justify-start items-start w-full px-[10rem] mt-10">
          <ExpansionPanel
            title="Eligibility"
            description={`• The applicant must be a resident of Naga City.
                        \n• The deceased must be a direct family member (e.g., parent, child, spouse, or immediate dependent) of the applicant.
                        \n• From indigent or marginalized families.
                        \n• The applicant must secure a Job Order Certificate from the Mayor’s Office as an official referral to the CSWDO.
                        \n• The applicant must not have received any Assistance within the past three (3) months from the CSWDO.`}
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
