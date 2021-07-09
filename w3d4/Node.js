const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
getNumber();

let sum = 0;

function getNumber(){
    readline.question('Enter your number? ', number => {
        if(number==="stop"){
            console.log("The sum is: "+sum);
            readline.close();
        }
        else{
            sum = sum + parseInt(number);
            getNumber();
        }
    });
}
