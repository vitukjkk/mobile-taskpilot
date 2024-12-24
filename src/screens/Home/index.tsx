import { useState } from "react";

// ELEMENTOS
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

// COMPONENTS

// STYLES
import { styles } from "./styles";
import { taskStyle } from "./styles";

export function Home() {    

    const [tasks, setTasks] = useState([{
        name: 'Retirar lixo', 
        description: 'retirar lixo da cozinha', 
        category: 'Casa'}]);
    
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskCategory, setTaskCategory] = useState('');

    const handleTaskName = (text : string) => {
        setTaskName(text);
    }

    const handleTaskDescription = (text : string) => {
        setTaskDescription(text);
    }

    const handleTaskCategory = (text : string) => {
        setTaskCategory(text);
    }

    function handleTasksAdd() {
        console.log(taskName, taskDescription, taskCategory);
        setTasks([...tasks, {name: taskName, description: taskDescription, category: taskCategory}]);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>TaskPilot</Text>
                <Text style={styles.subtitle}>bem-vindo ao TaskPilot, seu app de gerenciamento de tarefas</Text>
            </View>

            <View>
                <Text style={styles.contentTitle}>Minhas tarefas</Text>
                <Text style={styles.content}>aqui estão suas tarefas separadas por categorias</Text>

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={taskStyle.tasksContainer}>
                            <Text style={taskStyle.contentSubTitle}>Nome da tarefa</Text>
                            <Text style={taskStyle.content}>{item.name}</Text>
                            <Text style={taskStyle.contentSubTitle}>Descrição da tarefa</Text>
                            <Text style={taskStyle.content}>{item.description}</Text>
                            <Text style={taskStyle.contentSubTitle}>Categoria da tarefa</Text>
                            <Text style={taskStyle.content}>{item.category}</Text>
                        </View>
                    )} 
                    ListEmptyComponent={
                        <Text style={styles.content}>Nenhuma tarefa encontrada</Text>
                    }
                />
            </View>

            <View>
                <Text style={styles.contentTitle}>Adicionar tarefa</Text>
                <Text style={styles.content}>Preencha os campos e adicione uma nova tarefa</Text>
                <TextInput 
                    style={styles.inputContent} 
                    placeholder="Digite o nome da tarefa"
                    placeholderTextColor={'white'}
                    onChangeText={handleTaskName} />
                <TextInput 
                    style={styles.inputContent} 
                    placeholder="Digite a descrição da tarefa"
                    placeholderTextColor={'white'}
                    onChangeText={handleTaskDescription} />
                <TextInput 
                    style={styles.inputContent}
                    placeholder="Digite a categoria da tarefa"
                    placeholderTextColor={'white'} 
                    onChangeText={handleTaskCategory}/>
                <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
                    <Text style={styles.buttonText}>Adicionar tarefa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}