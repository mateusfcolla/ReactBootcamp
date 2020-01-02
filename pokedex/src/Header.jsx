import React, { Component } from 'react';
import './Header.css';
import logo from './pokeball.png';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={logo} alt="Pokéball"/>
                <h1>Pokédex App</h1>
            </div>
        );
    }
}

export default Header;