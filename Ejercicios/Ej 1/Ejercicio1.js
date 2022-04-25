let arr = [
    {"nombre": "Homero", "apellido": "Simpson", "nivel": 5},
    {"nombre": "Bob", "apellido": "Esponja", "nivel": 4},
    {"nombre": "Lisa", "apellido": "Simpson", "nivel": 2},
    {"nombre": "March", "apellido": "Simpson", "nivel": 4},
    {"nombre": "Santa", "apellido": "Claus", "nivel": 1},
    {"nombre": "Patricio", "apellido": "Estrella", "nivel": 2},
    {"nombre": "Bart", "apellido": "Simpson", "nivel": 3}
]
let json = JSON.parse(JSON.stringify(arr))
let table = document.getElementById('tbody')
let id = 1
let content = ''
function bgChange(id, nivel){
    if (nivel > 4) {
        document.getElementById('row-'+id).classList.toggle('bg-green-500')
    }
     else if (nivel < 3) {
        document.getElementById('row-'+id).classList.toggle('bg-red-500')
    }
    else {
        document.getElementById('row-'+id).classList.toggle('bg-yellow-500')
    }
}
json.forEach(item => {
    content += `
        <tr id="row-${id}" class="item hover:cursor-pointer" onclick="bgChange(${id}, ${item.nivel})" >
            <td class="border py-2">${item.apellido}</td>
            <td class="border py-2">${item.nombre}</td>
            <td class="border py-2">${item.nivel}</td>
        </tr>
    `
    id+=1
});
table.innerHTML = content
let items = Array.from(document.querySelectorAll('.item'))