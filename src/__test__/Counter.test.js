import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Counter from '../Counter';

afterEach(() => {
  cleanup();
});

test('dummy test', () => {
  // expect.assertions(2);

  const wrapper = render(<Counter />);
  const button = wrapper.getByTestId('test-button');

  expect(button.textContent).toEqual('0');

  fireEvent.click(button);
  expect(button.textContent).toEqual('1');

  fireEvent.click(button);
  expect(button.textContent).toEqual('2');
});
