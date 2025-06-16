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

import { images } from "../../constants";
import TextField from "../../components/TextField.web";
import ButtonFilled from "../../components/ButtonFilled";
import ButtonOutlined from "../../components/ButtonOutline";
import RegistrationModal from "../../components/Modals/RegistrationModal";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";
import ProgressIndicator from "../../components/ProgressIndicator";

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
  };

  const handleModalCLick = () => {
    router.push("/home");
    setVisible(false);
  };

  
  return (
    <View className="flex-1 bg-white">
      <CustomNavBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex flex-col lg:flex-row min-h-screen">

            {/* Left Side - Image */}
            <View className="lg:w-1/2 w-full bg-white items-center justify-center p-6">
              <Image
                source={images.logoBlue}
                resizeMode="center"
                className="w-[60%] mb-4"
              />
              <Text className="text-center text-xl text-gray-700 font-rlight px-4">
                Create your profile to access municipal assistance and services.
              </Text>
            </View>

            {/* Right Side - Form */}
            <View className="lg:w-1/2 w-full flex items-center justify-center px-4 py-10">
              <View className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-xl">
                {/* Progress Indicator */}
                <View className="flex flex-row items-center justify-center mb-6">
                  <ProgressIndicator step={step + 1} total={steps.length} />
                  <View className="flex flex-col items-start ml-6 gap-2">
                    <Text className="text-primary text-xl font-bold">
                      Registration
                    </Text>
                    <Text className="text-primary text-sm font-light">
                      Input your necessary details.
                    </Text>
                  </View>
                </View>
                {/* Form Fields */}
                <View style={{ overflow: "hidden", width }}>
                  <Animated.View
                    style={{
                      flexDirection: "row",
                      width: width * steps.length,
                      transform: [{ translateX }],
                    }}
                  >
                    {steps.map((fields, index) => (
                      <View
                        key={index}
                        className="w-full px-2"
                        style={{ width, paddingHorizontal: 8 }}
                      >
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
                    ))}
                  </Animated.View>
                </View>

                {/* Navigation Buttons */}
                <View className="gap-3 mt-5">
                  {step !== 0 && <ButtonOutlined title="Back" onClick={handleBack} />}
                  {step === steps.length - 1 ? (
                    <ButtonFilled title="Sign Up" onClick={handleSubmit} />
                  ) : (
                    <ButtonFilled title="Next" onClick={handleNext} />
                  )}
                </View>

                {/* Login Link */}
                <View className="flex-row gap-1 justify-center mt-4">
                  <Text className="text-[#787575]">Already have an account?</Text>
                  <Link href="/signIn" className="text-blue-500">Login Now</Link>
                </View>
              </View>
            </View>
          </View>

          <RegistrationModal visible={visible} onClick={handleModalCLick} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
