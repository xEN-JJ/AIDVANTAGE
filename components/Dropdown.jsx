import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dropdown = ({
  pickerTitle,
  options = [],
  selectedValue,
  onValueChange,
  prompt,
}) => {
  return (
    <View className="w-full my-3">
      {pickerTitle && (
        <Text className="mb-2 ml-1 font-medium text-base">{pickerTitle}</Text>
      )}
      <View className="border h-[60px] border-gray-500 rounded-lg ">
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          mode={"dropdown"}
          prompt={prompt}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Dropdown;
