import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Movie from '../Movie';

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

test('<Movie>', () => {
  const wrapper = render(<Movie />);

  expect(console.error).toHaveBeenCalled();
});

const movie = {
  id: 'asdf',
  title: 'title',
  poster_path: 'posterpath.jpg',
};

test('<Movie movie={movie}/>', () => {
  const wrapper = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );

  expect(console.error).not.toHaveBeenCalled();
});
