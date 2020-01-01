import React from 'react';
import {choice, remove} from './helpers';
import foods from './foods';

class App extends React.Component{
    render(){
        let chosen = choice(foods)
        console.log(`I'd like one ${chosen}, please.`);
        console.log(`Here you go: ${chosen}`);
        console.log(`Delicious! May i have another?`);
        remove(foods, chosen);
        console.log(`I'm sorry, we're all out. We have ${foods.length} left`);
        return(<h1>Press F12</h1>)
    }
}

export default App;