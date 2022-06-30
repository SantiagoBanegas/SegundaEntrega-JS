const productos1 = [
    {nombre: "Zapatilla Nike", talle: 36, precio: "$10.000"},
    {nombre: "Zapatilla Nike", talle: 37, precio: "$10.500" },
    {nombre: "Zapatilla Nike", talle: 38, precio: "$11.000" },
    {nombre: "Zapatilla Nike", talle: 39, precio: "$12.000" },
    {nombre: "Zapatilla Nike", talle: 40, precio: "$12.500" },
    {nombre: "Zapatilla Nike", talle: 41, precio: "$13.000" },
    {nombre: "Zapatilla Nike", talle: 42, precio: "$13.500" },
    {nombre: "Zapatilla Nike", talle: 43, precio: "$13.500" },
    {nombre: "Zapatilla Nike", talle: 44, precio: "$15.000" },
    {nombre: "Zapatilla Nike", talle: 45, precio: "$15.000" },
];

const productos2 = [
    {nombre: "Zapatilla Adidas", talle: 36, precio: "$11.000" },
    {nombre: "Zapatilla Adidas", talle: 37, precio: "$11.500" },
    {nombre: "Zapatilla Adidas", talle: 38, precio: "$12.000" },
    {nombre: "Zapatilla Adidas", talle: 39, precio: "$12.500" },
    {nombre: "Zapatilla Adidas", talle: 40, precio: "$13.000" },
    {nombre: "Zapatilla Adidas", talle: 41, precio: "$13.500" },
    {nombre: "Zapatilla Adidas", talle: 42, precio: "$14.000" },
    {nombre: "Zapatilla Adidas", talle: 43, precio: "$14.000" },
    {nombre: "Zapatilla Adidas", talle: 44, precio: "$16.000" },
    {nombre: "Zapatilla Adidas", talle: 45, precio: "$16.000" },
];

const productos3 = [
    {nombre: "Zapatilla Puma", talle: 36, precio: "$8.000" },
    {nombre: "Zapatilla Puma", talle: 37, precio: "$8.500" },
    {nombre: "Zapatilla Puma", talle: 38, precio: "$8.500" },
    {nombre: "Zapatilla Puma", talle: 39, precio: "$9.000" },
    {nombre: "Zapatilla Puma", talle: 40, precio: "$9.500" },
    {nombre: "Zapatilla Puma", talle: 41, precio: "$10.000" },
    {nombre: "Zapatilla Puma", talle: 42, precio: "$10.500" },
    {nombre: "Zapatilla Puma", talle: 43, precio: "$10.700" },
    {nombre: "Zapatilla Puma", talle: 44, precio: "$12.000" },
    {nombre: "Zapatilla Puma", talle: 45, precio: "$12.500" },
];


// let filtrados = productos.filter(elemento => elemento.talle === talleIngresado);
// console.log(filtrados)
// let cat = document.getElementById("catalogo");
// let talleIngresado = Number(prompt("Que talle busca?"));


let inputUno = document.getElementById("input1");
inputUno.addEventListener("submit", respuestaClickUno);
let buttonUno = document.getElementById("boton1");
buttonUno.addEventListener("click", respuestaClickUno );
function respuestaClickUno() {
    
switch (inputUno){
    case 36:
        catalogo.innerHTML = `<ul>
                                <li>${productos1.nombre}</li>
                                <li>${productos1.talle}</li>
                                <li>${productos1.precio}</li>
                            </ul>`;
break;
    case 37:
        catalogo.innerHTML = "<ul><li>Talle 37</li></ul>";
break;
    case 38:
        catalogo.innerHTML = "<ul><li>Talle 38</li></ul>";
break;
    case 39:
        catalogo.innerHTML = "<ul><li>Talle 39</li></ul>";
break;
    case 40:
        catalogo.innerHTML = "<ul><li>Talle 40</li></ul>";
break;
    case 41:
        catalogo.innerHTML = "<ul><li>Talle 41</li></ul>";
break;
    case 42:
        catalogo.innerHTML = "<ul><li>Talle 42</li></ul>";
break;
    case 43:
        catalogo.innerHTML = "<ul><li>Talle 43</li></ul>";
break;
    case 44:
        catalogo.innerHTML = "<ul><li>Talle 44</li></ul>";
break;
    case 45:
        catalogo.innerHTML = "<ul><li>Talle 45</li></ul>";
break;

    default:
        catalogo.innerHTML = "<p>No disponemos este talle</p>"
    break;
}
}

let inputDos = document.getElementById("input2")
inputDos.addEventListener("submit", respuestaClick2);
let buttonDos = document.getElementById("boton2");
buttonDos.addEventListener("click", respuestaClick2)
function respuestaClick2() {
    
switch (inputDos){
    case 36:
        catalogo2.innerHTML = "<ul><li>Talle 36</li></ul>";
break;
    case 37:
        catalogo2.innerHTML = "<ul><li>Talle 37</li></ul>";
break;
    case 38:
        catalogo2.innerHTML = "<ul><li>Talle 38</li></ul>";
break;
    case 39:
        catalogo2.innerHTML = "<ul><li>Talle 39</li></ul>";
break;
    case 40:
        catalogo2.innerHTML = "<ul><li>Talle 40</li></ul>";
break;
    case 41:
        catalogo2.innerHTML = "<ul><li>Talle 41</li></ul>";
break;
    case 42:
        catalogo2.innerHTML = "<ul><li>Talle 42</li></ul>";
break;
    case 43:
        catalogo2.innerHTML = "<ul><li>Talle 43</li></ul>";
break;
    case 44:
        catalogo2.innerHTML = "<ul><li>Talle 44</li></ul>";
break;
    case 45:
        catalogo2.innerHTML = "<ul><li>Talle 45</li></ul>";
break;

    default:
        catalogo2.innerHTML =  "<p>No disponemos este talle</p>"                                       
        break;
}

}




let inputTres = document.getElementById("input3")
inputTres.addEventListener("submit", respuestaClick3);
let buttonTres = document.getElementById("boton3");
buttonTres.addEventListener("click", respuestaClick3)
function respuestaClick3() { 
    
switch (inputTres){
    case 36:
        catalogo3.innerHTML = "<ul><li>Talle 36</li></ul>";
break;
    case 37:
        catalogo3.innerHTML = "<ul><li>Talle 37</li></ul>";
break;
    case 38:
        catalogo3.innerHTML = "<ul><li>Talle 38</li></ul>";
break;
    case 39:
        catalogo3.innerHTML = "<ul><li>Talle 39</li></ul>";
break;
    case 40:
        catalogo3.innerHTML = "<ul><li>Talle 40</li></ul>";
break;
    case 41:
        catalogo3.innerHTML = "<ul><li>Talle 41</li></ul>";
break;
    case 42:
        catalogo3.innerHTML = "<ul><li>Talle 42</li></ul>";
break;
    case 43:
        catalogo3.innerHTML = "<ul><li>Talle 43</li></ul>";
break;
    case 44:
        catalogo3.innerHTML = "<ul><li>Talle 44</li></ul>";
break;
    case 45:
        catalogo3.innerHTML = "<ul><li>Talle 45</li></ul>";
break;

    default:
        catalogo3.innerHTML = "<p>No disponemos este talle</p>"
        break;
}
}


