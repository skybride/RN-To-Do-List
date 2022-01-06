import React, { useState} from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputComponent from './components/InputComponent';

export default function App() {
  const [wordList, setWordList] = useState([]);

  const displayTextHandler = userInput => {
    setWordList(task => [
      ...task, {
        key: Math.random().toString(),
        value: userInput
      }
    ]);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>To Do App</Text>
      </View>
      <InputComponent displayTextHandler={displayTextHandler}/>
        <FlatList
          keyExtractor={(item) => item.key}
          data={wordList}
          renderItem={(itemData) => (
            <View style={styles.listTasks}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}>
        </FlatList>
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
    padding: 15,
    marginBottom: 20
  }
});
