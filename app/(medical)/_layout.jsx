import { Stack } from "expo-router";
import React from "react";

export default function MedicalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="medical-assistance"
        options={{
          title: "Medical Assistance",
        }}
      />
      <Stack.Screen
        name="application-form"
        options={{
          title: "Application Form",
        }}
      />
    </Stack>
  );
}
