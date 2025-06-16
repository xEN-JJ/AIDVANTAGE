import { View, Text, Platform } from "react-native";
import * as Progress from "react-native-progress";

const ProgressIndicator = ({ step, total }) => {
  const isWeb = Platform.OS === 'web';
  const progress = step / total;

  return (
    <View className="items-center justify-center">
      {isWeb ? (
        <View className="relative">
          <Progress.Circle
            progress={progress}
            size={85}
            color="#0C3278"
            unfilledColor="#e5e7eb"
            borderWidth={0}
            thickness={6}
            showsText={false} // We will overlay custom text
          />
          <Text className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-gray-800 font-medium">
            {`${step}/${total}`}
          </Text>
        </View>
      ) : (
        <Progress.Bar
          progress={progress}
          width={200}
          color="#0C3278"
          unfilledColor="#D9D9D9"
          borderWidth={0}
          height={10}
        />
      )}
    </View>
  );
};

export default ProgressIndicator;