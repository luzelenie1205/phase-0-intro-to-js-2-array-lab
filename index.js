// Write your solution here!
let cats =['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.splice(cats.length-1)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const  copyCats = [...cats,'Broom']
    return copyCats
}

function prependCat(name){
    return [name,...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}