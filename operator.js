// 1. String concatnation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1 - 1 / 1 * 1 % 2 ** 2);

// 3. Increment(decrement) operators
let counter = 1;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter ++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 1;
let y = 2;
x += y;

// 5. Comparison operators
console.log(1 < 3);
console.log(1 > 3);
console.log(1 <= 3);
console.log(1 >= 3);

// 6. Logical operators : ||, &&, !

const value1 = false;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`); // expression 중 연산이 많은 것을 뒤에 배치한다!! &&도 가장 뒤에!(중요)

function check(){
    for (let i = 0; i < 10; i++){
        console.log('wasting time');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive === numberFive);

// object equality by reference
const a = {name: "a"};
const b = {name: "b"};
const c = a;
console.log(a == b); // false
console.log(a === b); // false
console.log(a == c); // true 
console.log(a === c); // true

// equality - puzzler

console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators: if
// if, else if, else
const name = 'a';
if (name === 'a'){
    console.log("Welcome a");
}else if(name === 'coder'){
    console.log('Welcome b');
}else{
    console.log('unknown');
}

// 9. Tenary operator: ?
// condition ? value1 : value2;
console.log(name === 'a' ? 'yes' : 'no'); // 간단할 때만 사용. 복잡할땐 if나 switch

// 10. Switch statement ; if 문에서 else if 가 많을 때 사용.
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('good');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 12. For loops; consider big O. Try to avoid nested loops which results in O(n^2)
for(let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}
