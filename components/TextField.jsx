import { View, Text, TextInput, Animated } from "react-native";
import React, { useRef, useEffect, useState } from "react";

const TextField = ({
  title,
  fieldKey,
  secureTextEntry,
  isError,
  value,
  onChangeText,
}) => {
  const [internalValue, setInternalValue] = useState(value || "");

  const isControlled = value !== undefined && value !== null;
  const inputValue = isControlled ? value : internalValue;

  const transY = useRef(new Animated.Value(inputValue ? -30 : 0)).current;

  const handleFocus = () => {
    Animated.timing(transY, {
      toValue: -30,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    if (!inputValue) {
      Animated.timing(transY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    if (inputValue) {
      transY.setValue(-30);
    }
  }, [inputValue]);

  const transX = transY.interpolate({
    inputRange: [-30, 0],
    outputRange: [-10, 0],
    extrapolate: "clamp",
  });

  const handleChangeText = (text) => {
    if (isControlled) {
      onChangeText?.(text); // If controlled, call parent's handler
    } else {
      setInternalValue(text); // Otherwise, update local state
    }
  };

  return (
    <View className="rounded-md justify-center mb-3 w-full ">
      <Animated.View
        className="absolute justify-center px-3 bg-[#fefffe] z-40 ml-5 top-6"
        style={{
          transform: [{ translateY: transY }, { translateX: transX }],
        }}
      >
        <Text className={`text-[#787575] ${isError ? "text-red-500" : ""}`}>
          {title}
        </Text>
      </Animated.View>
      <TextInput
        className={`rounded-md text-[#787575] font-rregular h-[60px] w-full  px-5 ${
          isError
            ? "focus:border-red-500 border-red-500 border-2"
            : "focus:border-blue-500 focus:border-2 border border-[#787575]"
        }`}
        key={fieldKey}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChangeText={handleChangeText}
      />
      {isError && (
        <Text className="text-sm font-rregular text-red-500 px-3 mt-1">
          This is required.
        </Text>
      )}
    </View>
  );
};

export default TextField;
