import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // todos : {id: Number, textValue : string, checked : boolean}
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos, //기존 할일 목록
      {id : Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  

  return (
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.appTitle}>
        TO DO LIST
      </Text>
      <View style={styles.card}>
          {/*<TextInput style={styles.input} placeholder="Add an item!" textAlign='center'/>*/}
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos = {todos} />
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#3143e8',
  },
  appTitle : {
    color : '#fff',
    fontSize : 36,
    marginTop : 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign : 'center',
    backgroundColor: "#3143e8",
  },
  card:{
    backgroundColor : '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius : 10,
    marginLeft : 10,
    marginRight : 10,
  },
  input:{
    padding : 20,
    borderBottomColor : '#bbb',
    borderBottomWidth: 1,
    fontSize : 24,
    marginLeft:20,
    marginRight : 20,

  },
});

export default App;