import { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";

const TextField = ({
  title,
  fieldKey,
  secureTextEntry,
  value,
  onChangeText,
  rules = [],
  debounceTime = 500,
}) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [errors, setErrors] = useState([]);

  const isControlled = value !== undefined && value !== null;
  const inputValue = isControlled ? value : internalValue;

  const handleChangeText = (text) => {
    if (isControlled) {
      onChangeText?.(text);
    } else {
      setInternalValue(text);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const validationErrors = rules
        .map((ruleFn) => ruleFn(inputValue))
        .filter((msg) => msg);
      setErrors(validationErrors);
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const isError = errors.length > 0;

  return (
    <View className="mb-4 w-full">
      <Text className="mb-1 ml-1 text-sm text-[#787575] font-medium">
        {title}
      </Text>
      <TextInput
        className={`w-full px-4 py-3 rounded-lg border text-[#333] bg-white ${
          isError
            ? "border-red-500"
            : "border-[#ccc] focus:border-blue-500 focus:border-2"
        }`}
        secureTextEntry={secureTextEntry}
        key={fieldKey}
        value={inputValue}
        onChangeText={handleChangeText}
      />
      {isError &&
        errors.map((msg, idx) => (
          <Text
            key={idx}
            className="text-sm font-regular text-red-500 mt-1 px-1"
          >
            {msg}
          </Text>
        ))}
    </View>
  );
};

export default TextField;
