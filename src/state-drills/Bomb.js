import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {
    state = {
        count: 0,
        fuse: 'tick',
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
            if(this.state.count >= 8){
                this.setState({
                    fuse: 'BOOM!!!'
                })
            } else if((this.state.count % 2) === 0){
                this.setState({
                    fuse: 'tick'
                })
            } else if (!((this.state.count % 2) === 0))
                this.setState({
                    fuse: 'tock'
                })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return (
            <div className='bombBox'>
                <h3>What's that ticking?</h3>
                <p>{this.state.fuse}</p>
            </div>
        )
    }
}

export default Bomb;