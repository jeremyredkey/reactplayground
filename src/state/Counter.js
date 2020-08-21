import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    state = {
      count: 0,
      step: 1
    }
    handleButtonClick = () => {
      const newCount = this.state.count + this.state.step
      this.setState({
        count: newCount
      })
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button className="CounterBtn" onClick={this.handleButtonClick}>
            Add 1
          </button>
        </div>
      )
    }
  }
  
  
  export default Counter;