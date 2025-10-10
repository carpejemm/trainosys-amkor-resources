import { render } from "@testing-library/react-native";
import MyGreetings from "./MyGreetings";

describe("MyGreetings", () => {
  it("displays Bonjour in French", () => {
    const { getByText } = render(<MyGreetings ln="fr" name="Alice" />);
    expect(getByText("Bonjour, Alice!")).toBeTruthy();
  });

  it("displays Hola in Spanish", () => {
    const { getByText } = render(<MyGreetings ln="es" name="Bob" />);
    expect(getByText("Hola, Bob!")).toBeTruthy();
  });

  it("displays Hello in default language", () => {
    const { getByText } = render(<MyGreetings ln="en" name="Charlie" />);
    expect(getByText("Hello, Charlie!")).toBeTruthy();
  });
});
