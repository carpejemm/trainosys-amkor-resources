import { Provider } from 'react-redux';
import { store } from './src/app/store';
import TodoScreen from './src/features/todos/TodoScreen';

export default function App() {
  return (
    // @ts-ignore
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}
