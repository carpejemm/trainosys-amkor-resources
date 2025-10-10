import { render, waitFor } from '@testing-library/react-native';
import Sample from './sample';

describe("Sample Component", () => {
  it("displays cat fact", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { text: "first cat fact" },
            { text: "second cat fact" },
          ]),
      })
    );

    const { getByText } = render(<Sample />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const catFactElement = getByText("first cat fact");
    expect(catFactElement).toBeTruthy();
  });

  it("displays no cat fact", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText } = render(<Sample />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const catFactElement = getByText("No Cat Facts!");
    expect(catFactElement).toBeTruthy();
  });

  it("displays no cat fact due to loading", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    const { getByText } = render(<Sample />);

    const catFactElement = getByText("Loading...");
    expect(catFactElement).toBeTruthy();
  });
});
