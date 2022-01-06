import React, { useState} from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DisplayTextComponent from "./components/DisplayTextComponent";
import InputComponent from './components/InputComponent';

export default function App() {
  const [wordList, setWordList] = useState([]);

  const displayTextHandler = userInput => {
    setWordList(task => [
      ...task, {
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
        keyExtractor={(task, key) => key}
        data={wordList}
        renderItem={(renderItem) => (
          <DisplayTextComponent
            text={renderItem.item.value}/>
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
  }
});
