import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      totalClicks: 0
    };
  }

  trackClicks = () => {
    let totalClicks = this.state.totalClicks + 1;
    this.setState({ totalClicks });
  };

  incrementCounter = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
    this.trackClicks();
  };

  decrementCounter = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.setState({ count });
    this.trackClicks();
  };

  render() {
    return (
      <div>
        <p>{this.state.totalClicks} - total clicks</p>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
