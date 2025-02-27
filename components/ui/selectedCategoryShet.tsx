import { BottomSheetView } from "@gorhom/bottom-sheet";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import CategoryIcon from "./categoryIcon";
import { Category } from "@/src/redux/features/slice/tasksSlice";

const SlectedCategorySheet = ({handleSelectedCategory}: {handleSelectedCategory: (category: Category) => void}) => {


    // Definición de categorías
    const categories = ['Trabajo', 'Personal', 'Hogar', 'Estudios', 'Compras', 'Salud', 'Deporte', 'Viajes', 'Otros'] as const;
        return(
        <BottomSheetView style={{flex: 1, paddingHorizontal: 20, alignContent: 'center',}}>
        <Text className='mb-4 font-semibold text-xl'>Categories</Text>
        <View className='flex-1'>
        <FlatList 
        data={categories}
        renderItem={({item, index}) => (
            <TouchableOpacity 
            onPress={() => {handleSelectedCategory(item)}}
            key={index} className=' flex-row justify-between items-center mb-5'>
                <Text>{item}</Text>
                <CategoryIcon category={item} size={30} />
            </TouchableOpacity>
        )}
        />
        
     </View>
     <View className='  h-24'/>
    </BottomSheetView>)
    }

export default SlectedCategorySheet