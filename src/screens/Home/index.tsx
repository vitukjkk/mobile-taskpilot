import { View, Text } from "react-native";

import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Home</Text>
        </View>
    );
}