import React, { Component } from 'react';
import './Bomb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';


export default class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
      
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
          <div className='bomb'><FontAwesomeIcon icon={faBomb} /></div>
        <p>{this.renderDisplay()}</p>
      </div>
    )
  }
}

