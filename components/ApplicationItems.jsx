import { View, Text, Pressable } from "react-native";
import React from "react";

const ApplicationItems = ({ assistance, dateOfApplication, status }) => {
  const statusClasses = {
    pending: {
      border: "border-[#0F71F1]",
      background: "bg-[#0F71F1]/10",
      badge: "bg-[#0F71F1]",
    },
    declined: {
      border: "border-[#FF565A]",
      background: "bg-[#FF565A]/10",
      badge: "bg-[#FF565A]",
    },
    approved: {
      border: "border-[#1AAA55]",
      background: "bg-[#1AAA55]/10",
      badge: "bg-[#1AAA55]",
    },
  };

  return (
    <Pressable
      className={`h-[70px] mt-5 rounded-2xl px-4 justify-between items-center flex flex-row border 
    ${statusClasses[status].border} ${statusClasses[status].background}`}
    >
      <View className="">
        <Text className="font-rbold text-gray-700 text-lg ">{assistance}</Text>
        <Text className="font-rlight text-base text-gray-600">
          {dateOfApplication}
        </Text>
      </View>
      <View>
        <Text
          className={`px-2 py-1 text-sm font-rbold text-white rounded-full 
        ${statusClasses[status].badge}`}
        >
          {status}
        </Text>
      </View>
    </Pressable>
  );
};

export default ApplicationItems;
