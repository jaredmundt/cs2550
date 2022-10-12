const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

array1[1] = 'z';

console.log(array1);
array1 = ['a', 'c', 'g'];
console.log(array1);
console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
