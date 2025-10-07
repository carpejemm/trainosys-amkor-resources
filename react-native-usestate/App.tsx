import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, ImageBackground, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const mountainBG = require('./assets/mountains.avif');

  return (
    <ImageBackground 
      source={mountainBG} 
      style={{flex: 1}}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.text}>React Native useState Hook</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      </View>

      <AntDesign name="apple" size={50} color="red" />

      <TextInput placeholder='Type here...' style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%', marginTop: 20, paddingHorizontal: 10}} />

      <TextInput 
        placeholder='Type here...' 
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '50%', marginTop: 20, paddingHorizontal: 10}} 
        secureTextEntry 
      />

      <Text>{firstName} {lastName}</Text>
      <TextInput 
        placeholder='First Name' 
        style={{height: 40, borderColor: 'black', borderWidth: 1, width: '50%', marginTop: 20, paddingHorizontal: 10}} 
        onChangeText={text => setFirstName(text)} 
        value={firstName}
      />
      <TextInput
        placeholder='Last Name' 
        style={{height: 40, borderColor: 'black', borderWidth: 1, width: '50%', marginTop: 20, paddingHorizontal: 10}} 
        onChangeText={text => setLastName(text)} 
        value={lastName}
      />

      <Modal visible={modalVisible} animationType="slide" presentationStyle='pageSheet'>
        <View style={styles.modalContainer}>
          <AntDesign name="close" size={24} color="black" onPress={() => setModalVisible(false)}/>
          <Text style={styles.text}>This is a Modal</Text>

        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 20,
    width: '60%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
