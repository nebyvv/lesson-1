const array = [1,2,3,"123",false,undefined];
console.log("array",array[2]);

const array2 = new Array();
array2[0] = "hello";
array2[1] = " ";
array2[2] = "world"
console.log("array2",array2);

const result = array2.join("-");
console.log("result",result);

const string = "production";

const splittedArray = string.split("");
console.log("splittedArray",splittedArray);
const reversed = splittedArray.reverse();
console.log("reversed",reversed);

const finalResult = reversed.join("");
console.log("finalResult",finalResult);

const reversedString = string.split("").reverse().join("");


//////////////////////////////
const books = ["Harry Potter and Chamber of secrets"];
books.push("Witcher") //// metod dobavleniye kniq v konec massiva
books.unshift("AAA") // dobavlayet v nacalo massiva
books.pop();
books.shift();
console.log(books);

// Metod peredebora // forEach,map,reduce,find,some,every

array.forEach((element,index) =>{
console.log("index",index);
console.log("element",element);
});

const numberArray = [2,4,65,7];

const doubleArray = numberArray.map((element) =>{
    return element*2;
});
console.log(doubleArray);

const stringArray = ["five","one","windows"];

const newArray = stringArray.map((element) =>{
    return element.split("").reverse("").join("");
});
console.log(newArray);