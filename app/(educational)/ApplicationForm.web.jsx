import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import DocumentPickerField from "../../components/DocumentPicker";
import TextField from "../../components/TextField";
import ProgressIndicator from "../../components/ProgressIndicator";
import ButtonOutlined from "../../components/ButtonOutline";
import ButtonFilled from "../../components/ButtonFilled";
import RadioButtons from "../../components/RadioButtons";
import CustomDropDownPicker from "../../components/DropDownPicker";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";
import SuccessfulApplicationModal from "../../components/Modals/SuccessfulApplicationModal";

const ApplicationForm = () => {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;

  const [step, setStep] = useState(0);
  const [succesModal, setSuccesModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [household, setHousehold] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState({});

  const [typeOfAssistance, setTypeOfAssistance] = useState(null);
  const [typeOfAssistanceItems, setTypeOfAssistanceItems] = useState([
    { label: "Tuition Fee", value: "tuition" },
    { label: "School Supplies Assistance", value: "supplies" },
    { label: "Miscellaneous Fee Support", value: "miscellaneous" },
  ]);

  const [educationalAttainment, seteducationalAttainment] = useState(null);
  const [educationalAttainmentItems, seteducationalAttainmentItems] = useState([
    { label: "Elementary Level", value: "elementary" },
    { label: "Highschool Level", value: "highschool" },
    { label: "Senior Highschool Level", value: "senior high" },
    { label: "College Level", value: "college" },
    { label: "Vocational", value: "vocational" },
  ]);

  const [civilStatus, setCivilStatus] = useState(null);
  const [civilStatusItems, setCivilStatusItems] = useState([
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Separated", value: "separated" },
    { label: "Divorced", value: "divorced" },
    { label: "Widowed", value: "widowed" },
  ]);

  const documents = [
    { key: "schoolStatement", title: "School Statement of Account" },
    { key: "schoolID", title: "School ID" },
    { key: "matriculation", title: "Matriculation" },
    { key: "validID", title: "Valid ID" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSuccessModal = (value) => {
    setSuccesModal(value);
  };

  const goToStep = (nextStep) => {
    Animated.spring(translateX, {
      toValue: -nextStep * width,
      useNativeDriver: true,
    }).start(() => {
      setStep(nextStep);
    });
  };

  const handleNext = () => {
    if (step < 2) goToStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) goToStep(step - 1);
  };

  const addHouseholdMember = () => {
    Alert.prompt("Add Member", "Enter name", (name) => {
      if (name) setHousehold([...household, name]);
    });
  };

  const removeHouseholdMember = (index) => {
    const updated = [...household];
    updated.splice(index, 1);
    setHousehold(updated);
  };

  const handleDocumentUpload = (key) => {
    setUploadedDocs((prev) => ({ ...prev, [key]: "Uploaded" }));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomNavBar />
        
        {/* Main Container with White Background */}
        <View className>
          {/* Form Header */}
          <View className="p-6">
            <View className="flex-row items-center mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" style={{ marginRight: 8 }} />
            </TouchableOpacity>
            <Text className="text-xl font-semibold">Apply for Educational Assistance</Text>
            </View>
            
            <View className="items-center w-full">
            <View className="flex-row items-center justify-center">
                <ProgressIndicator step={step + 1} total={3} />
                <View className="ml-6">
                <Text className="text-xl font-semibold text-blue-600 mb-1">
                    {["Personal Information", "Family Composition", "Document Submission"][step]}
                </Text>
                <Text className="text-base text-gray-600">
                    {[
                    "Fill out the fields",
                    "List all the members in your household",
                    "Submit all the requirements that this assistance requires",
                    ][step]}
                </Text>
                </View>
            </View>
            </View>

          </View>

          {/* Step container with overflow hidden */}
          <View style={{ width: width - 32, overflow: "hidden" }}>
            <Animated.View
              style={{
                width: (width - 32) * 3,
                flexDirection: "row",
                transform: [{ translateX }],
              }}
            >
              {/* Step 1 - Personal Information */}
              <View style={{ width: width - 32, alignItems: "center" }}>
                <View className="w-full max-w-2xl p-6">
                  {/* Assistance Type Section */}
                  <View className="mb-6">
                    <Text className="text-base font-medium text-gray-700 mb-3">
                      Assistance for:
                    </Text>
                    <RadioButtons
                      options={[
                        { label: "Tuition Fee", value: "tuition" },
                        { label: "School Supplies Assistance", value: "supplies" },
                        { label: "Miscellaneous Fee Support", value: "miscellaneous" }
                      ]}
                      label=""
                      checkedValue={typeOfAssistance}
                      onChange={(value) => setTypeOfAssistance(value)}
                    />
                  </View>

                  {/* Name Fields - Row Layout */}
                  <View className="flex-row gap-3 mb-4">
                    <View className="flex-1">
                      <TextField
                        title="First Name"
                        value={formData["firstName"] || ""}
                        onChangeText={(text) => handleChange("firstName", text)}
                      />
                    </View>
                    <View className="flex-1">
                      <TextField
                        title="Middle Name"
                        value={formData["middleName"] || ""}
                        onChangeText={(text) => handleChange("middleName", text)}
                      />
                    </View>
                    <View className="flex-1">
                      <TextField
                        title="Last Name"
                        value={formData["lastName"] || ""}
                        onChangeText={(text) => handleChange("lastName", text)}
                      />
                    </View>
                  </View>

                  {/* Address and Birth Date */}
                  <View className="flex-row gap-3 mb-4">
                    <View className="flex-1">
                      <TextField
                        title="Address"
                        value={formData["address"] || ""}
                        onChangeText={(text) => handleChange("address", text)}
                      />
                    </View>
                    <View className="flex-1">
                      <TextField
                        title="Birth Date"
                        value={formData["birthDate"] || ""}
                        onChangeText={(text) => handleChange("birthDate", text)}
                        placeholder="MM/DD/YYYY"
                      />
                    </View>
                  </View>

                  {/* Gender and Place of Birth */}
                  <View className="flex-row gap-3 mb-4 items-start">
                    <View className="flex-1">
                        <Text className="font-medium text-gray-500 mb-3">Gender</Text>
                        <View className="flex-row items-center px-1 py-2">
                        <TouchableOpacity
                            onPress={() => handleChange("gender", "Male")}
                            className="flex-row items-center mr-4"
                        >
                            <View className={`w-5 h-5 rounded-full mr-2 border ${formData["gender"] === "Male" ? "border-blue-500 bg-blue-500" : "border-blue-500"}`} />
                            <Text className="text-sm text-gray-700">Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleChange("gender", "Female")}
                            className="flex-row items-center"
                        >
                            <View className={`w-5 h-5 rounded-full mr-2 border ${formData["gender"] === "Female" ? "border-blue-500 bg-blue-500" : "border-blue-500"}`} />
                            <Text className="text-sm text-gray-700">Female</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                    {/* Place of Birth field */}
                    <View className="flex-1">
                        <TextField
                        title="Place of Birth"
                        value={formData["placeOfBirth"] || ""}
                        onChangeText={(text) => handleChange("placeOfBirth", text)}
                        />
                    </View>
                    </View>

                  {/* Civil Status, Educational Level, School Name */}
                <View className="flex-row gap-3 mb-4">
                {/* Civil Status */}
                <View className="flex-1">
                    <Text className="text-gray-400 text-sm mb-1">Civil Status</Text>
                    <CustomDropDownPicker
                    value={civilStatus}
                    setValue={setCivilStatus}
                    items={civilStatusItems}
                    setItems={setCivilStatusItems}
                    placeholder="Select Civil Status"
                    listMode="SCROLLVIEW"
                    style={{ borderColor: "#D1D5DB", marginBottom: 16 }}
                    dropDownContainerStyle={{ borderColor: "#D1D5DB" }}
                    zIndex={2000}
                    />
                </View>

                {/* Educational Level */}
                <View className="flex-1">
                    <Text className="text-gray-400 text-sm mb-1">Educational Level</Text>
                    <CustomDropDownPicker
                    value={educationalAttainment}
                    setValue={seteducationalAttainment}
                    items={educationalAttainmentItems}
                    setItems={seteducationalAttainmentItems}
                    placeholder="Select Educational Level"
                    listMode="SCROLLVIEW"
                    style={{ borderColor: "#D1D5DB", marginBottom: 16 }}
                    dropDownContainerStyle={{ borderColor: "#D1D5DB" }}
                    zIndex={1900}
                    />
                </View>

                {/* School Name */}
                <View className="flex-1">
                    <Text className="text-gray-400 text-sm mb-1">School Name</Text>
                    <TextField
                    value={formData["schoolName"] || ""}
                    onChangeText={(text) => handleChange("schoolName", text)}
                    style={{ borderColor: "#D1D5DB", marginBottom: 16 }}
                    />
                </View>
                </View>



                  {/* Course and Semester */}
                  <View className="flex-row gap-3 mb-4">
                    <View className="flex-1">
                      <TextField
                        title="Course"
                        value={formData["course"] || ""}
                        onChangeText={(text) => handleChange("course", text)}
                      />
                    </View>
                    <View className="flex-1">
                      <TextField
                        title="Semester/Quarter"
                        value={formData["semester"] || ""}
                        onChangeText={(text) => handleChange("semester", text)}
                      />
                    </View>
                  </View>
                </View>
              </View>

              {/* Step 2 - Family Composition */}
              <View style={{ width: width - 32, alignItems: "center", marginLeft: 40 }}>
                <View className="w-full max-w-2xl p-6">
                  {/* Info Section */}
                  <View className="bg-blue-50 p-4 rounded-lg mb-6">
                    <Text className="font-semibold text-blue-800 mb-2">Household Members</Text>
                    <Text className="text-blue-600 text-sm">Add all members of your household including yourself</Text>
                  </View>
                  
                  {/* Household Members List */}
                  {household.length === 0 ? (
                    <View className="py-4 items-center">
                      <Text className="text-gray-500">No household members added yet</Text>
                    </View>
                  ) : (
                    <View className="mb-6">
                      {household.map((member, index) => (
                        <View
                          key={index}
                          className="flex-row justify-between items-center mb-3 p-4 border border-gray-200 rounded-lg bg-gray-50"
                        >
                          <Text className="font-medium">{member}</Text>
                          <TouchableOpacity
                            onPress={() => removeHouseholdMember(index)}
                            className="p-2"
                          >
                            <Text className="text-red-500 font-medium">Remove</Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Add Member Button */}
                  <TouchableOpacity
                    onPress={addHouseholdMember}
                    className="w-full border-2 border-dashed border-blue-300 rounded-lg p-4 items-center justify-center"
                  >
                    <Text className="text-blue-600 font-medium">+ Add Household Member</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Step 3 - Document Submission */}
              <View style={{ width: width - 32, alignItems: "center", marginLeft: 30 }}>
                <View className="w-full max-w-2xl p-6">
                  {/* Do/Don't Section */}
                  <View className="flex-row gap-4 mb-8">
                    <View className="flex-1">
                      <View className="flex-row items-center mb-3">
                        <View className="w-5 h-5 bg-green-500 rounded-full mr-2" />
                        <Text className="font-semibold text-green-700">Do</Text>
                      </View>
                      <View className="bg-green-50 p-4 rounded-lg">
                        <View className="w-full h-24 bg-gray-200 rounded mb-2 items-center justify-center">
                          <Text className="text-gray-400">📄</Text>
                        </View>
                        <Text className="text-sm text-green-600">
                          Submit clear, readable documents with all required information visible
                        </Text>
                      </View>
                    </View>
                    
                    <View className="flex-1">
                      <View className="flex-row items-center mb-3">
                        <View className="w-5 h-5 bg-red-500 rounded-full mr-2" />
                        <Text className="font-semibold text-red-700">Don't</Text>
                      </View>
                      <View className="bg-red-50 p-4 rounded-lg">
                        <View className="w-full h-24 bg-gray-200 rounded mb-2 items-center justify-center">
                          <Text className="text-gray-400">❌</Text>
                        </View>
                        <Text className="text-sm text-red-600">
                          Don't submit blurry, damaged, or incomplete documents
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Document Upload Section */}
                    <View className="items-center">
                    <View className="gap-4 w-full max-w-md">
                        {documents.map((doc) => (
                        <View key={doc.key} className="border border-blue-300 rounded-lg p-4">
                            <DocumentPickerField
                            title={doc.title}
                            onUpload={() => handleDocumentUpload(doc.key)}
                            label={doc.title}
                            />
                        </View>
                        ))}
                    </View>
                    </View>
                </View>
              </View>
            </Animated.View>
          </View>

        {/* Navigation Buttons */}
        <View
        className="mt-6 mb-10 p-3"
        style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <View
            style={{
            width: 600,
            alignItems: 'center',
            marginRight: 40,
            gap: 12,
            }}
        >
            {step > 0 && (
            <ButtonOutlined
                className="border border-blue-700 rounded-md mb-3"
                title="Back"
                onClick={handleBack}
            />
            )}
            <ButtonFilled
            title={step === 2 ? "Submit" : "Next"}
            onClick={
                step === 2
                ? () => {
                    console.log({ formData, household, uploadedDocs });
                    Alert.alert(
                        "Submitted",
                        "Your application has been submitted."
                    );
                    handleSuccessModal(true);
                    }
                : handleNext
            }
            />
        </View>
        </View>

        </View>

        {/* Success Modal */}
        <SuccessfulApplicationModal
          visible={succesModal}
          handleVisible={handleSuccessModal}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationForm;