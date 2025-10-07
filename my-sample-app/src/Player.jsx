const Player = ({ player }) => {
  const { name, age } = player

  const anotherVar = 'This is another variable'


  const getUserName = () => {
    return name ? name : 'No Name'
  }
  return (
    <>
      <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>{anotherVar}</div>
        <div>{10 + 10 + 8}</div>
        <div>{name ? <span>{name}</span> : <span>No Name Provided</span>}</div>
        <div>{getUserName()}</div>

        {/* Ternary Operator */}
        <div>{age ? age : 'No Age Provided'}</div>
      </div>
    </>
  )
}

export default Player