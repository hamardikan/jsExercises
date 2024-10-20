function wordSearch(words){
    let index = -1;
    for(let i = 0; i < words.length; i++){
        if(words[i] === "search"){
            index = i;
            break;
        }
    }
    console.log(index);
}

wordSearch(['ayam','bakar','search','enak']);
wordSearch(['ayam','bakar','enak']);
wordSearch(['ayam','bakar','search','enak','search']);


function findIndex(array,word){
    let index = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === word){
            index = i;
            break;
        }
    }
    console.log(index);
}

function findIndex(array,word){
    for(let i = 0; i < array.length; i++){
        if(array[i] === word){
            return i;
        }
    }
    return -1;
}

function removeEggs(foods){
    let result = [];
    let count = 0;
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === "egg" && count < 2){
            count++;
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    return result;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeEggsReverse(foods){
    let foodsCopy = foods.slice();
    const reverseFoods = foods.reverse();
    let result = [];
    let count = 0;
    for(let i = 0; i < reverseFoods.length; i++){
        if(reverseFoods[i] === "egg" && count < 2){
            count++;
            continue;
        } else {
            result.push(reverseFoods[i]);
        }
    }
    return result.reverse();
}

console.log(removeEggsReverse(['egg', 'apple', 'egg', 'egg', 'ham']));

