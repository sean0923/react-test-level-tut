import React from 'react';
import { render } from 'react-testing-library';

import Counter from '../Counter';

test('dummy test', () => {
  const wrapper = render(<Counter />);
  wrapper.debug();
  const text = wrapper.getByTestId('test-button').textContent;
  console.log('text: ', text);
  
  expect(1).toEqual(1);
});
