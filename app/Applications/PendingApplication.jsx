import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import InformationBox from "../../components/MyApplicationPages/InformationBox";
import FilePreview from "../../components/MyApplicationPages/FilePreview";
import AntDesign from "@expo/vector-icons/AntDesign";

const PendingApplication = ({}) => {
  const { title, status } = useLocalSearchParams();
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
          Status:{"  "}
          <Text className="font-rbold mx-3 text-blue-400">Pending</Text>
        </Text>
      </View>

      <View className="mx-7 my-3">
        <InformationBox
          title={"Verifying"}
          variant={"normal"}
          description={
            "Your Application is being validated by the staff. Please wait for our remarks for you to proceed to  the next steps."
          }
        />
      </View>

      <View className="flex flex-row gap-3 mx-7 my-3">
        <AntDesign name="filetext1" size={24} color="black" />
        <Text className="text-xl font-rbold">Submitted Documents</Text>
      </View>

      <View className="mx-7 mt-2">
        <FilePreview
          status={status}
          uri={
            "https://external-preview.redd.it/lana-del-rey-shares-artwork-from-upcoming-single-henry-come-v0-olfm3_9kKLAlzQd3HpNRFDH0ZmJhuuTP_Sh3EpvEN_Q.jpg?auto=webp&s=3b02835f0928e3c3ce1fd31594bdbaf321c0a935"
          }
        />
      </View>
    </ScrollView>
  );
};

export default PendingApplication;
