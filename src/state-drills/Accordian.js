import React from 'react';

class Accordian extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: null
    };
    handleButtonClick(index){
        this.setState({currentSectionIndex: index})
    };
    
    renderButtons(section, index, currentSectionIndex){
        return(
            <li key={index} className='Accord-item'>
                <button onClick={() => this.handleButtonClick(index)}>
                {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    };
    
    render(){
        const {currentSectionIndex} = this.state
        const {sections} = this.props
        return(
            <div>
                <ul className='Accordian'>
                    {sections.map((section, index) => (
                        this.renderButtons(section, index, currentSectionIndex)
                    ))}
                </ul>
            </div>
        )
    }
}

export default Accordian;