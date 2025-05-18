import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";

const CarouselItem = ({ label, defaultValue = "", onSave }) => {
  const [text, setText] = useState(defaultValue);

  useEffect(() => {
    setText(defaultValue);
  }, [defaultValue]);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleSave = () => {
    onSave(text);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder={`Enter ${label}...`}
        placeholderTextColor="#b0b0b0"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#222",
  },
});

export default CarouselItem;
