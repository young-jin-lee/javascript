'use strict';


// Variable, rw(read/write)
// let : added in ES6

let name = 'genie';
console.log(name);
name = 'hello';
console.log(name);

// block scope
let globalName = "globalGenie";
{
    let name = 'genie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); // This prints nothing.
console.log(globalName);

// var : DO NOT EVER USE THIS!
// 1. It is called 'hoisting' which means pulling the declaration to top.
// 2. ignores block scope
age = 4;
var age;

// Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const dayInWeek = 7;


// NOTE!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favours immutable data types for the following reasons. eg. const
// 1. security
// 2. thread safety
// 3. reduce human mistakes


// Variable types
// variable type 1: primitive, single item (메모리에 값이 저장되어 있음.)
// ex) number, string, boolean, null, undefined, symbol
// variable type 2: container composed of multiple items, function (메모리에 레퍼런스가 있고 실제 값은 레퍼런스가 가리키는 곳에 자식 노드 개념의 메모리에 저장되어 있음.)
// object, box container
// function, first-class function