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
        const items = [0, 0, 0];
        for (let i = 0; i<items.length; i++){
            items[i] = Math.floor(Math.random() * 3);
            switch(items[i]){
                case 0: items[i] = "😎"; break;
                case 1: items[i] = "👺"; break;
                case 2: items[i] = "🎅"; break;
            }
        }
        // Returning the results
        return(
            <div>
                <h3>{items[0]} - {items[1]} - {items[2]}</h3>
                <p>{this.verify(items[0], items[1], items[2])}</p>
            </div>
        );
    }
}