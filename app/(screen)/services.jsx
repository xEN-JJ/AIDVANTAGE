import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";
import { images } from "../../constants";
import AssistanceCardWeb from "../../components/AssistanceCardWeb";
import { Link } from "expo-router";

const ServiceWeb = () => {
  const assistanceList = [
    {
      title: "Medical Assistance",
      description: "Provides financial aid for medical and hospital expenses.",
      link: "/medical-assistance",
      icon: images.medicalIcon,
    },
    {
      title: "Educational Assistance",
      description:
        "Support for students through tuition fee and school supply aid.",
      link: "/educational-assistance",
      icon: images.educationalIcon,
    },
    {
      title: "Burial Assistance",
      description: "Helps cover funeral and burial costs for families in need.",
      link: "/burial-assistance",
      icon: images.burialIcon,
    },
    {
      title: "Relief Assistance",
      description:
        "Relief and financial support for victims of natural disasters.",
      link: "/relief-assistance",
      icon: images.reliefIcon,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="pb-10">
      <CustomNavBar />
      <View className="px-[10%]">
        <View className="mt-10">
          <Image
            source={images.logoBlue}
            style={{ resizeMode: "contain", width: 300, height: 200 }}
          />
        </View>

        <View>
          <Text className="text-xl font-rmedium text-primary ">
            Your Lifeline in Crisis Situations
          </Text>

          <Text className="text-lg text-justify mt-2">
            At AIDVANTAGE, we recognize that unforeseen challenges can affect
            individuals and families. Our mission is to provide compassionate
            support in crisis situations, collaborating with the City Social
            Welfare and Development Office (CSWDO) to assist with medical
            emergencies, educational expenses, and other urgent needs.
          </Text>
          <Text className="text-lg text-justify mt-3">
            We are dedicated to uplifting the lives of individuals and families
            in our community. Through our various programs and services,
            including the Assistance to Individuals in Crisis Situations (AICS),
            we provide immediate support to those facing unexpected challenges.
            Whether it's financial aid, healthcare assistance, or basic needs,
            our goal is to ensure that help is accessible to those who need it
            most. At CSWDO, we are here to listen, guide, and assist you toward
            a brighter future. Let us work together to build a compassionate and
            empowered community. Discover more about our services and how we can
            support you today!
          </Text>
        </View>

        <View className="bg-primary h-12 px-3 justify-center items-center w-[20%] mt-10">
          <Text className="text-white font-rmedium text-4xl">Services</Text>
        </View>

        <View className="mt-10 flex flex-row gap-8">
          {assistanceList.map((item, index) => (
            <AssistanceCardWeb
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </View>

        <View className="bg-primary h-12 px-3 justify-center items-center w-[30%] mt-10">
          <Text className="text-white font-rmedium text-4xl">HOW IT WORKS</Text>
        </View>

        <View className="mx-7 mt-5">
          <Text className="text-lg text-justify mt-3">
            <Text className="text-lg font-rbold ">Step 1: </Text>
            Identify the Assistance You Need
          </Text>

          <Text className="text-lg text-justify mt-3">
            Take a moment to understand the type of support you require.
          </Text>

          <Text className="text-lg text-justify mt-3">
            <Text className="text-lg font-rbold ">Step 2: </Text>
            Prepare the Required Documents
          </Text>

          <Text className="text-lg text-justify mt-3">
            To process your application, certain documents will be needed. While
            specific requirements may vary depending on the type of assistance,
            here’s a general list:
          </Text>
          <Text className="text-lg text-justify ">
            {"\t \t"}• Valid ID: Proof of identity (List of accepted Valid IDs)
            {"\n \t \t"}• Proof of Need: Relevant documents, such as medical
            bills, school enrollment forms, or fire incident reports.
            {"\n \t \t"}• Job Order: You can request this in Mayor’s Office.
          </Text>

          <Text className="text-lg text-justify mt-3">
            <Text className="text-lg font-rbold ">Step 3: </Text>
            Submit Your Application
          </Text>

          <Text className="text-lg text-justify mt-3">
            Once your documents are ready, you can submit your application.
          </Text>
          <Text className="text-lg text-justify ">
            {"\t \t"}• In-Person: Visit your local CSWDO office and approach the
            designated desk for AICS assistance.
            {"\n \t \t"}• Online:{" "}
            <Link href={"/ApplicationForm"}>
              <Text className="text-blue-500">Apply for Assistance.</Text>
            </Link>
          </Text>
          <Text className="text-lg text-justify mt-3">
            Our staff will guide you through the process and ensure your
            application is correctly submitted.
          </Text>

          <Text className="text-lg text-justify mt-3">
            <Text className="text-lg font-rbold ">Step 4: </Text>
            Wait for Evaluation and Processing
          </Text>
          <Text className="text-lg text-justify mt-3">
            After submission, your application will be evaluated to ensure
            eligibility.
          </Text>
          <Text className="text-lg text-justify ">
            {"\t \t"}• This process may take a few days, depending on the volume
            of applications.
            {"\n \t \t"}• You may be contacted for additional information or
            document verification.
          </Text>
          <Text className="text-lg text-justify mt-3">
            Rest assured, we are committed to processing your request as quickly
            as possible.
          </Text>

          <Text className="text-lg text-justify mt-3">
            <Text className="text-lg font-rbold ">Step 5: </Text>
            Receive Assistance
          </Text>

          <Text className="text-lg text-justify mt-3">
            Once your application is approved, you’ll be notified about how to
            claim your assistance.
          </Text>
          <Text className="text-lg text-justify ">
            {"\t \t"}• For financial aid, we only provide Guarantee Letters that
            you can use on our affiliated Hospitals and Drugstores. We only
            provide cash if the needed Laboratory Procedures or Medicines are
            not available on our affiliated Hospitals and Drugstores.
            {"\n \t \t"}• For non-monetary support like food or basic
            necessities, collection details will be provided.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceWeb;
