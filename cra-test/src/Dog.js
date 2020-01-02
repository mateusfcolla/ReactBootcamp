import React, { Component } from 'react'

class Dog extends Component{

    static defaultProps = {
        name: 'Dog'
    }

    render(){
    const {name} = this.props;
    
        return(
            <div className="Dog">
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Dog;