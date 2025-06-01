import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const statusColor = {
  approved: "bg-[#72CD95]",
  declined: "bg-[#C32131]",
  pending: "bg-[#E5F1FF]",
};

const icons = {
  approved: <AntDesign name="checkcircle" size={24} color="black" />,
  declined: <MaterialIcons name="error" size={28} color="black" />,
};

const FilePreview = ({ status, uri }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Pressable
      className={`${statusColor[status]} w-full rounded-xl p-4`}
      onPress={handleVisible}
    >
      <View className="flex-row gap-3 items-center">
        {status !== "pendig" && (
          <View
            className={`${status === "pending" ? "bg-transparent" : "bg-white"} w-[28] h-[28] rounded-full items-center justify-center`}
          >
            {icons && icons[status]}
          </View>
        )}
        <Text
          className={`font-rbold ${status === "pending" ? "text-black" : "text-white"}`}
        >
          Hospital Bill
        </Text>
      </View>

      <View className="justify-center items-center bg-blue-50 mt-2 rounded-lg">
        <Image
          source={{ uri }}
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        />
      </View>

      <Modal
        visible={visible}
        className=""
        animationType="fade"
        transparent={true}
        onRequestClose={handleClose}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.7)", // translucent black
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleClose}
        >
          <View>
            <Image
              source={{ uri }}
              style={{ height: 350, width: 400, resizeMode: "contain" }}
            />
          </View>
        </Pressable>
      </Modal>
    </Pressable>
  );
};

export default FilePreview;
