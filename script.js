let API = 'https://rickandmortyapi.com/api/character';
let personaje = document.getElementById("input-buscador");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let busqueda = personaje.value.toLowerCase();

fetch (API + `?name=${busqueda}`)
.then (response => {
    if (response.ok) {
        return response.json();        
    }else {  
        throw new Error("No se encontro el personaje buscado");
    }
})
        .then (data =>{
        showInfo(data);
 })
 .catch(error => {
    console.error(error);
    clearInfo();
 });
});

function showInfo(array) {
    if (array.results.length>0) {
        const result= array.results[0];
        document.getElementById("name").innerHTML = "Nombre: " + result.name;
        document.getElementById("location").innerHTML = "Ubicación: " + result.location.name;
        document.getElementById("status").innerHTML = "Estado: " + result.status;
        document.getElementById("species").innerHTML = "Especie: " + result.species;
        document.getElementById("img").innerHTML = `<img src="${result.image}" alt="${result.name}">`;    
    } else {
        clearInfo();
}
}

function clearInfo() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("location").innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("species").innerHTML = "";
    document.getElementById("img").innerHTML = "";
}

