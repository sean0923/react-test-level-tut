import React, { Component } from 'react';

import * as testids from './const/testids';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleOnClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button
          onClick={this.handleOnClick}
          data-testid={testids.Counter_TEST_BUTTOMN}
          type="button"
        >
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
