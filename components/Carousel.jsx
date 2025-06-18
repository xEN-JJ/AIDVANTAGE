import {
  View,
  Text,
  Animated,
  Dimensions,
  Button,
  StyleSheet,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import CarouselItem from "./CarouselItem";

const { width } = Dimensions.get("window");

const Carousel = ({ items, onItemSave }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <View style={stylesCarousel.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true, listener: handleScroll },
        )}
        scrollEventThrottle={16}
        style={stylesCarousel.scrollView}
        contentContainerStyle={{ width: items.length * width }}
      >
        {items.map((item, index) => (
          <View key={index} style={{ width }}>
            <CarouselItem
              label={item.label}
              defaultValue={item.defaultValue}
              onSave={(value) => onItemSave(index, value)}
            />
          </View>
        ))}
      </Animated.ScrollView>

      <View style={stylesCarousel.buttonContainer}>
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

const stylesCarousel = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
});

export default Carousel;
