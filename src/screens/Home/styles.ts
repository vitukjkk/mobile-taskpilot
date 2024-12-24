import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const baseStyle = StyleSheet.create({
    
    mainTextColor: {
        color: "white",
    },

    mainContrastTextColor: {
        color: "#c3c3c3",
    },

    backgroundInput: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "black",
    }
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight(),
        
        backgroundColor: "black",

    },
    title: {
        ...baseStyle.mainTextColor,
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle: {
        ...baseStyle.mainTextColor,
        fontSize: 16,
        textAlign: "center",
    },
    contentTitle: {
        ...baseStyle.mainTextColor,
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 20,
    },
    contentSubTitle: {
        ...baseStyle.mainTextColor,
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
    },
    content: {
        ...baseStyle.mainContrastTextColor,
        fontSize: 16,
    },
    inputContent: {
        ...baseStyle.backgroundInput,
        ...baseStyle.mainTextColor,
        width: "100%",
        fontSize: 16,
        padding: 10,
        marginVertical: 10,
    },

    button: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        ...baseStyle.mainTextColor,
        fontSize: 16,
    },
});

export const taskStyle = StyleSheet.create({
    tasksContainer: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "#333",
    },
    contentSubTitle: {
        ...baseStyle.mainTextColor,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
    content: {
        ...baseStyle.mainTextColor,
        fontSize: 16,
        textAlign: "center",

    },
});