import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, Animated } from "react-native";

const TextField = ({
  title,
  fieldKey,
  secureTextEntry,
  value,
  onChangeText,
  rules = [], // array of functions returning error messages or null
  debounceTime = 500,
}) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [errors, setErrors] = useState([]);

  const isControlled = value !== undefined && value !== null;
  const inputValue = isControlled ? value : internalValue;

  const transY = useRef(new Animated.Value(inputValue ? -30 : 0)).current;
  const debounceTimer = useRef(null);

  // Floating label animation
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

  const handleChangeText = (text) => {
    if (isControlled) {
      onChangeText?.(text);
    } else {
      setInternalValue(text);
    }
  };

  useEffect(() => {
    if (debounceTimer.current) global.clearTimeout(debounceTimer.current);

    debounceTimer.current = global.setTimeout(() => {
      const validationErrors = rules
        .map((ruleFn) => ruleFn(inputValue))
        .filter((msg) => msg);
      setErrors(validationErrors);
    }, debounceTime);

    return () => {
      if (debounceTimer.current) global.clearTimeout(debounceTimer.current);
    };
  }, [inputValue]);

  useEffect(() => {
    if (inputValue) transY.setValue(-30);
  }, [inputValue]);

  const transX = transY.interpolate({
    inputRange: [-30, 0],
    outputRange: [-10, 0],
    extrapolate: "clamp",
  });

  const isError = errors.length > 0;

  return (
    <View className="rounded-md justify-center mb-3 w-full">
      <Animated.View
        className="absolute justify-center px-3 bg-white z-40 ml-5 top-6"
        style={{
          transform: [{ translateY: transY }, { translateX: transX }],
        }}
      >
        <Text className={`text-[#787575] ${isError ? "text-red-500" : ""}`}>
          {title}
        </Text>
      </Animated.View>

      <TextInput
        className={`rounded-md text-[#787575] font-rregular h-[60px] px-5 ${
          isError
            ? "border-red-500 border-2"
            : "border border-[#787575] focus:border-blue-500 focus:border-2"
        }`}
        key={fieldKey}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChangeText={handleChangeText}
      />

      {isError &&
        errors.map((msg, idx) => (
          <Text
            key={idx}
            className="text-sm font-rregular text-red-500 px-3 mt-1"
          >
            {msg}
          </Text>
        ))}
    </View>
  );
};

export default TextField;
