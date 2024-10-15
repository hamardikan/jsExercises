const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array){
    let lastIndex = array.length - 1;
    return(array[lastIndex]);
}

console.log(getLastValue(nums));

function arraySwap(array){
    let lastValue = array[array.length-1];
    let firstValue = array[0];
    array[0] = lastValue;
    array[array.length - 1] = firstValue;
    return array;
}

console.log(arraySwap([1,2,3,4,5]));

for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

for(let i = 5; i > 0; i--) {
    console.log(i);
}

let i = 0;
while(i<10){
    i++;
    console.log(i);
}

i = 5;
while(i>0){
    console.log(i);
    i--;
}

function arrayPlusOne(array){
    for(let i = 0 ; i < array.length; i++ ){
        array[i] += 1;
    }
    return array;
}
console.log(arrayPlusOne([1,2,3,4,5]));

function arrayAdd(array, num){
    for(let i = 0 ; i < array.length; i++ ){
        array[i] += num;
    }
    return array;
}

console.log(arrayAdd([1,2,3,4,5],2));

function arrayCombine(array1, array2){
    let array = [];
    for(let i=0 ; i < array1.length; i++){
        array.push(array1[i]+array2[i]);
    }
    return array;
}

console.log(arrayCombine([1,2,3],[4,5,6]));

function countPositives(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            count++
        }
    }
    return count;
}

console.log(countPositives([1,2,-3]));