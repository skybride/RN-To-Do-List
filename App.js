import React, { useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import InputComponent from './components/InputComponent';

export default function App() {
  const [wordList, setWordList] = useState([]);

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
        {wordList.map((word, key) => 
          <Text
            key={key}
            style={styles.listTasks}>{word}</Text>
        )}
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
  listTasks: {
    backgroundColor: "tomato",
    borderWidth: 1,
    marginHorizontal: 30,
    padding: 15
  }
});
