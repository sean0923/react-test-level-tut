import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import * as testids from '../const/testids';

import Movie from '../Movie';

console.error = jest.fn();

afterEach(cleanup);

test('<Movie>', () => {
  const wrapper = render(<Movie />);
  expect(console.error).toHaveBeenCalled();
  wrapper.debug();
});
