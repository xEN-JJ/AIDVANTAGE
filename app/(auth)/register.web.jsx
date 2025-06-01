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

import { images } from "../../constants";
import TextField from "../../components/TextField";
import { Link } from "expo-router";
import ButtonFilled from "../../components/ButtonFilled";
import ButtonOutlined from "../../components/ButtonOutline";

import axios from "axios";

const Register = () => {
  const { width } = useWindowDimensions();

  const steps = [
    [
      { key: "firstName", placeholder: "First Name" },
      { key: "lastName", placeholder: "Last Name" },
      { key: "username", placeholder: "Username" },
      { key: "phone", placeholder: "Phone Number" },
    ],
    [
      { key: "email", placeholder: "Email" },
      { key: "password", placeholder: "Password", secure: true },
      { key: "confirmPassword", placeholder: "Confirm Password", secure: true },
      { key: "dob", placeholder: "Date of Birth" },
    ],
    [
      { key: "country", placeholder: "Country" },
      { key: "city", placeholder: "City" },
    ],
  ];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const translateX = useRef(new Animated.Value(0)).current;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/register", formData);
      if (response.status === 200 || response.status === 201) {
        // Handle success (e.g., navigate to login page or show success message)
        console.log("User registered successfully:", response.data);
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message,
      );
      // Handle error (e.g., show error message to user)
    }
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
    <SafeAreaView className="h-full mx-7">
      <View className="mt-[70px]">
        <Image
          source={images.logoBlue}
          resizeMode="contain"
          className="h-[15vh] w-full"
        />
        <Text className="text-center text-xl text-gray-700 font-rlight">
          Welcome to
        </Text>
      </View>

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

      <View className="gap-3">
        {step !== 0 && step !== steps.length - 1 && (
          <ButtonOutlined title="Back" onClick={handleBack} />
        )}
        {step === steps.length - 1 ? (
          <ButtonFilled title="Submit" onPress={() => console.log(formData)} />
        ) : (
          <ButtonFilled title="Next" onClick={handleNext} />
        )}
      </View>

      <View className="flex flex-row gap-1 justify-center items-end mt-3">
        <Text className="text-[#787575]">Already have an account?</Text>
        <Link href={"/sign-in"} className=" text-blue-500">
          Login
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Register;
