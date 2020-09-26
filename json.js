

    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     */
    //stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    /**
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer An array of strings and numbers that acts as a approved list for selecting the object properties that will be stringified.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     */
    //stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
// 1. Object to JSON
// Stringify(obj)

let json = JSON.stringify(true);
console.log(typeof(json), json);

json = JSON.stringify(3.);
console.log(typeof(json), json);

json = JSON.stringify(['apple', 'banana']);
console.log(typeof(json), json);

const person = {
    name: 'Dave',
    age : 10,
    height: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    walk: function() {
        console.log(`${this.name} can walk!`);
    },
};

json = JSON.stringify(person);
console.log(typeof(json), json);

json = JSON.stringify(person, ['name', 'birthDate']);
console.log(typeof(json), json);

const person2 = {
    name: 'Dave',
    age : 10,
    height: null,
    birthDate: new Date(),
    walk: function() {
        console.log(`${this.name} can walk!`);
    },
};
json = JSON.stringify(person2, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'David': value;
});
console.log(typeof(json), json);


    /**
     * Converts a JavaScript Object Notation (JSON) string into an object.
     * @param text A valid JSON string.
     * @param reviver A function that transforms the results. This function is called for each member of the object.
     * If a member contains nested objects, the nested objects are transformed before the parent object is.
     */
    //parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;

// 2. JSON to Object
// parse(json)
//console.clear();
json = JSON.stringify(person);
const obj = JSON.parse(json);
console.log(obj);

person.walk();
//obj.walk(); // causes an error for it does not have walk()

console.log(person.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // causes an error for the value of birthDate has been converted from a string.

const obj2 = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate());
