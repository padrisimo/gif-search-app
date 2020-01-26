import React from 'react';
import { render } from '@testing-library/react';
import BrickLayout from './';

describe('BrickLayout', () => {
  const defaults = {
    sizes: [{ columns: 2, gutter: 5 }]
  };

  const buildSubject = (props = defaults) =>
    render(
      <BrickLayout {...props}>
        <div>Foo1</div>
        <div>Foo2</div>
      </BrickLayout>
    );

  test('render the passed children elements', () => {
    const { getByTestId } = buildSubject();

    expect(
      getByTestId('BrickLayoutContainer').children[0].getAttribute(
        'data-packed'
      )
    ).toBe('');
    expect(
      getByTestId('BrickLayoutContainer').children[1].getAttribute(
        'data-packed'
      )
    ).toBe('');
    expect(getByTestId('BrickLayoutContainer').children.length).toBe(2);
  });
});
