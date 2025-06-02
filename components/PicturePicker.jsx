import React from 'react';
import { View, TouchableOpacity, Image, Alert, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfilePicturePicker = ({ profileImage, setProfileImage, editable }) => {
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission Required", "Permission to access camera roll is required!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage({ uri: result.assets[0].uri });
        }
    };

    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission Required", "Permission to access camera is required!");
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage({ uri: result.assets[0].uri });
        }
    };

    const showImageOptions = () => {
        Alert.alert(
            "Change Profile Picture",
            "Choose an option",
            [
                { text: "Camera", onPress: takePhoto },
                { text: "Gallery", onPress: pickImage },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    return (
        <View className="items-center mt-6">
            <TouchableOpacity onPress={editable ? showImageOptions : null}>
                <Image
                    source={profileImage}
                    className="w-40 h-40 rounded-full border-4 border-blue-500"
                    resizeMode="cover"
                />
                {editable && (
                    <View className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full">
                        <Text className="text-white text-xs font-bold">✎</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePicturePicker;
