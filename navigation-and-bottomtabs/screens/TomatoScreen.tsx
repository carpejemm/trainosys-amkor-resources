import { Text, View , Button} from 'react-native';
import styles from './NavBar';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Gold: undefined;
  Purple: undefined;
  Tomato: undefined;  
};

const TomatoScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    // <View style={[styles.navBar, { backgroundColor: 'tomato' }]}>
    <View>
      <Text>Tomato Screen</Text>
      <Button title='Go to Gold Screen' onPress={() => navigation.navigate('Gold')} />
    </View>
  );
};

export default TomatoScreen;