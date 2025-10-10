import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';

// render - to render the component
// screen - to query the component

// describe - to group related tests

describe('<App />', () => {
  it('has 1 child', () => {
    const { toJSON } = render(<App />);
    expect(toJSON().children.length).toBe(1);
  });
});