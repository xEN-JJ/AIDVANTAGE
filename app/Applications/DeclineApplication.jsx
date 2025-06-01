import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import InformationBox from "../../components/MyApplicationPages/InformationBox";
import FilePreview from "../../components/MyApplicationPages/FilePreview";
import AntDesign from "@expo/vector-icons/AntDesign";

const DeclineApplication = () => {
  const { status, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <ScrollView className="">
      <View className="mx-7">
        <Text className="my-5 text-xl text-blue-500 font-rbold">
          Application Details
        </Text>
        <Text className="">
          Nature of Assistance:{"  "}
          <Text className="font-rbold mx-3">Medical Assistance</Text>
        </Text>

        <Text className="">
          Date of Submission:{"  "}
          <Text className="font-rbold mx-3">Medical Assistance</Text>
        </Text>

        <Text className="">
          Date Approved:{"  "}
          <Text className="font-rbold mx-3">Medical Assistance</Text>
        </Text>

        <Text className="">
          Status:{"  "}
          <Text className="font-rbold mx-3 text-green-500">Approved</Text>
        </Text>
      </View>

      <View className="mx-7 my-3">
        <InformationBox
          title={"Remarks"}
          variant={"normal"}
          description={
            "You submitted the wrong document (Barangay Certification). Please resubmit the required document/s to verify to proceed to next step."
          }
        />
      </View>

      <View className="flex flex-row gap-3 mx-7 my-3">
        <AntDesign name="filetext1" size={24} color="black" />
        <Text className="text-xl font-rbold">Submitted Documents</Text>
      </View>

      <View className="mx-7 mt-2">
        <FilePreview status={status} />
      </View>
    </ScrollView>
  );
};

export default DeclineApplication;
