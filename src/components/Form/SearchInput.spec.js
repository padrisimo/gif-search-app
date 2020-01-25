import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const onHandleQuery = jest.fn();
  const query = '';
  const defaults = {
    onHandleQuery,
    query
  };

  const buildSubject = (props = defaults) => render(<SearchInput {...props} />);

  test('on value change, dispatch the handleQuery action', () => {
    const { getByTestId } = buildSubject();

    fireEvent.change(getByTestId('SearchInput'), {
      target: { value: 'yourock' }
    });
    expect(onHandleQuery).toHaveBeenCalledTimes(1);
  });
});
