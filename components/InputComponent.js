/**
 * Unable to style Core Button Component?
 */
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Pressable } from "react-native";

const InputComponent = ({ displayTextHandler }) => {
    const [word, setWord] = useState("");

    const inputTextHandler = userInput => {
        setWord(userInput);
    }

    const pressHandled = () => {
        displayTextHandler(word);
    }
    
    return (
        <View style={styles.inputContainer}> 
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="..."
                onChangeText={inputTextHandler}
                value={word}/>
                <Pressable style={styles.button} onPress={pressHandled}>
                    <Text style={styles.text}>Add</Text>
                </Pressable>
            </View>
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