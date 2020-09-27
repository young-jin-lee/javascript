'use strict';

// Promise: a JS object for asynchoronous operations(more useful than callback functions)
// Keywords for using Promise:
// 1. State(pending) vs State(fulfilled or rejected)
// 2. data Producer(P) vs data Consumer(C)

// 1. Producer
/**
     * Creates a new Promise.
     * @param executor A callback(executor) used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    //new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

// *NOTE: Keep in mind that the executor runs automatically when new Promise is created.
const promise = new Promise((resolve, reject) => {
    // do some heavy work(network, reading files, etc)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('david'); // return 'david' to .then if the work has been fulfilled.
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
    console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => { // .then can return a value or another Promise object.
        return new Promise((resolve, reject) => {
            setTimeout(()=>resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num)); // output: 5

// 4. Error Handling
// Suppose you get hen, egg, and cooked egg from the server
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${hen}=>🥚`),1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍜`),1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

// Simpler code
getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log);

// If there has been an error from getting data from the server,
const getHen2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'),1000);
    });
const getEgg2 = hen =>
    new Promise((resolve, reject) => {
        setTimeout(()=> reject(new Error(`error getting the egg! ${hen}=>🥚`)),1000);
    });
const cook2 = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍜`),1000);
    });

getHen2()
    .then(getEgg2)
    .catch(error => { // 달걀을 못가지고 온 경우, 햄버거로 빵꾸처리
        return '🍔';
    })
    .then(cook2)
    .then(console.log)
    .catch(console.log);