import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from "../../components/TextField";
import { icons } from "../../constants";
import ButtonFilled from "../../components/ButtonFilled";
import { Link, router } from "expo-router";
import ApplicationItems from "../../components/ApplicationItems";

const MyApplications = () => {
  const applications = [
    {
      applicationId: 1,
      typeOfAssistance: "Medical Assistance",
      dateOfApplication: "02/18/2004",
      status: "pending",
    },
    {
      applicationId: 1,
      typeOfAssistance: "Medical Assistance",
      dateOfApplication: "02/18/2004",
      status: "declined",
    },
    {
      applicationId: 1,
      typeOfAssistance: "Medical Assistance",
      dateOfApplication: "02/18/2004",
      status: "approved",
    },
  ];

  const statusLink = {
    approved: "Applications/ApproveApplication",
    declined: "Applications/DeclineApplication",
    pending: "Applications/PendingApplication",
  };

  return (
    <SafeAreaView className="mx-5">
      <View className="mt-10">
        <TextField title="Search" />
        {icons["tune"]}
      </View>
      <View>
        <ButtonFilled
          title={"Apply"}
          onClick={() => router.push("/ApplicationForm")}
          prefixIcon={"pluscircle"}
        />
      </View>

      <View>
        <FlatList
          data={applications}
          renderItem={({ item }) => (
            <ApplicationItems
              assistance={item.typeOfAssistance}
              dateOfApplication={item.dateOfApplication}
              status={item.status}
              onClick={() =>
                router.push({
                  pathname: statusLink[item.status],
                  params: {
                    title: item.typeOfAssistance,
                    status: item.status,
                  },
                })
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyApplications;
