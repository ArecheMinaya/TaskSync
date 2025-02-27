import { router } from 'expo-router';
import { Lock, User2Icon, ChevronLeft } from 'lucide-react-native';
import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Switch } from "react-native";

export default function HomeScreen() {
    return (
       <SafeAreaView className='flex-1 bg-white'>
        <View className='flex-1 bg-white px-[20] justify-between' >
         <View className='flex-row justify-between items-center mt-5'>
          <View className='flex-row gap-x-2 items-center'>
              <ChevronLeft size={26} color={'#7F7C96'} strokeWidth={1.5} />
              <Text className='text-xl text-gray-500'>Back</Text>
          </View>
           <Text className='text-xl font-bold text-blue-600'>TaskStnc</Text>
         </View>
         <View>
            <Text className='text-2xl font-semibold'>Welcome Back!</Text>
            <Text className='text-gray-500 mt-4 w-64 text-md'>Log in your account & manage your tasks</Text>
         </View>
        <View>
        <View className='flex-row gap-x-2 border-b border-gray-200 py-2'>
          <User2Icon size={26} color={'#7F7C96'} strokeWidth={1.5}/>
          <TextInput placeholder='Email' className='w-full' />
         </View>
         <View className='flex-row gap-x-2 border-b border-gray-200 py-2 mt-10'>
          <Lock size={26} color={'#7F7C96'}  strokeWidth={1.5} />
          <TextInput placeholder='Password' className='w-full'  />
         </View>
         <View className='flex-row justify-between items-center mt-10'>
            <Text className=' color-green-500'>save password</Text>
            <Switch style={{
              transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }]
            }} value={true} onValueChange={() => {}} />
         </View>
        </View>
         <View className='mb-10'>
            <TouchableOpacity 
            onPress={() => {
               router.push('/home')
               
            }}
            className=' bg-blue-600 py-4 mt-10 rounded-2xl'>
                <Text className='text-white text-center text-lg font-semibold'>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity className=' border border-gray-200 py-4 mt-6 rounded-2xl'>
                <Text className=' text-blue-950 text-center text-lg font-semibold'>
                  Don't have an account? Sign up
                </Text>
            </TouchableOpacity>
         </View>
         <View/>
       </View>
       </SafeAreaView>
    );
  }
  
  