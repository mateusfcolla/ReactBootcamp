import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component{
    render(){
        let {id, name, type, base_experience} = this.props;
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return(
            <div className="Pokemon">
                <h1>{name}</h1>
                <img src={imgUrl} alt="Pokemon"/>
                <h5>Type: {type}</h5>
                <p>EXP: {base_experience}</p>
            </div>
        );
    }
}

export default Pokemon;