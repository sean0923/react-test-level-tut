import React, { Component } from 'react';

import * as data_testids from './const/data_testids';

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
          data-testid={data_testids.Counter_TEST_BUTTOMN}
          type="button"
        >
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
