import { TouchableOpacity, Text } from "react-native"
import CategoryIcon from "./categoryIcon"
import { Category } from "@/src/redux/features/slice/tasksSlice"

const SelectedCategory = ({category, handleCategoryPress} : {category: Category | null , handleCategoryPress: () => void}) => {
    return (
      <TouchableOpacity 
      onPress={handleCategoryPress}
      className='w-full border px-4 h-14 rounded-2xl border-gray-300 mb-4 flex-row justify-between items-center'>
          <Text>{category || "Selected Category"}</Text>
          <CategoryIcon category={category || "Otros"} size={30} /> 
      </TouchableOpacity>
    )
  }

  export default SelectedCategory