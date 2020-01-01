function choice(items){
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item){
    for(let i = 0; i<items.length; i++){
        if(item === items[i]){
            items.splice(i, 1);
            i--;
        }
    }
}

export default choice;
export {choice, remove};