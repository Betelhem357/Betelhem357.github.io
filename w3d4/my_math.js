
const pi = 3.14;
let add = function(x,y){
return x+y;
}

let subtract = function(x,y){
 return x-y;
}

let multiply = function(x,y){
    return x*y;
}

let divide = function(x,y){
    return x/y;
}

module.exports = {
    'add':add,
    'subtract':subtract,
    'multiply':multiply,
    'divide':divide,
    'pi':pi
}