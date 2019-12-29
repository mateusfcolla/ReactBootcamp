function getMood(){
    const moods = ['Angry', 'Sad', 'Depressed', 'Super Sad', 'Happy', 'Vibin', 'Geodude', 'Hungry', 'Thirsty', 'Shrek', 'Not cool bruh', 'Joji'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component{
    render(){
        return(
            <div>
                <h1>My mood is: {getMood()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));