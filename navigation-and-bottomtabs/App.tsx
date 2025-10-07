import { Text, View } from 'react-native';
import styles from './styles/AppStyles';

import GoldScreen from './screens/GoldScreen';
import PurpleScreen from './screens/PurpleScreen';
import TomatoScreen from './screens/TomatoScreen';

import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
}

export default App;
