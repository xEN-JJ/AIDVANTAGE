import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import ExpansionPanel from "../../components/ExpansionPanel";
import ButtonFilled from "../../components/ButtonFilled";
import { router, useLocalSearchParams } from "expo-router";

const EducationalAssistanceWeb = () => {
  const { title } = useLocalSearchParams();
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
      {/* Full-width Header Background */}
      <View className="w-full relative">
            <Image
                source={images.educationalCover}
                resizeMode="cover"
                className="absolute right-0 top-0 opacity-40"
                style={{ height: 450, width: '100%', transform: [{ scale: 1 }] }}
            />
            <View className="w-full items-center justify-center">
                <Image
                source={images.educationalCover}
                resizeMode="cover"
                className="z-10 rounded-xl shadow-lg"
                style={{ height: 500, width: '61%' }}
                />
            </View>

            {/* Gradient Overlay at Bottom */}
            <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
      </View>

      {/* Main Content Container */}
      <View className="items-center justify-center">
        {/* Main Container with 80% width */}
        <View className="w-4/5 max-w-6xl">
          {/* Main Content Container */}
          <View className="w-full bg-white -mt-6 rounded-t-3xl px-6 pt-8">
            {/* Title Section */}
            <View className="mb-8">
              <Text className="text-primary text-4xl font-bold mb-4 leading-tight">
                Educational Assistance
              </Text>
              
              <Text className="text-gray-700 text-lg leading-7 text-justify">
                The{" "}
                <Text className="font-semibold text-primary">
                  City Social Welfare and Development Office
                </Text>{" "}
                (CSWDO) is committed to supporting the academic aspirations of its residents 
                through the Educational Assistance Program. This initiative aims to provide 
                financial support to students from marginalized sectors, ensuring equal 
                opportunities for underprivileged and vulnerable sectors within the community.
              </Text>
            </View>

            {/* Objectives Section */}
            <View className="mb-8">
              <Text className="font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
                Objectives
              </Text>
              <View className="bg-blue-50 rounded-xl p-6">
                <View className="space-y-4">
                  <View className="flex-row items-start">
                    <View className="w-8 h-8 bg-primary rounded-full items-center justify-center mr-4 mt-1">
                      <Text className="text-white font-bold text-sm">1</Text>
                    </View>
                    <Text className="flex-1 text-gray-700 text-lg leading-6">
                      To provide financial assistance for educational expenses, including tuition fees, school supplies, and other related costs.
                    </Text>
                  </View>
                  
                  <View className="flex-row items-start">
                    <View className="w-8 h-8 bg-primary rounded-full items-center justify-center mr-4 mt-1">
                      <Text className="text-white font-bold text-sm">2</Text>
                    </View>
                    <Text className="flex-1 text-gray-700 text-lg leading-6">
                      To reduce the financial burden on students and families, ensuring uninterrupted access to quality education.
                    </Text>
                  </View>
                  
                  <View className="flex-row items-start">
                    <View className="w-8 h-8 bg-primary rounded-full items-center justify-center mr-4 mt-1">
                      <Text className="text-white font-bold text-sm">3</Text>
                    </View>
                    <Text className="flex-1 text-gray-700 text-lg leading-6">
                      To promote equal educational opportunities for underprivileged and vulnerable sectors within the community.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Services Offered Section */}
            <View className="mb-8">
              <Text className="font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
                Services Offered
              </Text>
              <View className="space-y-4">
                <View className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <View className="flex-row items-start">
                    <View className="w-3 h-3 bg-primary rounded-full mr-4 mt-2" />
                    <View className="flex-1">
                      <Text className="font-semibold text-lg text-gray-800 mb-2">
                        Tuition Fee Assistance
                      </Text>
                      <Text className="text-gray-600 leading-6">
                        Support for partial or full payment of tuition fees for qualified students.
                      </Text>
                    </View>
                  </View>
                </View>
                
                <View className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <View className="flex-row items-start">
                    <View className="w-3 h-3 bg-primary rounded-full mr-4 mt-2" />
                    <View className="flex-1">
                      <Text className="font-semibold text-lg text-gray-800 mb-2">
                        School Supplies Assistance
                      </Text>
                      <Text className="text-gray-600 leading-6">
                        Provision of essential school materials to alleviate the cost of educational items.
                      </Text>
                    </View>
                  </View>
                </View>
                
                <View className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <View className="flex-row items-start">
                    <View className="w-3 h-3 bg-primary rounded-full mr-4 mt-2" />
                    <View className="flex-1">
                      <Text className="font-semibold text-lg text-gray-800 mb-2">
                        Transportation Allowance
                      </Text>
                      <Text className="text-gray-600 leading-6">
                        Assistance for students who need financial aid to commute to and from their educational institution.
                      </Text>
                    </View>
                  </View>
                </View>
                
                <View className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <View className="flex-row items-start">
                    <View className="w-3 h-3 bg-primary rounded-full mr-4 mt-2" />
                    <View className="flex-1">
                      <Text className="font-semibold text-lg text-gray-800 mb-2">
                        Miscellaneous Fee Support
                      </Text>
                      <Text className="text-gray-600 leading-6">
                        Coverage for laboratory, project, and other school-related fees.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* How to Apply Section */}
            <View className="mb-8">
              <Text className="font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
                How to Apply
              </Text>
              <View className="bg-gray-50 rounded-xl p-6">
                <View className="space-y-6">
                  <View className="flex-row items-start">
                    <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-4">
                      <Text className="text-white font-bold">1</Text>
                    </View>
                    <Text className="flex-1 text-gray-700 text-lg leading-6">
                      Visit the City Social Welfare and Development Office (CSWDO) during office hours (8:00 AM – 5:00 PM).
                    </Text>
                  </View>
                  
                  <View className="flex-row items-start">
                    <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-4">
                      <Text className="text-white font-bold">2</Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-gray-700 text-lg leading-6 mb-3">
                        Prepare and submit the following required documents:
                      </Text>
                      <View className="ml-4 space-y-2">
                        <Text className="text-gray-600 leading-6">• Request Letter Addressed to the CSWDO Director</Text>
                        <Text className="text-gray-600 leading-6">• Valid ID (e.g., School ID, Government ID)</Text>
                        <Text className="text-gray-600 leading-6">• School Certification or Enrollment Certificate of Enrollment or Statement of Account (SOA)</Text>
                        <Text className="text-gray-600 leading-6">• Certificate of Academic Performance Validation</Text>
                        <Text className="text-gray-600 leading-6">• Barangay Certification indicating the applicant's residency and indigency status</Text>
                      </View>
                    </View>
                  </View>
                  
                  <View className="flex-row items-start">
                    <View className="w-10 h-10 bg-primary rounded-full items-center justify-center mr-4">
                      <Text className="text-white font-bold">3</Text>
                    </View>
                    <Text className="flex-1 text-gray-700 text-lg leading-6">
                      Undergo an interview or assessment conducted by program staff to evaluate the applicant's needs and eligibility.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Contact Information */}
            <View className="mb-8">
              <Text className="font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
                Contact Information
              </Text>
              <View className="bg-primary/10 rounded-xl p-6">
                <Text className="text-gray-700 text-lg leading-7 mb-4">
                  For inquiries or assistance, please contact the Office CSWDO at:
                </Text>
                <View className="space-y-3">
                  <Text className="text-gray-700 text-lg">
                    <Text className="font-semibold">Hotline:</Text> +63-54-205-2980 (Globe) | +63-54-871-2800 (PLDT)
                  </Text>
                  <Text className="text-gray-700 text-lg">
                    <Text className="font-semibold">Email:</Text> cswdo@naga.gov.ph
                  </Text>
                  <Text className="text-gray-700 text-lg">
                    <Text className="font-semibold">Office Address:</Text> City Social Welfare Development Office G/F Social Development Center, Naga City Hall Complex, Juan Q. Miranda Ave., Concepción Pequeña, Naga City
                  </Text>
                </View>
              </View>
            </View>

            {/* Commitment Section */}
            <View className="mb-8">
              <Text className="font-bold text-2xl text-primary mb-4 uppercase tracking-wide">
                Commitment to Education and Opportunity
              </Text>
              <Text className="text-gray-700 text-lg leading-7 text-justify">
                The Educational Assistance Program is part of the local government's commitment to fostering a brighter future for its residents. By addressing the financial challenges of education, the CSWDO aims to empower students to reach their academic goals, contribute to their community, and achieve lasting positive change.
              </Text>
            </View>

            {/* Expandable Sections */}
            <View className="space-y-4 mb-8">
              <ExpansionPanel
                title="Eligibility"
                description={`• The applicant must be a resident of Naga City.
                              \n• Must be enrolled in an accredited educational institution (elementary, high school, college, or vocational school).
                              \n• From indigent or marginalized families as verified by barangay certification.
                              \n• Demonstrates academic performance or potential for improvement.
                              \n• Has not received similar assistance from other government programs within the current academic year.`}
              />
              <ExpansionPanel
                title="Requirements"
                description={`• Request Letter addressed to the CSWDO Director.
                              \n• Valid Government-issued ID or School ID of the applicant.
                              \n• Certificate of Enrollment or Statement of Account (SOA).
                              \n• Certificate of Academic Performance or Report Card.
                              \n• Barangay Certification indicating residency and indigency status.
                              \n• Proof of Family Income (if available).
                              \n• Other supporting documents as may be required by the CSWDO.`}
                />
              <ExpansionPanel
                title="Assistance Coverage"
                description={`• Tuition Fee Assistance: Partial or full coverage depending on assessment.
                              \n• School Supplies: Essential learning materials and supplies.
                              \n• Transportation Allowance: Monthly allowance for commuting students.
                              \n• Miscellaneous Fees: Laboratory fees, project costs, and other school-related expenses.
                              \n• Coverage amount varies based on family income assessment and available budget.`}
              />
            </View>

            {/* Apply Button */}
            <View className="mb-10">
              <ButtonFilled
                title="Apply Now"
                onClick={() => router.push("/ApplicationForm")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EducationalAssistanceWeb;