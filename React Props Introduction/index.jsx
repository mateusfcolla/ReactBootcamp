class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                to = "Ringo" 
                from = "Paul" 
                bangs = {3}
                img = "https://vignette.wikia.nocookie.net/naruto/images/e/e7/Sasuke_epi_319.png/revision/latest?cb=20130629210647&path-prefix=pt-br"
                />
                <Hello to="Cher" from="Sonny"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));