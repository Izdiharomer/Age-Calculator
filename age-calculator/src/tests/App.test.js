import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test("renders the Age Calculator title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Age Calculator");
  expect(titleElement).toBeInTheDocument();
});

test('clickHandler is called when the submit button is clicked', () => {
  const clickHandler = jest.fn();

  const { getByText } = render(
    <App clickHandler={clickHandler} />
  );

  const button = getByText('Submit');

  fireEvent.click(button);
});

test('clickHandler is called when the reset button is clicked', () => {
  const resetHandler = jest.fn();

  const { getByText } = render(
    <App resetHandler={resetHandler} />
  );

  const button = getByText('Reset');

  fireEvent.click(button);
});

test('inputChangeHandler updates the input value', () => {
  const { getByPlaceholderText } = render(
    <App />
  );
  const inputElement = getByPlaceholderText('0');
  fireEvent.change(inputElement, { target: { value: '123' } });
  expect(inputElement.value).toBe('123');
});



