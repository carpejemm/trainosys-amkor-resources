import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Platform, ActivityIndicator, Dimensions } from 'react-native';

import ScrollViewComponent from './ScrollViewComponent';

const icon = require('./assets/icon.png');
const frame = require('./assets/frame.png');

export default function App() {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World and Universe!!!</Text>
        <Text style={styles.anotherContainer}>Hello again</Text>
        <Text style={styles.text} numberOfLines={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sunt maxime, modi, vel corrupti impedit rem, optio explicabo facilis quae corporis necessitatibus? Modi eligendi, quidem, eveniet odit quam tempore nam, consequatur quod ea voluptate expedita. Laboriosam officiis veritatis id pariatur inventore iure! Laboriosam voluptatibus et cupiditate fuga dolorum natus aut eum vero, quo repellat doloremque, sit fugit sapiente quam quos ullam sed earum blanditiis. Tempora, inventore maxime eum et similique repellendus explicabo reiciendis alias nisi voluptatem placeat ab nulla vel, cupiditate rerum. Perferendis officiis dolorum eum quo excepturi, aperiam nam magni facilis fugiat, molestias voluptates quas quos numquam exercitationem suscipit.</Text>
        <StatusBar style="auto" />

        <Text>
          Platform OS: {Platform.OS}
        </Text>

        <Text>{Platform.OS === 'ios' ? 'This is an IOS Device' : 'android'}</Text>

        <ActivityIndicator size="large" color="orange" />

        <Text>Window Width: {windowWidth} and Height: {windowHeight}</Text>


        <Text onPress={() => alert('You clicked me!')} style={{ margin: 20, color: 'blue', padding: 10, borderWidth: 2, borderColor: 'blue', borderRadius: 5 }}>
          Click me! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, sit!
        </Text>

        <Image source={icon} style={{ width: 100, height: 100 }} />
        <Image source={frame} style={{ width: 100, height: 100 }} />

        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 100, height: 100, marginTop: 20 }} blurRadius={2}/>

        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 200, height: 200, marginTop: 20 }} borderRadius={100}/>

        <TouchableOpacity onPress={() => alert('TouchableOpacity pressed!')} style={{ backgroundColor: 'pink', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Touchable Opacity</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <Button
            title="Press me"
            onPress={() => alert('Button pressed!')}
            color="blue"
          />
        </View>
        
      </View>
      <ScrollViewComponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: 'blue',
  },
  anotherContainer: {
    marginTop: 20,
    color: 'blue',
  },
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'justify'
  },
  button: {
    marginBottom: 50,
  }
});
