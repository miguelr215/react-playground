import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }
    helloWorldClick = () => {
        this.setState({who: 'world!'})
    }
    helloFriendClick = () => {
        this.setState({who: 'friend!'})
    }
    helloReactClick = () => {
        this.setState({who: 'react!'})
    }
    render(){
        return (
            <div className='helloBox'>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.helloWorldClick}>World</button>
                <button onClick={this.helloFriendClick}>Friend</button>
                <button onClick={this.helloReactClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;