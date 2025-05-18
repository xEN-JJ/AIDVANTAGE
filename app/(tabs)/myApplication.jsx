import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from "../../components/TextField";
import { icons } from "../../constants";
import ButtonFilled from "../../components/ButtonFilled";
import { router } from "expo-router";
import ApplicationForm from "../(medical)/application-form";
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

  return (
    <SafeAreaView className="mx-5">
      <ScrollView>
        <View className="mt-10">
          <TextField title="Search" />
          {icons["tune"]}
        </View>
        <View>
          <ButtonFilled
            title={"Apply"}
            onClick={() => router.push("/application-form")}
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
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyApplications;
