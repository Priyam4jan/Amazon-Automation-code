/*
for(let num=2;num<=100;num++){
    
let count =0;
    for(let j=1;j<=num;j++){

    if(num%j ===0){
        count++;
    }
}
    if(count ===2){
        console.log(num);
    }
      
}*/


for(let num=2;num<=100;num++){

    let isprime=true;

    for(let j=2;j<num;j++){
        if(num%j ==0){
         isprime=false;
         break;
        }
         
    }
    if(isprime){

        console.log(num);

    }

}