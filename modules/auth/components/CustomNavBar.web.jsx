import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ToggleButton from './ToggleButton.web';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomNavBar() {
  const router = useRouter();

  return (
    <View className="h-[5rem] bg-primary flex-row items-center">
        <View className="w-full flex-row items-center justify-around">
          <View className="flex-row items-center justify-center">
            <Image
              source={require('../../../assets/image/aidvantageLogo.svg')}
              style={{ width: 180, resizeMode: 'contain' }}
            />
          </View>

          <View className="flex-row items-center">
            <Pressable onPress={() => router.push('/services')}>
              <Text className="text-white text-base font-medium px-5 rounded-md">SERVICES</Text>
            </Pressable>
            <Pressable onPress={() => router.push('/news')}>
              <Text className="text-white text-base font-medium px-5 rounded-md">NEWS</Text>
            </Pressable>
            <Pressable onPress={() => router.push('/aboutus')}>
              <Text className="text-white text-base font-medium px-5 rounded-md">ABOUT US</Text>
            </Pressable>
            <View>
              <ToggleButton
                onToggle={(type) => {
                  if (type === 'login') router.push('/register');
                  else router.push('/signIn');
                }}
              />
            </View>
          </View>
        </View>
    </View>
  );
}