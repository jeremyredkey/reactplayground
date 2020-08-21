import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {
        state = {
            who: 'world!'
          }
      handleWorldBtnClick = () => {
        const worldStr = 'world!';
        this.setState({
            who: worldStr
        })
      }
      handleReactBtnClick = () => {
        const reactStr = 'React!';
        this.setState({
            who: reactStr
        })
      }
      handleFriendBtnClick = () => {
        const friendStr = 'friend!';
        this.setState({
            who: friendStr
        })
      }
      render() {
        return (
          <div>
              <h1>Hello, {this.state.who}</h1>
              <p>Update state by clicking button below!</p>
          <button className="WorldBtn" onClick={this.handleWorldBtnClick}>
            WORLD
          </button>
          <button className="ReactBtn" onClick={this.handleReactBtnClick}>
          REACT
        </button>
        <button className="FriendBtn" onClick={this.handleFriendBtnClick}>
        FRIEND
      </button>
      <hr />
          </div>
          
        )
  }
}
  
  export default HelloWorld;