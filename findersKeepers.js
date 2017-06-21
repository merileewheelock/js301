// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
function findElement(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
}
var find = findElement([1,3,5,8,9,10], function(num) {
    return num % 2 === 0; 
});
console.log(find);



function findElement(array, callback){
    for (i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
    return false
}



// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})
// Return false
function findElementBool(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }else{
            return false
        }
    }
}
var findBool = findElementBool([1,3,5,9], function(num) {
    return num % 2 === 0; 
});
console.log(findBool);




// findElement(['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1});
function findElementItch(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('itch') !== -1){
            return array[i];
        }
    }
}
var findItch2 = findElementItch(['Jim','Indian','Marsh','Glitch']);
console.log(findItch2);
function findElementItch2(array,str) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(str) !== -1){
            return array[i];
        }
    }
}
var findItch2 = findElementItch2(['Jim','Indian','Marsh','Glitch'],'itch');
console.log(findItch2);