//Birinchi masala
//let arr = ['a', 'b'];
//[b, a] = arr;
//console.log(a);
//console.log(b);

//Ikkinchi masala
//function extractMiddleElements(array) {
//    const length = array.length;
//    const middleIndexes = [];
//if (length % 2 == 0) {
//  middleIndexes.push(length/2 - 1, length/2);
//} else {
//  middleIndexes.push(Math.floor(length/2));
//}
//    const middleElements = middleIndexes.map(index => array[index]);
//    const evenLengthArray = array.filter((index) => index % 2 == 0);
//    const oddLengthArray = array.filter((index) => index % 2 != 0);
//return {
//  middleElements,
//  evenLengthArray,
//  oddLengthArray
//};
//}
//const array1 = [1, 2, 3, 4, 5];
//console.log(extractMiddleElements(array1));
//const array2 = [1, 2, 3, 4];
//console.log(extractMiddleElements(array2));

//Uchinchi masala
//let array = [1, 2, 3, 4, 5];
//let [a, body, ...res] = array;
//console.log(a);
//console.log(body);
//console.log(res);

//to'rtinchi masala
//let user = {person: {name: 'John', age: 30}};
//let { person: { name, age } } = user;
//console.log(name);
//console.log(age);

//Beshinchi masala
let obj = {};
let {name = 'Unknown', age = "Unknown"} = obj;
console.log(name);
console.log(age);