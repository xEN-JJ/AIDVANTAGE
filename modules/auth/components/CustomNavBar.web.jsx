import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ToggleButton from './ToggleButton.web';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomNavBar() {
  const router = useRouter();

  return (
    <View className="h-[4rem] bg-primary shadow-lg">
      <View className="max-w-7xl mx-auto w-full h-full flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <Pressable 
          onPress={() => router.push('/')}
          className="flex-row items-center"
        >
          <Image
            source={require('../../../assets/image/aidvantageLogo.svg')}
            style={{ width: 160, height: 40, resizeMode: 'contain' }}
          />
        </Pressable>

        {/* Navigation Links */}
        <View className="flex-row items-center space-x-8">
          <Pressable 
            onPress={() => router.push('/services')}
            className="px-4 py-2 hover:bg-blue-700 rounded-md transition-colors"
          >
            <Text className="text-white text-sm font-semibold tracking-wide uppercase">
              SERVICES
            </Text>
          </Pressable>
          
          <Pressable 
            onPress={() => router.push('/news')}
            className="px-4 py-2 hover:bg-blue-700 rounded-md transition-colors"
          >
            <Text className="text-white text-sm font-semibold tracking-wide uppercase">
              NEWS
            </Text>
          </Pressable>
          
          <Pressable 
            onPress={() => router.push('/aboutus')}
            className="px-4 py-2 hover:bg-blue-700 rounded-md transition-colors"
          >
            <Text className="text-white text-sm font-semibold tracking-wide uppercase">
              ABOUT US
            </Text>
          </Pressable>

          {/* Auth Buttons */}
          <View className="flex-row items-center ml-4">
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