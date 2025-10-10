import { Text } from "react-native";

const MyGreetings = (props) => {

  const greeting = () => {
    if (props.ln === "fr") {
      return "Bonjour";
    } else if (props.ln === "es") {
      return "Hola";
    }
    return "Hello";
  }


  return <Text>{greeting()}, {props.name}!</Text>;
};

export default MyGreetings;