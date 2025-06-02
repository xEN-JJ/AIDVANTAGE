import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router } from "expo-router";

const BurialAssistance = () => {
  return (
    <ScrollView className="h-full">
      <View className="items-center justify-center">
        <View className="rounded-xl w-[90%] mt-7 justify-center items-center">
          <Image
            source={images.burialCover}
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
            aims to support families during difficult times through the Burial Assistance Program. 
            This initiative is designed to provide financial assistance to cover funeral and related expenses, 
            ensuring that families can honor their deceased loved ones without undue financial strain.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Objectives
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. To provide timely financial support for funeral and burial expenses.{"\n\n"}
            2. To assist families in transporting the deceased to their residence or burial site.{"\n\n"}
            3. To alleviate the financial burden associated with cremation or burial services for marginalized and vulnerable sectors.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            Services Offered
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            • <Text className="font-rsemibold">Funeral Cost Assistance:</Text> Financial support to cover funeral-related expenses, including funeral home services.{"\n\n"}
            • <Text className="font-rsemibold">Transport of Remains:</Text> Assistance in transporting the deceased from the place of death to their residence or burial site.{"\n\n"}
            • <Text className="font-rsemibold">Cremation Cost Support:</Text> Coverage for cremation expenses, ensuring a dignified send-off.
          </Text>

          <Text className="font-rsemibold text-xl py-5 uppercase text-primary px-6">
            How to Apply
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. Visit the City Social Welfare and Development Office (CSWDO) during office hours (8:00 AM – 5:00 PM).{"\n\n"}
            2. Submit all required documents, including:{"\n"}
            • Photocopy of the deceased's Death Certificate.{"\n"}
            • OSCA ID and Certification of Membership (for Senior Citizens).{"\n"}
            • PWD ID and Certification of Membership (for Persons with Disabilities).{"\n"}
            • Solo Parent ID (if applicable).{"\n"}
            • Affidavit of residency (if the deceased died outside Naga City but was a registered resident of Naga City).{"\n"}
            • Original Funeral Contract.{"\n\n"}
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
            The Burial Assistance Program is part of the local government's ongoing commitment to support the community in times of crisis. 
            By addressing funeral-related needs, the CSWDO seeks to provide dignity and relief to grieving families.
          </Text>
        </View>

        <View className="mx-5 gap-3">
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

export default BurialAssistance;