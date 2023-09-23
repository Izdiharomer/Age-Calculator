import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test("renders the Age Calculator title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Age Calculator");
  expect(titleElement).toBeInTheDocument();
});

test('clickHandler is called when the button is clicked', () => {
  const clickHandler = jest.fn();

  const { getByText } = render(
    <App clickHandler={clickHandler} />
  );

  const button = getByText('Submit');

  fireEvent.click(button);
});

 



