import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router } from "expo-router";

const EducationalAssistance = () => {
  return (
    <ScrollView className="h-full">
      <View className="items-center justify-center">
        <View className="rounded-xl w-[90%] mt-7 justify-center items-center">
          <Image
            source={images.educationalCover}
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
            (CSWDO) is committed to supporting the academic aspirations of its
            residents through the Educational Assistance Program. This
            initiative aims to provide financial support to students from
            marginalized sectors, enabling them to continue their education and
            achieve their full potential.
          </Text>

          <Text className="font-rsemibold text-2xl py-5 uppercase text-primary px-6">
            Objectives
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. To provide financial assistance for educational expenses, including tuition fees, school supplies, and other related costs.{"\n\n"}
            2. To reduce the financial burden on students and families, ensuring uninterrupted access to quality education.{"\n\n"}
            3. To promote equal educational opportunities for underprivileged and vulnerable sectors within the community.
          </Text>

          <Text className="font-rsemibold text-2xl py-5 uppercase text-primary px-6">
            Services Offered
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            • <Text className="font-rsemibold">Tuition Fee Assistance:</Text> Support for partial or full payment of tuition fees for qualified students.{"\n\n"}
            • <Text className="font-rsemibold">School Supplies Assistance:</Text> Provision of essential school materials to alleviate the cost of educational needs.{"\n\n"}
            • <Text className="font-rsemibold">Transportation Allowance:</Text> Assistance for students who need financial aid to commute to and from their educational institutions.{"\n\n"}
            • <Text className="font-rsemibold">Miscellaneous Fee Support:</Text> Coverage for laboratory, project, and other school-related fees.
          </Text>

          <Text className="font-rsemibold text-2xl py-5 uppercase text-primary px-6">
            How to Apply
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            1. Visit the City Social Welfare and Development Office (CSWDO) during office hours (8:00 AM – 5:00 PM).{"\n\n"}
            2. Prepare and submit the following required documents:{"\n"}
              • Request Letter: Addressed to the CSWDO Director.{"\n"}
              • Valid ID (e.g., School ID, Government ID).{"\n"}
              • School Certification or Enrollment Proof: Certificate of Enrollment or Statement of Account (SOA).{"\n"}
              • Report Card or Transcript of Records: For academic performance validation.{"\n"}
              • Barangay Certification: Indicating the applicant’s residency and indigency status.{"\n\n"}
            3. Undergo an interview or assessment conducted by program staff to evaluate the applicant’s needs and eligibility.
          </Text>

          <Text className="font-rsemibold text-2xl py-5 uppercase text-primary px-6">
            Contact Information
          </Text>
          <Text className="px-6 text-justify font-rlight text-black text-base/6 text-pretty">
            For inquiries or assistance, please contact the [Office Name] at:{"\n"}
            • Hotline: +63-54-205-2980 (Globe) | +63-54-871-2050 (PLDT){"\n"}
            • Email: cswdo@naga.gov.ph{"\n"}
            • Office Address: City Social Welfare Development Office G/F Social Development Center, Naga City Hall Complex, Juan Q. Miranda Ave., Concepcion Pequeña, Naga City
          </Text>

          <Text className="font-rsemibold text-xl py-5 px-6 text-primary">
            Commitment to Education and Opportunity
          </Text>
          <Text className="px-6 pb-3 text-justify font-rlight text-black text-base/6 text-pretty">
            The Educational Assistance Program is part of the local government’s commitment to fostering a brighter future for its residents. By addressing the financial challenges of education, the CSWDO aims to empower students to reach their academic goals, contribute to their communities, and achieve lifelong success.
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

export default EducationalAssistance;
