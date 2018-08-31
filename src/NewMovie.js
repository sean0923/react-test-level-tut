import React from 'react';
import MovieForm from './MovieForm';

import * as testids from './const/testids';

const NewMovie = () => {
  return (
    <div>
      <h1 data-testid={testids.PAGE_TITLE}>New Movie</h1>
      <MovieForm />
    </div>
  );
};

export default NewMovie;
