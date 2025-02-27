import { Link } from 'expo-router';

import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Switch } from "react-native";

export default function HomeScreen() {
  return (
     <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 justify-center align-center content-center w-full' >
         <Link href="/sign-in" className='text-lg font-semibold text-blue-600'>Sign in</Link>
     </View>
     </SafeAreaView>
  );
}

