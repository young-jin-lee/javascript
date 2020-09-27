'use strict';

// JS is synchoronous which means it executes the code block in order(from top to bottom) after hoisting.
// hoisting: var, function declaration.

// 1. Synchoronous
console.log('1');
console.log('2');
console.log('3');

// 2. Asynchoronous
// setTimeout 함수의 파라미터로 내가 만든 함수를 넘겨준다. 브라우저가 1초 후에 이 함수를 호출(call)하도록 요청하는것. -> callback
console.log('1');
setTimeout(() => console.log('2')); // *** This requests the browser to call this function after 1 second and does not wait for the response from the browser.
console.log('3');

// When to use callback?

// 1. Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// 2. Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell Example
// 1. get input(id, pw) from the user
// 2. when the user tries to login, get valid pairs of id and pw from the server and check if the user is valid.
// 3. return his/her id
// 4. get david's role from the server with his id.
// 5. if the logged in user is david, return his role info 
class UserStorage{
    checkLoginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'david' && password === '123') ||
                (id === 'coder' && password === '456')
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='david'){
                onSuccess({name:'david', role:'admin'});
            }else{
                onError(new Error('no success'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.checkLoginUser(
    id, 
    password, 
    (user) => { // here user means id of onSuccess
        userStorage.getRoles(
            user, 
            (userWithRole)=>{
                alert(`Hello ${userWithRole.name}, you have the ${userWithRole.role} role`)
            }, 
            (error)=>{
                console.log(error)
            }
        );
    }, 
    (error) =>{
        console.log(error)
    }
);