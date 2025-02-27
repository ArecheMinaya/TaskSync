// src/screens/WelcomeScreen.tsx

import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido a TaskStnc!</Text>
      <Text className="text-lg text-gray-600 mb-8 text-center px-4">
        Organiza tus tareas de manera eficiente y alcanza tus objetivos con TaskStnc.
      </Text>
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-full"
        onPress={() =>{
         router.push('/sign-in')
        }}
      >
        <Text className="text-white text-lg">Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
