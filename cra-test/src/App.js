import React from 'react';
import './App.css';
import {choice, remove} from './helpers';
import foods from './foods';
import Dog from './Dog';
import './Dog.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <Dog
                name="Shrek"
                />
            </div>
        )
    }
}

export default App;