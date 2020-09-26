
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted: very important!)
// a function expression is created when the execution reaches it.
const print = function(){ // anonymous function(function without a name)
    console.log('print');
}
print();
const printAgain = print;
printAgain();

// Callback functions using function expressions
function randomQuiz(answer, printYes, printNo){
    if (answer === 'correct'){
        printYes(); // callback function
    }else{
        printNo(); // callback function
    }
}
// named function <> anonymous function
const printYes = function printY(){ // named function: used for debugging
    console.log('yes');
}
const printNo = function printN(){ // named function
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('correct', printYes, printNo);


// Arrow functions 
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}
const simplePrint = () => console.log('simplePrint!');
const add = function(a, b){
    return a + b;
}
const add = (a,b) => {
    return a + b;
}
const add = (a,b) => a + b;

// IIFE: Immediately Invoked Function Expression: 실제 현업에서는 잘 쓰이지않는데, 바로 실행시키고 싶을때 써라.
(function hello(){
    console.log('IIFE');
})();

