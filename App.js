import { StyleSheet, Text, SafeAreaView, View, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react'; 
import { MaterialIcons } from '@expo/vector-icons'
import Pao from './components/naosei';
import { app, db, getFirestore, collection, addDoc } from './Firebase';

export default function App() {
  const [title, setTitle] = useState('')

  const addItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "padaria"), {
        titulo: title,
        isChecked: false,
        
      });
      console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
      console.error("Error adding document", e);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.heading}>Shop List</Text>

        <Text style={styles.noItems}>3</Text>

        <Pressable>
          <MaterialIcons name="delete" size={25} color="black" />
        </Pressable>

      </View>

      <Pao/>
      <Pao/>
      <Pao/>
      <Pao/>
      <Pao/>

      <TextInput placeholder="Insira um novo item" style={styles.input}  value={title} onChangeText={(text) => setTitle(title)} onSubmitEditing={addItem} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    flex: 1 
  },
  noItems: {
    fontWeight: '500',
    fontSize: 25,
    marginRight: 20
  },
  input: {
    backgroundColor: 'lightgray',
    padding: 10,
    fontSize: 17,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 'auto'
  }
});
