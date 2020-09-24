import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    static defaultProps = {
        bulletInChamber: 8
    }
    pullTheTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
        
    }
    componentWillUnmount(){
        clearTimeout(this.timeout)
    }
    renderDisplay(){
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if(spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ...'
        } else if(chamber === bulletInChamber){
            return 'BANG!!!'
        } else {
            return 'you\'re safe'
        }
    }
    render(){
        return(
            <div>
                <h3>Roulette Gun</h3>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.pullTheTrigger}>Pull the trigger!</button>
            </div>
        )
    }
}


export default RouletteGun;