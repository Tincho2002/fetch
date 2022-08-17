const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const selectMarca = document.querySelector('#marca');
const btnBuscar = document.querySelector('#buscar');
const searchBtn = document.querySelector('#search');


function filtrarMarca(array) {
    let marca = selectMarca.value;
    if (!marca) {
        return array;
    } else {
        return array.filter((item) => item.nombre == marca);
    }
}

function crearHTML(array) {
    contenedor.innerHTML = '';
    container.innerHTML = '';
    array.forEach((producto) => {
        const tarjeta = `
            <div class="col">
                <div class="card h-100">
                    <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Tipo: ${producto.tipo}</p>
                        <p class="card-text">Marca: ${producto.nombre}</p>
                        <p class="card-text">Precio: ${producto.precio}</p>
                        <p class="card-text">ID: ${producto.id}</p>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += tarjeta;
    })
}

/*btnBuscar.addEventListener('click', () => {
    fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes/')
        .then((response) => response.json())
        .then((data) => {
            crearHTML(filtrarMarca(data));
        })
})*/

/*btnBuscar.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            crearHTML(filtrarMarca(data));
        })
})*/


function nombreFilter(array) {
    let nombre = selectMarca.value;
    if (!nombre) {
        return array;
    } else {
        return array.filter((e) => e.nombre == marca);
    }

}

function createHTML(array) {
    contenedor.innerHTML = ''
    container.innerHTML = ''
    array.forEach((producto) => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${producto.foto}" class="card-img-top" alt="${producto.name}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Tipo: ${producto.tipo}</p>
                        <p class="card-text">Marca: ${producto.nombre}</p>
                        <p class="card-text">Precio: ${producto.precio}</p>
                        <p class="card-text">ID: ${producto.id}</p>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}

async function getData() {
    const getData = await fetch('./js/data.json', {
        'mode': 'no-cors',
        'headers': { 'Access-Control-Allow-Origin': '*', }
    });
    //const data = await response.json();
    console.log("---------------");
    console.log(getData);
    console.log("---------------");
    createHTML(nombreFilter(getData));
}

searchBtn.addEventListener('click', () => {
    getData();
})

//Petición con método POST
/*fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Mi primer post',
            body: 'Esto es un posteo de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((data) => console.log(data));*/