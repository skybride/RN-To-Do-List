/**
 * Unable to style Core Button Component?
 */
import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const InputComponent = () => {
    return (
        <View style={styles.inputContainer}> 
            <TextInput
                style={styles.input}
                placeholder="Add task..."/>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Add</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20
    },
    input: {
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 6,
        width: "70%"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "purple",
    },
    text: {
        color: "snow"
    }
});

export default InputComponent;