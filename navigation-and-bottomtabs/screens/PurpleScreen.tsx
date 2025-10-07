import { Text, View, Button } from 'react-native';
import styles from './NavBar';
import { useNavigation, NavigationProp } from '@react-navigation/native';


type RootStackParamList = {
  Gold: undefined;
  Purple: undefined;
  Tomato: undefined;  
};

const PurpleScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>Purple Screen</Text>
      <Button title='Go to Gold Screen' onPress={() => navigation.navigate('Gold')} />
      <Button title='Go to Tomato Screen' onPress={() => navigation.navigate('Tomato')} />
    </View>
  );
};

export default PurpleScreen;