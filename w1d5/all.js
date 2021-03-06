
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTest1(expected, found) {
    if (isEqual(expected, found)) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  function isEqual(a,b)
{
  // if length is not equal
  if(a.length!=b.length)
   return "False";
  else
  {
  // comapring each element of array
   for(var i=0;i<a.length;i++)
   if(a[i]!=b[i])
    return "False";
    return "True";
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

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
    var rev = '';
  for (var i = a.length - 1; i >= 0; i--)
    rev += a[i];
  return rev;
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


console.log("Expected output of isVowel(z) is false "+ myFunctionTest(false,isVowel("z")));
console.log("Expected output of isVowel(a) is true "+ myFunctionTest(true,isVowel("a")));
console.log("Expected output of isVowel(A) is true "+ myFunctionTest(true,isVowel("A")));
console.log("Expected output of sum([7,3]) is 10 "+ myFunctionTest(10,sum([7,3])));
console.log("Expected output of mul([1,2,3,4]) is 24 "+ myFunctionTest(24,multiply([1,2,3,4])));
console.log("Expected output of reverse(hello) is olleh "+ myFunctionTest("olleh",reverse("hello")));
console.log("Expected output of findLongestWord([hello,hel,l,helloo]) is helloo "+ myFunctionTest("helloo",findLongestWord(["hello","hel","l","helloo"])));
console.log("Expected output of filterLongWords([hello,hel,l,helloo]) is [hello,hel,helloo] "+ myFunctionTest1(["hello","hel","helloo"],filterLongWords(["hello","hel","helloo"],2)));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
const d4 = a.map(function(elem){return elem *10;});
const d5 = a.filter(function(elem){return elem===3;})
const d6 = a.reduce(function(e1,e2){return e1 * e2;})
document.writeln(d2+ "<br/>");
document.writeln(d3+ "<br/>");
document.writeln(d4+ "<br/>");
document.writeln(d5+ "<br/>");
document.writeln(d6);