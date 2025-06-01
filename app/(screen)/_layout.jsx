import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="aboutus" options={{ headerShown: false }} />
      <Stack.Screen name="news" options={{ headerShown: false }} />
      <Stack.Screen name="services" options={{ headerShown: false }} />
    </Stack>
  );
}
