import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component{
    render(){
        let {id, name, type, base_experience} = this.props;
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return(
            <div className="Pokemon">
                <img src={imgUrl} alt="Pokemon"/>
                <h1>{name}</h1>
                <h5>{type}</h5>
                <p>{base_experience}</p>
            </div>
        );
    }
}

export default Pokemon;