class Machine extends React.Component{

    verify(n1, n2, n3){
        if(n1 === n2 && n2 === n3){
            return "YOU WIN";
        }
        else{
            return "YOU LOST";
        }
    }

    render(){
        // Defining the items and randomizing them
        const it = [0, 0, 0];
        for (let i = 0; i<it.length; i++){
            it[i] = Math.floor(Math.random() * 3);
            switch(it[i]){
                case 0: it[i] = this.props.s1; break;
                case 1: it[i] = this.props.s2; break;
                case 2: it[i] = this.props.s3; break;
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