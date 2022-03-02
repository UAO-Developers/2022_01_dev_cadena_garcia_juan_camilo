function saludar(nombre){
    alert('hola' + nombre);
}

function saludar2(id){
    let obj = document.getElementById(id);
    console.log(id);
    console.log(obj);
    console.log(obj.innerText);
    document.getElementById("destino").innerHTML = "hola, " + obj.innerHTML; 
}