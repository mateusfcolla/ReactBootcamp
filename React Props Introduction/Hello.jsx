class Hello extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello {this.props.to}!</h1>
            <p>From: {this.props.from}</p>
            </div>
        );
    }
}