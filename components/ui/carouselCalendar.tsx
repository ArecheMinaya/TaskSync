import moment from "moment";
import React from "react";
import { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet} from "react-native";
import Swiper from "react-native-swiper";

const CarouselCalendar = ({handleFilteredTasksByDay} : { handleFilteredTasksByDay: ((date: Date) => void);}) => {
    const today = moment();
    const startOfYear = moment().startOf('year');
    const endOfYear = moment().endOf('year');
    
    const [week, setWeek] = useState(today.diff(startOfYear, 'weeks'));
    const [value, setValue] = useState(today.toDate());

    const handleDayPress = async (date: Date) => {
        setValue(date);
        handleFilteredTasksByDay(date);
      };

      /**
   * Create an array of weekdays ensuring it covers the full year.
   */
  const weeks = React.useMemo(() => {
    return Array.from({ length: moment(endOfYear).diff(startOfYear, 'weeks') + 1 }, (_, wIndex) => {
      const start = moment(startOfYear).add(wIndex, 'weeks').startOf('week');
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(index, 'days');
        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, []);

  /**
   * Create an array of days for yesterday, today, and tomorrow.
   */
  const days = React.useMemo(() => {
    return [
      moment(value).subtract(1, 'day').toDate(),
      value,
      moment(value).add(1, 'day').toDate(),
    ];
  }, [value]);
  return (
    <View className='h-[80] w-full'>
    <Swiper
       index={week}
       loop={false}
       showsPagination={false}
        
       onIndexChanged={ind => {
         const nextWeekStart = moment(startOfYear).add(ind, 'weeks').startOf('week');
         if (nextWeekStart.isBefore(startOfYear) || nextWeekStart.isAfter(endOfYear)) {
           return;
         }
         setWeek(ind);
       }}>
       {weeks.map((dates, index) => (
         <View style={styles.itemRow} key={index}>
           {dates.map((item, dateIndex) => {
             const isActive = value.toDateString() === item.date.toDateString();
             return (
               <TouchableWithoutFeedback key={dateIndex} onPress={() => handleDayPress(item.date)}>
                 <View className='text-xs flex-col gap-y-4 items-center'>
                   <Text className='text-gray-500' >{item.weekday}</Text>
                   {
                     isActive ? (
                         <View className=' bg-blue-600 rounded-full w-9 h-9 flex-col items-center justify-center'>
                           <Text className='text-xl text-white' >{item.date.getDate()}</Text>
                         </View>
                     ) : (
                       <Text className='text-xl' >{item.date.getDate()}</Text>
                     )
                   }
                 </View>
               </TouchableWithoutFeedback>
             );
           })}
         </View>
       ))}
     </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default CarouselCalendar