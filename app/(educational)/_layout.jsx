import { Stack } from "expo-router";
import React from "react";

export default function EducationalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="educational-assistance"
        options={{
          title: "Educational Assistance",
        }}
      />
      <Stack.Screen
        name="ApplicationForm"
        options={{
          title: "Application Form",
        }}
      />
    </Stack>
  );
}
