import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CustomNavBar from "../../modules/auth/components/CustomNavBar.web";
import { images } from "../../constants";
import ButtonOutlined from "../../components/ButtonOutline";

const AboutUs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="items-center">
      <CustomNavBar />
      <View className="w-full bg-[#253D6A]">
        <View className="items-end">
          <Image source={images.AboutUs} resizeMode="cover" />
        </View>
        <View className="absolute w-[40%] top-[18%] left-[5%]">
          <Text className="text-white text-5xl font-rblack mb-10">
            About Us
          </Text>

          <Text className="text-white text-4xl font-rlight my-10">
            <Text className=" text-5xl font-rbold">"</Text>
            Empowering Communities Through Compassion and Support
            <Text className="text-white text-5xl font-rbold">"</Text>
          </Text>

          <View className="mt-10 w-[30%]">
            <ButtonOutlined
              title={"Discover our Story"}
              textColor={"white"}
              borderColor={"white"}
            />
          </View>
        </View>
      </View>
      <View className="items-center justify-center mt-10">
        <View className="items-center justify-center w-[70%]">
          <Text className="text-primary text-5xl font-rblack">Mission</Text>
          <Text className="text-primary text-3xl font-rlight my-10 text-center">
            <Text className=" text-5xl font-rbold px-5">"</Text>
            Implementation of programs, projects, and services that will
            alleviate poverty and empower disadvantaged individuals, families,
            and communities to improve their quality of life.
            <Text className="text-primary text-5xl font-rbold px-5">"</Text>
          </Text>
        </View>

        <View className="items-center justify-center mt-10 w-[70%]">
          <Text className="text-primary text-5xl font-rblack">Vision</Text>
          <Text className="text-primary text-3xl font-rlight my-10 text-center">
            <Text className=" text-5xl font-rbold px-5">"</Text>
            Naga as an inclusive city where everyone can participate in and
            benefit from the opportunities it offers.
            <Text className="text-primary text-5xl font-rbold px-5">"</Text>
          </Text>
        </View>
      </View>

      <View className="bg-[#cfe7fb] items-center justify-center mt-10 mx-">
        <Text className="text-primary text-5xl font-rblack mt-10">
          CORE VALUES
        </Text>

        <View className="w-[50%] my-10 mb-10">
          <View className="flex-row flex-wrap justify-center items-center ">
            {[
              { name: "Innovativeness", image: images.innovativenessIcon },
              { name: "Discipline", image: images.disciplineIcon },
              { name: "Excellence", image: images.excellenceIcon },
              { name: "Religiosity", image: images.religiosityIcon },
              { name: "Resilience", image: images.resiliencelIcon },
              { name: "Civic involvement", image: images.civicInvolvementIcon },
              { name: "Open-mindedness", image: images.openMindenessIcon },
              { name: "Family-oriented", image: images.familyOrientedIcon },
            ].map((field, index) => (
              <View
                key={index}
                className={`flex-row items-center space-x-5 w-1/2 mb-5 px-4 mt-5 ${index % 2 === 0 ? "pl-10" : ""}`}
              >
                <Image
                  source={field.image}
                  resizeMode="contain"
                  className={``}
                />
                <Text className="text-[#004AAD] font-rblack text-2xl uppercase mx-3">
                  {field.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className=" mb-1 items-center">
        <Text className="uppercase mx-5 text-primary font-rblack text-5xl my-5 text-left">
          city social welfare development office
        </Text>

        <View className="flex flex-row justify-center items-center mx-8 mt-10 w-[90%]">
          <View className="text-center items-center justify-center mb-10 w-[50%]">
            <View
              style={{
                width: 300,
                height: 300,
                borderRadius: 300,
                overflow: "hidden",
              }}
            >
              <Image
                source={images.cswdoHead}
                resizeMode="cover"
                style={{
                  width: 300,
                  height: 350, // make image taller than container
                  top: -5, // shift it upward to focus on top
                  position: "absolute",
                }}
              />
            </View>
            <Text className="text-primary text-3xl font-rsemibold mt-10">
              Mrs. Annabel SJ. Vargas
            </Text>
            <Text className="mt-1 text-xl font-rmedium">CGDH I</Text>
          </View>
          <View className="w-[40%] justify-center ">
            <Text className="text-2xl font-rsemibold">Address:</Text>
            <Text className="text-xl ">
              City Social Welfare Development Office G/F Social Development
              Center, Naga City Hall Complex, Juan Q. Miranda Ave., Concepcion
              Pequeña, Naga City
            </Text>

            <Text className="text-2xl font-rsemibold mt-10">Contacts: </Text>
            <Text className="text-xl ">
              PLDT: +63-54-871-2050 {" \n"}GLOBE: +63-54-205-2980 {" \n"}
              Local: 3040 {" \n"}Email: cswdo@naga.gov.ph
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUs;
