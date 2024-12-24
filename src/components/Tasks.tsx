import { Text, View } from "react-native";

import { taskStyle } from "../screens/Home/styles";

export function Tasks() {
    return (
        <View style={taskStyle.tasksContainer}>
            <Text style={taskStyle.contentSubTitle}>Nome da tarefa</Text>
            <Text style={taskStyle.content}>Descrição da tarefa</Text>
            <Text style={taskStyle.content}>Categoria da tarefa</Text>            
        </View>
    ); 
}