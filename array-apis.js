// Q1. make a string out of an array

    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
     */
    //join(separator?: string): string;
    
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}
  
  // Q2. make an array out of a string
/**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    // split(separator: string | RegExp, limit?: number): string[];

  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',',3);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  /**
     * Reverses the elements in an Array.
     */
    //reverse(): T[];

  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  /**
     * Returns a section of an array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
     */
    //slice(start?: number, end?: number): T[];
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90

  /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    //find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    //find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

  {
      const result = students.find(function(student, index){
          console.log(student, index);
          return student.score === 90;
      });
      console.log('Q',result);

      //const result = students.find((student)=>student.score === 90);
      //console.log(result);
  }
  
  // Q6. make an array of enrolled students

  /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    //filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

  {
      const result = students.filter((student) => student.enrolled === true);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  {
      const result = students.map((student)=>student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param callbackfn A function that accepts up to three arguments. The some method calls
     * the callbackfn function for each element in the array until the callbackfn returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    //some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  {
      //console.clear();
      const result = students.some((student) => student.score<50);
      console.log(result);

      const result2 = students.every((student) => student.score<50);
      console.log(result2);
  }
  
  // Q9. compute students' average score
  /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    //reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  {
      //console.clear();
      const result = students.reduce((prev, curr) => {
          console.log(prev, curr.score); 
          return prev+curr.score;
      }, 0);
      console.log(result/students.length);

      const result2 = students.reduce((prev, curr) => prev+curr.score, 0);
      console.log(result2/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
        .map((student)=>student.score)
        .filter(score =>score >= 50)
        .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  /**
     * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    //sort(compareFn?: (a: T, b: T) => number): this;
  {
    const result = students
        .map((student)=>student.score)
        .sort((a,b)=>b-a)
        .join();
    console.log(result);
  }