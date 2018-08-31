import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import * as testids from '../const/testids';

import MovieForm from '../MovieForm';

afterEach(() => {
  cleanup();
});

test('<MovieForm>', () => {
  const handleSubmit = jest.fn();
  const wrapper = render(<MovieForm handleSubmit={handleSubmit} />);

  const submitBtn = wrapper.getByTestId(testids.SUBMIT_BUTTON_AT_MOVIE_FORM);
  const input = wrapper.getByTestId(testids.INPUT_AT_MOVIE_FORM);

  fireEvent.change(input, { target: { value: 'hi' } });
  fireEvent.click(submitBtn);

  expect(input.getAttribute('value')).toBe('hi');
  expect(handleSubmit).toHaveBeenCalledWith('hi');
});
