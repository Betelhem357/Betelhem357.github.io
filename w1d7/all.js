/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

function isVowel(a){
    a = a.toLowerCase();
    if(a==="a"||a==="e"||a==="i"||a==="o"||a==="u"){
        return true;
    }else{
        return false;
    }
}

function sum(el){
    return el.reduce(function(a, b){
    return a + b;}, 0);
}

function multiply(el){
    return el.reduce(function(a, b){
    return a * b;}, 1);
}

function reverse(a){
  var stringArray = a.split("");
  var rev = stringArray.map(function(el,ind,array){
     return array[array.length-1-ind];
  });
  return rev.join("");
}

function findLongestWord(el){
   return el.reduce(function(a,b){
       return a.length > b.length? a:b;
   })
}

function filterLongWords(el,ind){
  el = el.filter(function(a,ind,array){
        return a.length>ind;
    })
    return el;
}


const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem + 3;
})
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
const d4 = a.map(function(elem){return elem *10;});
const d5 = a.filter(function(elem){return elem===3;})
const d6 = a.reduce(function(e1,e2){return e1 * e2;})