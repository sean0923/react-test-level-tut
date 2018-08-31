import React, { Component } from 'react';

import * as testids from './const/testids';

class MovieForm extends Component {
  state = {
    userInput: '',
  };

  render() {
    const { handleSubmit } = this.props;
    const { userInput } = this.state;
    return (
      <div>
        <form onSubmit={() => handleSubmit(userInput)} data-testid={testids.MovieForm_MOVIE_FORM}>
          <input
            type="text"
            onChange={e => this.setState({ userInput: e.target.value })}
            value={userInput}
            data-testid={testids.INPUT_AT_MOVIE_FORM}
          />
          <button data-testid={testids.SUBMIT_BUTTON_AT_MOVIE_FORM}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
