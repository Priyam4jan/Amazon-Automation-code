//write a program to reverse then words in a sentence without changing their positions
let str ="What are you doing";
let splitStr=str.split(" ");
console.log(splitStr);
let revSen=[];
for(let i=0;i<splitStr.length;i++){
    let myStr="";
    for(j=splitStr[i].length-1;j>=0;j--){

        myStr+=splitStr[i][j];
    }
    revSen.push(myStr);
}
console.log(revSen.join(" "));