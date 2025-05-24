import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

export default function NavBarButton({ text = "Button", onPress, buttonClassName, textClassName }) {
  return (
    <TouchableOpacity
      style={tw`${buttonClassName || 'w-20 bg-blue-500 rounded-3xl h-9 justify-center items-center'}`}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={tw`${textClassName || 'text-white font-medium'}`}>{text}</Text>
    </TouchableOpacity>
  );
}