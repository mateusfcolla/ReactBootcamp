class Machine extends React.Component{

    static defaultProps = {
        s1: "🍆",
        s2: "🍓",
        s3: "🍊",
        winMsg: "YOU WIN",
        loseMsg: "YOU LOSE"
    }

    verify(n1, n2, n3){
        // Defining props
        const {winMsg, loseMsg} = this.props;
        // Verifying conditions
        if(n1 === n2 && n2 === n3){
            return winMsg;
        }
        else{
            return loseMsg;
        }

    }

    render(){
        // Defining props
        const {s1, s2, s3} = this.props;
        // Defining items and randomizing them
        const it = [0, 0, 0];
        for (let i = 0; i<it.length; i++){
            it[i] = Math.floor(Math.random() * 3);
            switch(it[i]){
                case 0: it[i] = s1; break;
                case 1: it[i] = s2; break;
                case 2: it[i] = s3; break;
            }
        }
        // Returning the results
        return(
            <div>
                <h3>{it[0]} - {it[1]} - {it[2]}</h3>
                <p>{this.verify(it[0], it[1], it[2])}</p>
            </div>
        );
    }
}