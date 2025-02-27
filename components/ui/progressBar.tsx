import { status } from "@/src/redux/features/slice/tasksSlice";
import { View, StyleSheet } from "react-native";

interface ProgressInfo {
    color: string;
    progress: number;
  }

 const ProgressBar = ({ status} :{
  status: status;
}) => {

const statusStyles: Record<status, ProgressInfo> = {
        "Pendiente": { color: 'bg-yellow-500', progress: 5 },
        'En progreso': { color: 'bg-blue-500', progress: 50 },
        "Completada": { color: 'bg-green-500', progress: 100 },
        "Cancelada": { color: 'bg-red-500', progress: 100 },
      };

  return (
    <View style={[styles.container, { height:10 }]}> 
      <View
      className={`${statusStyles[status].color}`}
        style={[styles.progress, { width: `${statusStyles[status].progress}%`,height:10 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F5F7F8",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    borderRadius: 5,
  },
});

export default ProgressBar;