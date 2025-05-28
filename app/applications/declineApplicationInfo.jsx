import { View, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

import FilePreview from "../../components/FilePreview";
import InformationBox from "../../components/InformationBox";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const DeclineApplicationInfo = ({ natureOfAssistance }) => {
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (title) {
      navigation.setOptions({
        title: String(title),
      });
    }
  }, [navigation, title]);

  return (
    <View className="my-7 mx-7">
      <Text className="text-xl text-blue-500 font-rbold">
        Application Details
      </Text>

      <View>
        <Text className="">
          Nature of Assistance:
          <Text className="font-rbold">{natureOfAssistance}</Text>
        </Text>

        <Text className="">
          Date of Submission:
          <Text className="font-rbold">{natureOfAssistance}</Text>
        </Text>
        <Text className="">
          Status:
          <Text className="font-rbold">{natureOfAssistance}</Text>
        </Text>
      </View>

      <View className="my-3">
        <InformationBox />
      </View>

      <View className="my-3">
        <View className="flex flex-row gap-2 justifu-center">
          <FontAwesome name="file-text-o" size={24} color="black" />
          <Text className="font-rbold text-xl"> Submitted Documents</Text>
        </View>

        <View className="my-3">
          <FilePreview status={"declined"} />
        </View>
      </View>
    </View>
  );
};

export default DeclineApplicationInfo;
