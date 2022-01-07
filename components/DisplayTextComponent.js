import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DisplayTextComponent = ({ text, onPressDelete }) => {
    return (
        <TouchableOpacity onPress={onPressDelete}>
            <View style={styles.listTasks}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
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