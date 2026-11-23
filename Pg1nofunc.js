let str="Hello Good Morning";

let word = "";
let result= ""; // olleH doog 
//length = 18
for(let i=0;i<=str.length;i++){

    //datatype and value check ===
    if(str[i] === " " || i === str.length){
        for(let j= word.length-1; j>=0;j--){
            result = result+word[j]
        }
        word = ""; 
        if(i != str.length){
            result += " ";
        }
    }
    else{
        word += str[i]
    }
}

console.log(result);

/* 
let s="hello world"
let result ='';
let word ='';

for(let i=0;i<s.length;i++){

const ch=s[i];
if(ch ===' '){
result+=word +' ';
word='';
}else{
    word=ch+word;//H eH leH 11eH
                   
}
}
result +=word;

console.log(result);
*/