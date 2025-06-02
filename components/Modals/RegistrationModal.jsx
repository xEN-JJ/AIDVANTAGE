import { View, Text, Modal, Image, Pressable } from "react-native";
import React from "react";
import { images } from "../../constants";

const RegistrationModal = ({ visible, onClick }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      className="items-center justify-center"
      navigationBarTranslucent={true}
    >
      <Pressable className="h-full w-full" onPress={onClick}>
        <View className="items-center justify-center h-full w-full mb-10">
          <View className="items-center justify-center">
            <Text className="text-primary text-5xl font-rmedium">Welcome </Text>
            <Text className="text-primary text-xl font-rmedium">to</Text>
            <Image
              source={images.logoBlue}
              resizeMode="contain"
              style={{ width: 500, height: 150 }}
            />
          </View>
          <View className="mt-10 items-center justify-center">
            <Text>Tap Anywhere to Continue</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default RegistrationModal;
