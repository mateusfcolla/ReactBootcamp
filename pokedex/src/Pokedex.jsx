import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        return(
            <div className="Pokedex">

                <Pokemon
                name = "Charmander"
                id = {4}
                type = "fire"
                base_experience = {62}
                />

                <Pokemon
                name = "Squirtle"
                id = {7}
                type = "water"
                base_experience = {63}
                />

                <Pokemon
                name = "Metapod"
                id = {11}
                type = "bug"
                base_experience = {72}
                />

                <Pokemon
                name = "Butterfree"
                id = {12}
                type = "flying"
                base_experience = {178}
                />

            </div>
        );
    }
}

export default Pokedex;