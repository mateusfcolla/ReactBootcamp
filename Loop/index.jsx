class App extends React.Component{
    render(){
        return(
            <div>
                <Friend
                name = "Elton"
                hobbies = {["Piano", "Singing", "Dancing", "Dyeing", "Eat", "Watch Shrek"]}
                />
                <Friend
                name = "Frida"
                hobbies = {["Drawing", "Painting"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));