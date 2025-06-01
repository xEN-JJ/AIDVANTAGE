import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import InformationBox from "../../components/MyApplicationPages/InformationBox";
import FilePreview from "../../components/MyApplicationPages/FilePreview";
import AntDesign from "@expo/vector-icons/AntDesign";

const ApproveApplication = ({}) => {
  const { title, status } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <ScrollView className="" showsVerticalScrollIndicator={false}>
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
          title={"Next Steps"}
          variant={"numbers"}
          items={[
            "Gather all the required documents.",
            "Go to the Mayor’s Office and request for a job order.",
            "Go to the CSWDO office and look for a Social Worker Officer.",
            "Present your application ID.",
            "Submit your requirements.",
            "Go for an Interview.",
          ]}
        />
      </View>

      <View className="flex flex-row gap-3 mx-7 my-3">
        <AntDesign name="filetext1" size={24} color="black" />
        <Text className="text-xl font-rbold">Submitted Documents</Text>
      </View>

      <View className="mx-7 mt-2 pb-12">
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

export default ApproveApplication;
