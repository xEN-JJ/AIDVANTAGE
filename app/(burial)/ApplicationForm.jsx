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
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DocumentPickerField from "../../components/DocumentPicker";
import TextField from "../../components/TextField";
import ProgressBar from "../../components/ProgressBar";
import ButtonOutlined from "../../components/ButtonOutline";
import ButtonFilled from "../../components/ButtonFilled";
import RadioButtons from "../../components/RadioButtons";
import DropDown from "../../components/DropDownPicker";

const ApplicationForm = () => {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [household, setHousehold] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState({});

  const [typeOfAssistance, setTypeOfAssistance] = useState(null);
  const [typeOfAssistanceItems, setTypeOfAssistanceItems] = useState([
    { label: "Medical Assistance", value: "medical" },
    { label: "Educational Assistance", value: "educational" },
    { label: "Burial Assistance", value: "burial" },
    { label: "Relief Assistance", value: "relief" },
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
    { key: "RDC", title: "Relative's Death Certificate" },
    { key: "oscaID", title: "OSCA ID" },
    { key: "pwdID", title: "PWD ID" },
    { key: "Solo Parent ID", title: "Solo Parent ID" },
    { key: "OFC", title: "Original Funeral Contract" },
    { key: "AoF", title: "Affidavit of Residency" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* indicator */}
        <View className="flex-row items-center justify-center mt-2 mb-2 w-full ">
          <Text className="text-3xl text-blue-700 font-bold ">
            {step + 1}/3
          </Text>
          <View className="ml-4 items">
            <Text className="text-xl font-semibold text-blue-700 ">
              {
                [
                  "Personal Information",
                  "Family Composition",
                  "Document Submission",
                ][step]
              }
            </Text>
            <Text className="text-sm text-gray-500">
              {
                [
                  "Fill out the fields",
                  "List all the members in your household",
                  "Submit required documents",
                ][step]
              }
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="my-5 w-full items-center">
          <ProgressBar progress={(step + 1) * 0.34} />
        </View>

        {/* Animated Steps */}
        <Animated.View
          style={{
            width: width * 3,
            flexDirection: "row",
            transform: [{ translateX }],
          }}
        >
          {/* Step 1: Personal Info */}
          <View
            style={{ width }}
            className="flex-1 justify-center items-center mx-7"
          >
            <DropDown
              value={typeOfAssistance}
              setValue={setTypeOfAssistance} S
              items={typeOfAssistanceItems}
              setItems={setTypeOfAssistanceItems}
              placeholder="Type of Assistance"
              listMode="SCROLLVIEW"
              style={{
                borderColor: "#787575", // grey border
                marginBottom: 16,
              }}
              dropDownContainerStyle={{
                borderColor: "#787575",
              }}
              zIndex={2000}
            />
            {[
              { key: "firstName", label: "First Name" },
              { key: "lastName", label: "Last Name" },
              { key: "middleName", label: "Middle Name" },
              { key: "address", label: "Address" },
            ].map((field) => (
              <TextField
                key={field.key}
                title={field.label}
                value={formData[field.key] || ""}
                onChangeText={(text) => handleChange(field.key, text)}
              />
            ))}
            {/* { key: "birthDate", label: "Birth Date (MM/DD/YYYY)" }, */}
            <RadioButtons
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              label={"Gender"}
              checkedValue={formData["gender"]}
              onChange={(value) => handleChange("gender", value)}
            />
            <DropDown
              value={civilStatus}
              setValue={setCivilStatus}
              items={civilStatusItems}
              setItems={setCivilStatusItems}
              placeholder="Civil Status"
              listMode="SCROLLVIEW"
              style={{
                borderColor: "#000",
                marginBottom: 16,
              }}
              dropDownContainerStyle={{
                borderColor: "#000",
              }}
              zIndex={1000}
            />
            {[
              { key: "address", label: "Address" },
              { key: "occupation", label: "Occupation" },
            ].map((field) => (
              <TextField
                key={field.key}
                title={field.label}
                value={formData[field.key] || ""}
                onChangeText={(text) => handleChange(field.key, text)}
              />
            ))}
          </View>

          {/* Step 2: Family Composition */}
          <View style={{ width }} className="w-full px-7 items-center mt-5">
            <View className="w-full items-center">
              {household.map((member, index) => (
                <View
                  key={index}
                  className="flex-row justify-between items-center mb-3 border p-3 rounded-md bg-gray-100"
                >
                  <Text>{member}</Text>
                  <TouchableOpacity
                    onPress={() => removeHouseholdMember(index)}
                  >
                    <Text className="text-red-500">🗑 Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <ButtonFilled
                onPress={addHouseholdMember}
                prefixIcon={"plus"}
                className="bg-blue-700 p-3 rounded-md mt-3"
                title={"Add Member"}
              />
            </View>
          </View>

          {/* Step 3: Document Upload */}
          <View style={{ width }} className="items-center">
            <View className="w-full max-w-md items-center gap-3">
              {documents.map((doc) => (
                <DocumentPickerField
                  key={doc.key}
                  title={doc.title}
                  onUpload={() => handleDocumentUpload(doc.key)}
                  label={doc.title}
                />
              ))}
            </View>
          </View>
        </Animated.View>

        {/* Buttons */}
        <View className="w-full px-7 mt-6 mb-10 items-center gap-3">
          {step > 0 && (
            <ButtonOutlined
              className="border border-blue-700 py-3 rounded-md mb-3"
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
                    "Your application has been submitted.",
                  );
                  router.push("/myApplication");
                }
                : handleNext
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ApplicationForm;