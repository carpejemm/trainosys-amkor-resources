import './App.css'

import InputForm from './InputForm.jsx'
import Player from './Player.jsx'

// function App() {
const App = () => {
  // const [count, setCount] = useState(0)

  // const inputType = [
  //   { type: 'text', placeholder: 'Type something...' },
  //   { type: 'email', placeholder: 'Enter your email...' },
  //   { type: 'password', placeholder: 'Enter your password...' },
  // ]

  const players = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: '' },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: '', age: 40 },
  ]

  const myVar = 'Hello, World!'

  return (
    <>
      <div onClick={() => console.log('Div clicked!')}>{myVar}</div>
      {/* <form>
        <input type="text" placeholder="Type something..." />
        <button type="submit">Submit</button>
        <InputForm />
      </form> */}

      {/* <Player player={Players[0]} /> */}

      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}

    </>
  )
}

export default App
