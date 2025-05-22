import {
  View,
  Text,
  ScrollView,
  Animated,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import ProgressBar from "../../components/ProgressBar";
import TextField from "../../components/TextField";
import ButtonFilled from "../../components/ButtonFilled";
import ButtonOutlined from "../../components/ButtonOutline";
import { SafeAreaView } from "react-native-safe-area-context";
import DocumentPickerField from "../../components/DocumentPicker";

const ApplicationForm = () => {
  const { width } = useWindowDimensions();

  const steps = [
    [
      { key: "firstName", placeholder: "First Name" },
      { key: "lastName", placeholder: "Last Name" },
      { key: "username", placeholder: "Username" },
      { key: "phone", placeholder: "Phone Number" },
      { key: "email", placeholder: "Email" },
      { key: "password", placeholder: "Password", secure: true },
      { key: "confirmPassword", placeholder: "Confirm Password", secure: true },
      { key: "dob", placeholder: "Date of Birth" },
      { key: "country", placeholder: "Country" },
      { key: "city", placeholder: "City" },
    ],
    [
      { key: "email", placeholder: "Email" },
      { key: "password", placeholder: "Password", secure: true },
      { key: "confirmPassword", placeholder: "Confirm Password", secure: true },
      { key: "dob", placeholder: "Date of Birth" },
    ],
    [
      { key: "country", placeholder: "Country", document: "true" },
      { key: "city", placeholder: "City" },
    ],
  ];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const translateX = useRef(new Animated.Value(0)).current;

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
    if (step < steps.length - 1) goToStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) goToStep(step - 1);
  };
  return (
    <SafeAreaView className="mx-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flext flex-row justify-center items-center my-5">
            <Text className="text-primary ">
              <Text className="text-3xl">{step}</Text>
              <Text className="text-2xl">/3</Text>
            </Text>
            <View className="ml-5">
              <Text className="text-primary font-rbold text-2xl">
                Personal Information
              </Text>
              <Text className="text-base">Enter Personal Information</Text>
            </View>
          </View>

          <View className="justify-center items-center my-5">
            <ProgressBar progress={0.3} />
          </View>
          {/* create dropdown component */}

          <View className="mt-3 flex justify-center items-start py-5">
            <Animated.View
              style={[
                {
                  width: width * steps.length,
                  transform: [{ translateX }],
                },
              ]}
              className="flex flex-row items-start justify-center"
            >
              {steps.map((fields, index) => (
                <ScrollView
                  key={index}
                  style={{ width }}
                  contentContainerStyle={{ paddingBottom: 10 }}
                  showsVerticalScrollIndicator={false}
                >
                  <KeyboardAvoidingView
                    behavior={Platform.OS === "window" ? "padding" : "height"}
                    style={{ flex: 1 }}
                  >
                    <View className="px-1 pt-3">
                      <DocumentPickerField />
                      {/* {step === 0 &&
                        fields.map((field) => (
                          // <TextField
                          //   key={field.key}
                          //   title={field.placeholder}
                          //   secureTextEntry={field.secure}
                          //   value={formData[field.key] || ""}
                          //   onChangeText={(text) =>
                          //     handleChange(field.key, text)
                          //   }
                          // />

                          
                          //create a document picker in this
                        ))} */}
                    </View>
                  </KeyboardAvoidingView>
                </ScrollView>
              ))}
            </Animated.View>
          </View>

          <View className="gap-3">
            {step >= 2 && <ButtonOutlined title="Back" onClick={handleBack} />}
            {step === steps.length - 1 ? (
              <ButtonFilled
                title="Submit"
                onPress={() => console.log(formData)}
              />
            ) : (
              <ButtonFilled title="Next" onClick={handleNext} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationForm;
