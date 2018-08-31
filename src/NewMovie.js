import React from 'react';
import MovieForm from './MovieForm';

import * as data_testids from './const/data_testids';

const NewMovie = () => {
  return (
    <div>
      <h1 data-testid={data_testids.PAGE_TITLE}>New Movie</h1>
      <MovieForm />
    </div>
  );
};

export default NewMovie;
