const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    let newCat = [...cats, `${name}`];
    return newCat
}

function prependCat(name){
    let newCat = [`${name}`, ...cats];
    return newCat;
}

function removeLastCat(){
    let newCat = cats.slice(0,2);
    return newCat
}

function removeFirstCat(){
    return cats.slice(1);
    
}
