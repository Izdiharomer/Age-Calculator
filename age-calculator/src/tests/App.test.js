import React from "react";

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

it('renders the Age Calculator title"', () => {
  render(<App />);
  expect(screen.getByText('Age Calculator')).toBeInTheDocument();
});


test('clickHandler is called when the submit button is clicked', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(
    <App clickHandler={clickHandler} />  //find function clickhandler in App component
  );

  const button = getByText('Submit');  //test if the button has this text

  fireEvent.click(button);  //test if the button has click event listener

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



