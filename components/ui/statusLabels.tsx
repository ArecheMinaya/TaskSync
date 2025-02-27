import {  status } from '@/src/redux/features/slice/tasksSlice';
import React from 'react';
import { Text, View } from 'react-native';


interface StatusData {
    baseStyle: string;
    activeStyle: string;
}

const statusData: Record<status, StatusData> = {
  Pendiente: { baseStyle: 'border border-yellow-500 text-yellow-500 rounded-full justify-center items-center p-3', activeStyle: ' border border-yellow-500 bg-yellow-500 text-white font-semibold rounded-full justify-center items-center p-3' },
  'En progreso': { baseStyle: ' border border-blue-500 text-blue-500 rounded-full justify-center items-center p-3', activeStyle: ' border border-blue-500 text-white font-semibold rounded-full justify-center items-center p-3 bg-blue-500' },
  Completada: { baseStyle: ' border border-green-500 text-green-500 rounded-full justify-center items-center p-3', activeStyle: ' border border-green-500 text-white font-semibold rounded-full justify-center items-center p-3 bg-green-500' },
  Cancelada: { baseStyle: ' border border-red-500 text-red-500 rounded-full justify-center items-center p-3', activeStyle: ' border border-red-500 text-white font-semibold rounded-full justify-center items-center p-3 bg-red-500' },
};

interface StatusLabelProps {
  status: status;
  isSelected?: boolean;
}

const StatusLabel: React.FC<StatusLabelProps> = ({ status, isSelected = false }) => {
  const { baseStyle, activeStyle } = statusData[status];

  return (
    <View>
      <Text className={`${isSelected ? activeStyle : baseStyle}`}>{status}</Text>
    </View>
  );
};

export default StatusLabel;
