// ELEMENTOS
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// COMPONENTS
import { Tasks } from "../../components/Tasks";

// STYLES
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>TaskPilot</Text>
                <Text style={styles.subtitle}>bem-vindo ao TaskPilot, seu app de gerenciamento de tarefas</Text>
            </View>

            <View>
                <Text style={styles.contentTitle}>Minhas tarefas</Text>
                <Text style={styles.content}>aqui estão suas tarefas separadas por categorias</Text>
                <Tasks />
            </View>

            <Text style={styles.contentTitle}>Categorias</Text>
            
            <View>
                <Text style={styles.contentTitle}>Adicionar tarefa</Text>
                <Text style={styles.content}>Preencha os campos e adicione uma nova tarefa</Text>
                <TextInput 
                    style={styles.inputContent} 
                    placeholder="Digite o nome da tarefa"
                    placeholderTextColor={'white'} />
                <TextInput 
                    style={styles.inputContent} 
                    placeholder="Digite a descrição da tarefa"
                    placeholderTextColor={'white'} />
                <TextInput 
                    style={styles.inputContent}
                    placeholder="Digite a categoria da tarefa"
                    placeholderTextColor={'white'} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar tarefa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}