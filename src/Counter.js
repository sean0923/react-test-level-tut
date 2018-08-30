import React, { Component } from 'react';

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
        <button onClick={this.handleOnClick} data-testid="test-button" type="button">
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
