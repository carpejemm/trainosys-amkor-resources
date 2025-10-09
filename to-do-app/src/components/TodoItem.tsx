import { View, Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

// @ts-ignore
const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  return (
    <View>
      <TouchableOpacity onPress={onToggleDone}>
        {todo.completed ? (
          <AntDesign name="check-circle" size={24} color="green" />
        ) : (
          <AntDesign name="check-circle" size={24} color="grey" />
        )}
      </TouchableOpacity>
      <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>
      <Feather name="trash-2" size={24} color="black" onPress={onDelete} />
      <Text>{todo.completed ? 'Completed' : 'Pending'}</Text>
    </View>
  )
}

export default TodoItem