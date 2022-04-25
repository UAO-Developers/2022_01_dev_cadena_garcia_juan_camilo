function primo(num){
    let contador = 0;
    let num = document.getElementById("numero").value;
    for(let i=1;i>=num; i++){
        if((num%i)==0){
            contador+=1;
        }
    }
    alert(i);
    if(contador==2){
        alert(num+"es un primo");
    }
    else{
        alert(num+" no es un primo");
    }
}

var bucle = function(){
    let arr = [1,4,5,6,7];
    for(let x in arr){
        console.log(x +":" + arr[x]);
    }
    for(let x=0; x < arr.length; x++){
        console.log(" bucle for normal" + x);
    }
}


function color(){
let am= document.getElementById("am");
let ro= document.getElementById("ro");
let az= document.getElementById("az");
const texto = '<a href="https//:www.google.com"target="_blank">Gogle</a>';
am.className = ro.className;
ro.className = az.className;
ro.style.fontSize = "20px";
}