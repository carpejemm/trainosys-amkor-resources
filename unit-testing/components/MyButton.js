import { Button } from "react-native";

const MyButton = (props) => {
  return (
    <Button testID="my-button" title="Press me" onPress={props.onPress} />
  );
}

export default MyButton;