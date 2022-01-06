import React, { useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import InputComponent from './components/InputComponent';

export default function App() {
  // const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);

  // const inputTextHandler = userInput => {
  //   setWord(userInput);
  //   //console.log(userInput); 
  //   //this prints each input change 
  //   //will dusplay r, re, red

  // }

  const displayTextHandler = userInput => {
    setWordList(task => [...task, userInput]);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>To Do App</Text>
      </View>
      <InputComponent displayTextHandler={displayTextHandler}/>
      <View>
        {wordList.map((word, key) => <Text key={key}>{word}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginVertical: 50
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "70%",
    padding: 4,
    margin: 15
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
