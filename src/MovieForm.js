import React, { Component } from 'react';

import * as data_testids from './const/data_testids';

class MovieForm extends Component {
  state = {
    userInput: '',
  };

  render() {
    const { handleSubmit } = this.props;
    const { userInput } = this.state;
    return (
      <div>
        <form
          onSubmit={() => handleSubmit(userInput)}
          // onSubmit={() => console.log('clicked!')}
          data-testid={data_testids.MovieForm_MOVIE_FORM}
        >
          <input type="text" />
          <button data-testid={data_testids.SUBMIT_BUTTON_AT_MOVIE_FORM}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
