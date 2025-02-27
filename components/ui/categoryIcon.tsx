// components/CategoryIcon.tsx
import { Category } from '@/src/redux/features/slice/tasksSlice';
import React from 'react';
import { Text, View } from 'react-native';


interface CategoryData {
  color: string;
  emoji: string;
}

const categoryData: Record<Category, CategoryData> = {
  Trabajo: { color: 'bg-blue-200', emoji: '💼' },
  Personal: { color: ' bg-blue-200', emoji: '👤' },
  Hogar: { color: 'bg-yellow-200', emoji: '🏠' },
  Estudios: { color: 'bg-green-200', emoji: '📚' },
  Compras: { color: 'bg-purple-200', emoji: '🛒' },
  Salud: { color: 'bg-pink-200', emoji: '❤️' },
  Deporte: { color: 'bg-orange-200', emoji: '⚽️' },
  Viajes: { color: 'bg-teal-200', emoji: '✈️' },
  Otros: { color: 'bg-red-200', emoji: '❓' },
};

interface CategoryIconProps {
  category: Category;
  size?: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category, size =40 }) => {
  const { color, emoji } = categoryData[category];

  return (
    <View 
    style={{ width: size, height: size }}
    className={` ${color} rounded-full justify-center items-center`}>
      <Text style={{ fontSize: size / 2 }}>{emoji}</Text>
    </View>
  );
};

export default CategoryIcon;
