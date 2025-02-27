import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarRange } from "lucide-react-native";

const DatePickerModal = ({value, handleDateChange} : { value: string, handleDateChange: (date: string) => void }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(value);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate : Date) => {
    const currentDate = selectedDate || new Date();
    hideDatePicker();
    setDate(format(currentDate, 'dd/MM/yyyy', { locale: es }));
    handleDateChange(format(selectedDate, 'dd/MM/yyyy', { locale: es }));
  };

  return (
    <TouchableOpacity  
    onPress={showDatePicker}
    className='w-full border px-4 h-14 rounded-2xl border-gray-300 mt-4 mb-4 flex-row justify-between items-center'>
      <TextInput
        value={date}
        placeholder="--/--/----"
        readOnly={true}
        defaultValue={date}
      />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        minimumDate={new Date()}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="es-ES" // Configura el idioma español
        confirmTextIOS="Confirmar" // Texto del botón de confirmación en iOS
        cancelTextIOS="Cancelar" // Texto del botón de cancelación en iOS
      />
      <CalendarRange  />
    </TouchableOpacity>
  );
};

export default DatePickerModal;