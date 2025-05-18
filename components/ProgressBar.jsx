import { View } from "react-native";

import * as Progress from "react-native-progress";
import { Colors } from "../constants/Colors";

const ProgressBar = ({ progress }) => {
  return (
    <View className="w-[65%]">
      <Progress.Bar
        progress={progress}
        width={null}
        color="#0C3278"
        unfilledColor="#D9D9D9"
        borderWidth={0}
        height={10}
      />
    </View>
  );
};

export default ProgressBar;
