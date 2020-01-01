class Hello extends React.Component{
    render(){
        let bangs = "!".repeat(this.props.bangs);
        return(
            <div>
            <img src={this.props.img} alt="image"/>
            <h1>Hello {this.props.to}{bangs}</h1>
            <p>From: {this.props.from}</p>
            </div>
        );
    }
}