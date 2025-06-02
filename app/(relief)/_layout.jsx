import { Stack } from "expo-router";
import React from "react";

export default function MedicalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="relief-assistance"
        options={{
          title: "Relief Assistance",
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
