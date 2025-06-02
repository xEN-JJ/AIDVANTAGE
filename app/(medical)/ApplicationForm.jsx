import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DocumentPickerField from "../../components/DocumentPicker";
import TextField from "../../components/TextField";
import ProgressBar from "../../components/ProgressBar";
import ButtonOutlined from "../../components/ButtonOutline";
import ButtonFilled from "../../components/ButtonFilled";
import Dropdown from "../../components/Dropdown";
import RadioButtons from "../../components/RadioButtons";

const ApplicationForm = () => {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [household, setHousehold] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState({});

  const documents = [
    { key: "deathCert", title: "Relative’s Death Cert." },
    { key: "oscaId", title: "OSCA ID (if Senior Citizen)" },
    { key: "pwdId", title: "PWD ID (if PWD)" },
    { key: "soloParentId", title: "Solo Parent ID (if Solo Parent)" },
    { key: "funeralContract", title: "Original Funeral Contract" },
    { key: "affidavit", title: "Affidavit of Residency (if Resident of Naga)" },
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
    <SafeAreaView className="flex-1 bg-white mb-10">
      <ScrollView showsVerticalScrollIndicator={false} className="">
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
          className={"mt-2"}
        >
          {/* Step 1: Personal Info */}
          <View
            style={{ width }}
            className="flex-1 justify-center items-center mx-7 gap-2"
          >
            <Dropdown
              onValueChange={(value) => handleChange("typeOfAssistance", value)}
              selectedValue={formData["typeOfAssistance"] || ""}
              label="Nature of Assistance"
              prompt={"Nature of Assistance"}
              options={[
                { label: "Hospital Bill Assistance", value: "hospital" },
                { label: "Medicine Assistance", value: "medicine" },
                { label: "Laboratory Fee Assistance", value: "laboratory" },
              ]}
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

            <Dropdown
              onValueChange={(value) => handleChange("civilStatus", value)}
              selectedValue={formData["civilStatus"] || ""}
              label="Civil Status"
              prompt={"Civil Status"}
              options={[
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Widowed", value: "widowed" },
                { label: "Separated/Divorce", value: "divorce" },
              ]}
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
          <View
            style={{ width }}
            className="w-full items-center mt-5 h-[30%] px-7"
          >
            <View className="w-full items-center =">
              {household.map((member, index) => (
                <View
                  key={index}
                  className="flex-row justify-between items-center mb-3 border p-3 rounded-md bg-gray-100"
                >
                  <Text>{member}</Text>
                  <TouchableOpacity
                    onPress={() => removeHouseholdMember(index)}
                  >
                    <Text className="text-red-500"> Remove</Text>
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
        <View className="mt-6 mb-10 items-center gap-3 px-7">
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
