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
    { label: "Medical Assistance", value: "medical" },
    { label: "Educational Assistance", value: "educational" },
    { label: "Burial Assistance", value: "burial" },
    { label: "Relief Assistance", value: "relief" },
  ]);

  const [educationalAttainment, seteducationalAttainment] = useState(null);
  const [educationalAttainmentItems, seteducationalAttainmentItems] = useState([
    { label: "Elementary Level", value: "elementary" },
    { label: "Highschool Level", value: "highschool" },
    { label: "Senior Highschool Level", value: "senoir high" },
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
    { key: "validID", title: "Valid ID" },
    { key: "pwdID", title: "PWD ID" },
    { key: "relaDC", title: "Relatives Death Certifcate" },
    { key: "funCON", title: "Funeral COntract" },
    { key: "affRES", title: "Affidavit of Residency" },
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomNavBar />
      <View className="mt-10 items-center">
        {/* Header */}
        <View className="flex flex-row justify-center items-center mb-6 mt-4">
          <ProgressIndicator step={step + 1} total={3}/>
          <View className="flex flex-col items-start pl-4 ml-6 gap-3">
            <Text className="text-2xl font-semibold text-primary mt-3">
              {["Personal Information", "Family Composition", "Document Submission"][step]}
            </Text>
            <Text className="text-base text-gray-500">
              {[
                "Fill out the fields",
                "List all the members in your household",
                "Submit all the requirements that this assistance requires",
              ][step]}
            </Text>
          </View>
        </View>

        {/* Step container with overflow hidden */}
        <View style={{ width, overflow: "hidden" }} className="mt-5">
          <Animated.View
            style={{
              width: width * 3,
              flexDirection: "row",
              transform: [{ translateX }],
            }}
          >
            {/* Step 1 */}
            <View style={{ width, alignItems: "center" }}>
              <View className="w-[20%] max-w-xl gap-3">
                <CustomDropDownPicker
                  value={typeOfAssistance}
                  setValue={setTypeOfAssistance}
                  items={typeOfAssistanceItems}
                  setItems={setTypeOfAssistanceItems}
                  placeholder="Type of Assistance"
                  listMode="SCROLLVIEW"
                  style={{ borderColor: "#787575", marginBottom: 16 }}
                  dropDownContainerStyle={{ borderColor: "#787575" }}
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

                <RadioButtons
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  label={"Gender"}
                  checkedValue={formData["gender"]}
                  onChange={(value) => handleChange("gender", value)}
                />

                <CustomDropDownPicker
                  value={civilStatus}
                  setValue={setCivilStatus}
                  items={civilStatusItems}
                  setItems={setCivilStatusItems}
                  placeholder="Civil Status"
                  listMode="SCROLLVIEW"
                  style={{ borderColor: "#000", marginBottom: 16 }}
                  dropDownContainerStyle={{ borderColor: "#000" }}
                  zIndex={2000}
                />

                <TextField
                  key="occupation"
                  title="Occupation"
                  value={formData["occupation"] || ""}
                  onChangeText={(text) => handleChange("occupation", text)}
                />

                <CustomDropDownPicker
                  value={educationalAttainment}
                  setValue={seteducationalAttainment}
                  items={educationalAttainmentItems}
                  setItems={seteducationalAttainmentItems}
                  placeholder="Educational Attainment"
                  listMode="SCROLLVIEW"
                  style={{ borderColor: "#000", marginBottom: 16 }}
                  dropDownContainerStyle={{ borderColor: "#000" }}
                  zIndex={1000}
                />

                <TextField
                  key="relationToClient"
                  title="Relation To Client"
                  value={formData["relationToClient"] || ""}
                  onChangeText={(text) =>
                    handleChange("relationToClient", text)
                  }
                />

                <TextField
                  key="sourceOfInfo"
                  title="Source of Information"
                  value={formData["sourceOfInfo"] || ""}
                  onChangeText={(text) => handleChange("sourceOfInfo", text)}
                />
              </View>
            </View>

            {/* Step 2 */}
            <View style={{ width, alignItems: "center" }}>
              <View className="w-[90%] max-w-xl mt-5">
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

            {/* Step 3 */}
            <View style={{ width, alignItems: "center" }}>
              <View className=" max-w-xl mt-5 gap-3">
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
        </View>

        {/* Show modal if successful */}

        <SuccessfulApplicationModal
          visible={succesModal}
          handleVisible={handleSuccessModal}
        />

        {/* Navigation Buttons */}
        <View
          className="mt-6 mb-10 items-center gap-3 p-3 "
          style={{ width: 600 }}
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
    </ScrollView>
  );
};

export default ApplicationForm;
