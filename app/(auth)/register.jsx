import {
  View,
  Text,
  Image,
  Animated,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import axios from "axios";

import { images } from "../../constants";
import TextField from "../../components/TextField";
import ButtonFilled from "../../components/ButtonFilled";
import ButtonOutlined from "../../components/ButtonOutline";
import RegistrationModal from "../../components/Modals/RegistrationModal";

const Register = () => {
  const { width } = useWindowDimensions();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const translateX = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const steps = [
    [
      { key: "firstName", placeholder: "First Name" },
      { key: "middleName", placeholder: "Middle Name" },
      { key: "lastName", placeholder: "Last Name" },
      { key: "gender", placeholder: "Gender" },
      { key: "address", placeholder: "Address" },
    ],
    [
      { key: "birthDate", placeholder: "Birth Date" },
      { key: "placeOfBirth", placeholder: "Place of Birth" },
      { key: "civilStatus", placeholder: "Civil Status" },
      { key: "education", placeholder: "Educational Attainment" },
      { key: "occupation", placeholder: "Occupation" },
    ],
    [
      { key: "email", placeholder: "Email Address" },
      { key: "password", placeholder: "Password", secure: true },
      { key: "confirmPassword", placeholder: "Confirm Password", secure: true },
    ],
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const goToStep = (nextStep) => {
    Animated.spring(translateX, {
      toValue: -nextStep * width,
      useNativeDriver: true,
    }).start();
    setStep(nextStep);
  };

  const handleNext = () => {
    if (step < steps.length - 1) goToStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) goToStep(step - 1);
  };

  const handleSubmit = async () => {
    setVisible(true);
    // try {
    //   const response = await axios.post("/register", formData);
    //   if (response.status === 200 || response.status === 201) {
    //     console.log("User registered successfully:", response.data);
    //     // navigate or show success
    //   }
    // } catch (error) {
    //   console.error(
    //     "Registration failed:",
    //     error.response?.data || error.message,
    //   );
    // }
  };

  const handleModalCLick = () => {
    router.push("/home");
    setVisible(false);
  };

  return (
    <SafeAreaView className="h-full mx-6 mb-10">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <View className="mt-[70px] items-center">
          <Image
            source={images.logoBlue}
            resizeMode="contain"
            className="h-[15vh] w-full"
          />
          <Text className="text-center text-xl text-gray-700 font-rlight mt-1">
            Create your profile to access municipal assistance and services.
          </Text>
          {/* Step Indicator */}
          <View className="flex-row mt-2 gap-1">
            {steps.map((_, index) => (
              <View
                key={index}
                className={`w-2 h-2 rounded-full ${step >= index ? "bg-blue-800 w-[15]" : "bg-gray-300"}`}
              />
            ))}
          </View>
        </View>

        {/* Animated Stepper */}
        <View className={`mt-5 h-[50%]`}>
          <Animated.View
            style={{
              width: width * steps.length,
              flexDirection: "row",
              transform: [{ translateX }],
            }}
          >
            {steps.map((fields, index) => (
              <ScrollView
                key={index}
                style={{ width }}
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
              >
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={{ flex: 1 }}
                >
                  <View className="px-1 pt-3">
                    {fields.map((field) => (
                      <TextField
                        key={field.key}
                        title={field.placeholder}
                        secureTextEntry={field.secure}
                        value={formData[field.key] || ""}
                        onChangeText={(text) => handleChange(field.key, text)}
                      />
                    ))}
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            ))}
          </Animated.View>
        </View>

        {/* Navigation Buttons */}
        <View className="gap-3">
          {step !== 0 && <ButtonOutlined title="Back" onClick={handleBack} />}
          {step === steps.length - 1 ? (
            <ButtonFilled title="Sign Up" onClick={handleSubmit} />
          ) : (
            <ButtonFilled title="Next" onClick={handleNext} />
          )}
        </View>

        {/* Login Link */}
        <View className="flex flex-row gap-1 justify-center items-end mt-4 mb-[5rem] ">
          <Text className="text-[#787575]">Already have an account?</Text>
          <Link href="/sign-in" className="text-blue-500">
            Login Now
          </Link>
        </View>

        <RegistrationModal visible={visible} onClick={handleModalCLick} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
