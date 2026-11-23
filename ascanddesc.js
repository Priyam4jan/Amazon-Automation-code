/*
let arr=[30,40,10,20,0];

for(let i=0;i<arr.length;i++){

  for(let j=i+1;j<arr.length;j++){
    //Ascending if(arr[i]>arr[j])
    //Descending 
if(arr[i]<arr[j]){
let temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
}

}
    
}
console.log(arr);
*/

let arr=[99,25,1,50,178];
//ascending

 console.log(arr.sort((a,b)=>a-b));// this method modifies original array.
 console.log(arr);
 //descending
 console.log(arr.sort((a,b)=>b-a));// this method modifies original array
 console.log(arr);
 
 
 console.log(arr.sort());

 
 //ascending
 /*
 console.log(arr.toSorted((a,b)=>a-b));//this method doesnot modify the original array
 console.log(arr);
//descending
 console.log(arr.toSorted((a,b)=>b-a));//this method doesnot modify the original array
 console.log(arr);
 */