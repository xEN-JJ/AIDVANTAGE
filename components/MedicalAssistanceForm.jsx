import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

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

const MedicalAssistanceForm = ({ items, onItemSave }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = items.map(() => null);
  }, [items]);

  const handleScroll = useCallback(
    (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      scrollX.setValue(offsetX);
      const newIndex = Math.round(offsetX / width);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    },
    [currentIndex, scrollX],
  );

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, items.length - 1);

    Animated.timing(scrollX, {
      toValue: nextIndex * width,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCurrentIndex(nextIndex);
  };

  const handleBack = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    Animated.timing(scrollX, {
      toValue: prevIndex * width,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCurrentIndex(prevIndex);
  };

  const handleItemSave = (index, value) => {
    onItemSave?.(index, value);
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true, listener: handleScroll },
        )}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={{ width: items.length * width }}
      >
        {items.map((item, index) => (
          <View key={index} style={{ width }}>
            <CarouselItem
              label={item.label}
              defaultValue={item.defaultValue}
              onSave={(value) => handleItemSave(index, value)}
            />
          </View>
        ))}
      </Animated.ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={handleBack}
          disabled={currentIndex === 0}
        />
        <Button
          title="Next"
          onPress={handleNext}
          disabled={currentIndex === items.length - 1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    flex: 1,
  },
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
});

export default MedicalAssistanceForm;
