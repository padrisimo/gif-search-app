import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const onHandleSubmit = jest.fn();
  const setValue = jest.fn();
  const defaults = {
    onHandleSubmit,
    query: 'lol',
    title: 'omg'
  };

  const buildSubject = (props = defaults) => render(<Button {...props} />);

  test('dispatch the onHandleSubmit action on click', () => {
    const { getByTestId } = buildSubject();

    fireEvent.click(getByTestId('Button'));
    expect(onHandleSubmit).toHaveBeenCalledTimes(1);
  });
});
