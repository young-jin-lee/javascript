// async & await
// clearer style of using promise

// 1. Promise revision

// - This is synchronous. bad.
function fetchUser() {
    // do network request that takes 10 secs...
    // blabla
    return 'david';
}
const user = fetchUser();
console.log(user);

// - The state will be pending forever because resolve/reject is not called
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request that takes 10 secs...
        // blabla
        return 'david';
    })
}
console.clear();
const user = fetchUser();
console.log(user);

// - good, the state will be 'fulfilled' now.
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request that takes 10 secs...
        // blabla
        resolve('david');
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. Async: a syntatic sugar that makes the Promise code modern and simpler.
// - add async in front of the function and remove 'return new Promise...' portion
// - async automatically converts the code block into Promise.
async function fetchUser() {
    // do network request that takes 10 secs...
    // blabla
    return 'david';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 3. await: waits until the function to the right is done. only usable where async is attached to the function
// function delay(ms){
//     return new Promise((resolve, reject) => setTimeout(() => resolve(), ms)); // return Promise that calls resolve after ms
// }

function delay(ms){
    return setTimeout(() => resolve(), ms); // return Promise that calls resolve after ms
}

async function delay(ms){
    return setTimeout(() => ms); // return Promise that calls resolve after ms
}

async function getApple(){ // This returns '🍎' after 1000 ms
    await delay(1000); 
    return '🍎';
}

async function getBanana(){ // This returns '🍌' after 1000 ms
    return delay(1000)
    .then(()=> '🍌'); // chaining
    // or
    await delay(1000); 
    return '🍌'; // this is simpler. looks like synchronous
}

function pickFruits() { // this looks hell.
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    });
}
pickFruits().then(console.log);

// Simpler
async function pickFruits() { // this takes 2 seconds
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}
pickFruits().then(console.log);


// parallel 1
async function pickFruits() { // this takes 1 second
    const applePromise = getApple(); // remember that the executor runs automatically when new Promise is created.
    const bananaPromise = getBanana(); // same as. the executor runs immediately.
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
pickFruits().then(console.log);

// parallel 2: using all() api
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

// extra: picking only one
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// TO DO: Convert callback hell into async + await
