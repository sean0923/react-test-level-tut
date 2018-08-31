import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import * as data_testids from '../const/data_testids';

import MovieForm from '../MovieForm';

const handleSubmit = jest.fn();

afterEach(() => {
  cleanup();
});

it('test New Movie', () => {
  const wrapper = render(<MovieForm handleSubmit={handleSubmit} />);

  const submitBtn = wrapper.getByTestId(data_testids.SUBMIT_BUTTON_AT_MOVIE_FORM);
  fireEvent.click(submitBtn);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
