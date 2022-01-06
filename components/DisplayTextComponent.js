import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplayTextComponent = ({ text }) => {
    return (
        <View style={styles.listTasks}>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listTasks: {
        backgroundColor: "tomato",
        borderWidth: 1,
        marginHorizontal: 30,
        padding: 15,
        marginBottom: 20
    }
});

export default DisplayTextComponent;