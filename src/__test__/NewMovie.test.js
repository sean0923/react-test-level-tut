import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import * as data_testids from '../const/data_testids';

import NewMovie from '../NewMovie';

afterEach(() => {
  cleanup();
});

it('test New Movie', () => {
  const wrapper = render(<NewMovie />);
  // wrapper.debug();

  const pageTitle = wrapper.getByTestId(data_testids.PAGE_TITLE);
  expect(pageTitle.textContent).toBe('New Movie');

  const form = wrapper.getByTestId(data_testids.MovieForm_MOVIE_FORM);
  expect(form.tagName).toBe('FORM');
});

it('first snapshot testing', () => {
  const wrapper = render(<NewMovie />);
  expect(wrapper.container).toMatchSnapshot();
});
