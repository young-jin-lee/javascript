'use strict';

// Callback Hell to Promise Example
// 1. get input(id, pw) from the user
// 2. when the user tries to login, get valid pairs of id and pw from the server and check if the user is valid.
// 3. return his/her id
// 4. get david's role from the server with his id.
// 5. if the logged in user is david, return his role info 
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                if(
                    (id === 'david' && password === '123') ||
                    (id === 'coder' && password === '456')
                ) {
                    resolve(id);
                } else{
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }
    getRoles(userId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 'david'){
                    resolve({name: 'david', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
    .then((userId) => userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, you have the ${user.role} role`))
    .catch(console.log);