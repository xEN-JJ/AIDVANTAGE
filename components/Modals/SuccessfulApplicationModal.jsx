import { View, Text, Modal, Image } from "react-native";
import React from "react";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";
import { images } from "../../constants";
import ButtonFilled from "../ButtonFilled";
import { router } from "expo-router";

const SuccessfulApplicationModal = ({ visible, handleVisible }) => {
  const handleSuccessModal = () => {
    handleVisible(false);
    router.push("/");
  };
  return (
    <Modal className="items-center justify-center" visible={visible}>
      <CustomNavBar />
      <View className="items-center justify-center mt-10">
        <Image
          source={images.successfulApplication}
          resizeMode="contain"
          style={{ width: 120 }}
        />
      </View>
      <View className="items-center justify-center mt-3">
        <Text className="text-3xl text-primary">Application</Text>
        <Text className="text-3xl text-primary">Complete</Text>
      </View>

      <View className=" items-center justify-center mt-5">
        <Text className="text-lg text-blue-600 font-rlight text-center">
          We submitted your application. Please wait{"\n "} while we verify your
          application.
        </Text>
      </View>

      <View className="items-center mt-10">
        <View className="w-[20%]">
          <ButtonFilled title={"Go Back Home"} onClick={handleSuccessModal} />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessfulApplicationModal;
