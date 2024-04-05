import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

export default function Pao() {
  return (
    <View style={styles.container}>


      <Pressable>
        <AntDesign name="checkcircleo" size={24} color="black" />
      </Pressable>

    <Text style={styles.title} >Bread</Text>

      <Pressable>
        <AntDesign name="delete" size={24} color="black" />
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500'
  }
});
