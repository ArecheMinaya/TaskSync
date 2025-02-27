import { useAppDispatch } from '@/src/hocks/useAppDispatch';
import { signInUser, signUpUser } from '@/src/redux/features/slice/authSlice';
import { Link, router } from 'expo-router';
import { Lock, User2Icon, ChevronLeft } from 'lucide-react-native';
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, Text, TextInput } from "react-native";

export default function HomeScreen() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
const dispatch = useAppDispatch();
   const handleSignIn = async () => {
      dispatch(  signInUser({ email, password })); 
    };
  
    const handleSignUp = async () => {
      dispatch(signUpUser({ email, password }));
    };
    return (
       <SafeAreaView className='flex-1 bg-white'>
        <View className='flex-1 bg-white px-[20] justify-between' >
         <View className='flex-row justify-between items-center mt-5'>
         <Link href={'/'}>
         <View className='flex-row gap-x-2 items-center'>
              <ChevronLeft size={26} color={'#7F7C96'} strokeWidth={1.5} />
               <Text className='text-xl text-gray-500'>Ir atrás</Text>            
          </View>
         </Link>
      
           <Text className='text-xl font-bold text-blue-600'>TaskStnc</Text>
         </View>
         <View>
            <Text className='text-2xl font-semibold'>Bienvenido</Text>
            <Text className='text-gray-500 mt-4 w-64 text-md'>Inicie sesión en su cuenta y administre sus tareas</Text>
         </View>
        <View>
        <View className='flex-row gap-x-2 border-b border-gray-200 py-2'>
          <User2Icon size={26} color={'#7F7C96'} strokeWidth={1.5}/>
          <TextInput 
          onChange={(e) => setEmail(e.nativeEvent.text)}
          placeholder='Email' className='w-full'  />
         </View>
         <View className='flex-row gap-x-2 border-b border-gray-200 py-2 mt-10'>
          <Lock size={26} color={'#7F7C96'}  strokeWidth={1.5} />
          <TextInput 
          onChange={(e) => setPassword(e.nativeEvent.text)}
          placeholder='Contraseña' className='w-full'
          secureTextEntry
          />
         </View>
        </View>
         <View className='mb-10'>
            <TouchableOpacity 
            onPress={() => {
               handleSignIn();
               
            }}
            className=' bg-blue-600 py-4 mt-10 rounded-2xl'>
                <Text className='text-white text-center text-lg font-semibold'>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
               handleSignUp();
            }}
            className=' border border-gray-200 py-4 mt-6 rounded-2xl'>
                <Text className=' text-blue-950 text-center text-lg font-semibold'>
                  Registrarme 
                </Text>
            </TouchableOpacity>
         </View>
         <View/>
       </View>
       </SafeAreaView>
    );
  }
  