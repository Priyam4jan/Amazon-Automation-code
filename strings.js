//Task1
let str = "Hello Javascript World";
//check if the string contains the word "Javascript"
console.log(str.includes("Javascript")); 
//find index of "World"
console.log(str.indexOf("World")); 
//Last index of "o"
console.log(str.lastIndexOf("o"));
//Task2
let str2="FrontendDeveloper";
//ExtraCT "Frontend" from the string
console.log(str2.substring(0,8)); 
//Extract "Developer" from the string
console.log(str2.substring(8)); 
//Extract first 5 characters from the string
console.log(str2.substring(0,5)); 
//Exract last 5 characters from the string
console.log(str2.substring(str2.length - 5));
console.log(str2.slice(-5));   

//Task3
let str3="apple,banana,orange";
//convert string to array
let arr = str3.split(",");
console.log(arr);
//count how many items are in the array
console.log(arr.length);
//convert array back to string
let newStr = arr.join(",");
console.log(newStr);
//Task4
let text="Javascript is easy to learn";
//find position of s
console.log(text.indexOf("s")); 
//find position of "easy"
console.log(text.indexOf("easy"));  
//check whether "Javascript" is present in the string
console.log(text.includes("Javascript")); 
//Task5
let message="I like Java.Java is easy";
//replace the first "Java" with "JavaScript"
console.log(message.replace("Java", "JavaScript")); 
//replace all occurrences of "Java" with "JavaScript"
console.log(message.replaceAll("Java", "JavaScript"));
//Task6
let text1 =" Javascript ";
//Remove spaces from the beginning 
console.log(text1.trimStart()); 
//Remove spaces from the end
console.log(text1.trimEnd());
//Check whether python exists in the string
console.log(text1.includes("python")); 