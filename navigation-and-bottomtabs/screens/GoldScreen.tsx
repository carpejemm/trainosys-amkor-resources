import { Text, View, Button } from 'react-native';
import styles from './NavBar';
import { useNavigation, NavigationProp } from '@react-navigation/native';


type RootStackParamList = {
  Gold: undefined;
  // Purple: { someParam: string };
  Purple: undefined;
  Tomato: undefined;
};

const GoldScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Text>Gold Screen</Text>
      <Button title='Go to Purple Screen' onPress={() => navigation.navigate('Purple')} />
      <Button title='Go to Tomato Screen' onPress={() => navigation.navigate('Tomato')} />
    </View>
  );
}

export default GoldScreen;
