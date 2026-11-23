
const rows=5;

for(let i=rows;i>=1;i--){
    let line="";
    for(let space=0;space < rows-i;space++){
        line+=" ";
    }
    for(let star=0;star<2*i-1;star++){
        line+="*";
    }
    console.log(line);
}
