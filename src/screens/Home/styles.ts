import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: "black",
    }
});