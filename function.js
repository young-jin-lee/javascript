

// 1. Function
// one function === one thing
// A function is an object in JS.
// naming: should be a verb

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}

const a = {name:'a'};
changeName(a);
console.log(a);

// 3. Default parameters (added in ES6)
function showMessage(msg, frm = 'unknown'){
    console.log(`${msg} by ${frm}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args){ // ... takes the arguments as items in an array.
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    // or
    for (const arg of args){
        console.log(arg);
    }

}
printAll('a', 'b', 'c');

// 5. Early return, early exit
// bad to read
function upgradeUser(user){
    if (user.point > 10){
        // long long logic
    }
}

// good to read
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long long logic
}