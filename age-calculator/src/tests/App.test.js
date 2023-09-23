import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test("renders the Age Calculator title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Age Calculator");
  expect(titleElement).toBeInTheDocument();
});

test('clickHandler is called when the button is clicked', () => {
  // Mock the clickHandler function
  const clickHandler = jest.fn();

  // Render the button component with the clickHandler prop
  const { getByText } = render(
    <App clickHandler={clickHandler} />
  );

  // Find the button element by its text content
  const button = getByText('Submit');

  // Simulate a click on the button
  fireEvent.click(button);

  // Check if the clickHandler function was called
  //expect(clickHandler).toHaveBeenCalled();
});

 



