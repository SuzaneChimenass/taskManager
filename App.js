import { GestureHandlerRootView } from "react-native-gesture-handler";
import TaskList from "./src/screens/TaskList";

export default function App(){
  return(
    <GestureHandlerRootView style={styles.container}>
      <TaskList />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})