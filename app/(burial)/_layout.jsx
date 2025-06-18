import { Stack } from "expo-router";
import React from "react";

export default function BurialLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="burial-assistance"
        options={{
          title: "Burial Assistance",
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
