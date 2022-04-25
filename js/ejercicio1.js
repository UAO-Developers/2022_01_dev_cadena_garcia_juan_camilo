//console.log('correcto')

document.querySelector('#boton').addEventListener('click',tdatos);

function tdatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','../json/ejercicio1.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status ==200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos){
            res.innerHTML += `
            <tr>
            <td>${item.nombre}</th>
            <td>${item.apellido}</th>
        </tr>
            `
            }
            if(${item.nivel} < 3 )
        
        }
    }
}

function colordatos(){
    
}