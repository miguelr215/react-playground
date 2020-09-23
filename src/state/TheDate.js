import React from 'react';

class TheDate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            foo: 'foo',
            hello: 'Hello, world!',
            list: [1, 2, 3],
            obj: { nested: 'object', yes: true },
            datetime: new Date(),
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('component did mount')
        this.interval = setInterval(() => {
            console.log('set interval')
            this.setState({
                datetime: new Date()
            })},
            1000      
        )
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        console.log('render')
        return (
          <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default TheDate;