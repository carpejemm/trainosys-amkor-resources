import { useState } from 'react'
import { Text, View, TextInput, Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, onToggle } from './todoSlice'
import TodoItem from '../../components/TodoItem'


const TodoScreen = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const handleAddTodo = () => {
    // will dispatch an action to add a todo
    dispatch(addTodo(text));
    setText('');
  }

  const handleDeleteTodo = (id: string) => {
    // will dispatch an action to delete a todo
    dispatch(deleteTodo(id)); // You need to implement deleteTodo action in your slice
  }

  const handleDoneTodo = (id: string) => {
    // will dispatch an action to mark a todo as done
    dispatch(onToggle(id))
  }


  return (
    <>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
      <View>
        <TextInput 
          placeholder='Add a todo' 
          onChangeText={setText}
        />
        <Button title='Add Todo' onPress={handleAddTodo} />
      </View>

      {/* Todo List */}
      <View>
        {todos.length === 0 ? (
          <Text>No todos yet</Text>
        ) : (
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TodoItem todo={item} onDelete={() => handleDeleteTodo(item.id)} onToggleDone={() => handleDoneTodo(item.id)} />}
          />
        )}
      </View>
    </View>
    </>
  )
}

export default TodoScreen