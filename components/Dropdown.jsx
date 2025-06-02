import { View, Text } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const Dropdown = (pickerTitle) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <View className="border border-[#787575] rounded-lg w-full">
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        {/* map out the picker */}
      </Picker>
    </View>
  );
};

export default Dropdown;
