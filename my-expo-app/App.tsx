import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';

import './global.css';

export default function App() {

  // local state
  const [count, setCount] = React.useState(0);

  return (
    <>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />

      <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
        <Text>Hello Nativewind in React Native</Text>
      </Text>

      <Text className="mt-3 text-lg font-semibold text-white">
        Edit <Text className="font-bold text-blue-400">App.tsx</Text> to change this
        screen and then come back to see your edits.
      </Text>
      <Text>Another Text</Text>

      <Pressable 
      className="bg-blue-500 
                 px-6 py-3 
                 rounded-lg 
                 active:bg-blue-600">
      <Text 
        className="text-white 
                   font-semibold 
                   text-center">
        Press Me
      </Text>
    </Pressable>

    <Component data={data} />
  </View>
  </>
  );
}
