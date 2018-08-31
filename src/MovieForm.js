import React, { Component } from 'react';

import * as data_testids from './const/data_testids';

class MovieForm extends Component {
  state = {
    userInput: '',
  };

  render() {
    return (
      <div>
        <form data-testid={data_testids.MovieForm_MOVIE_FORM}>
          <input type="text" />
          <input type="submit" text="submit" />
        </form>
      </div>
    );
  }
}

export default MovieForm;
