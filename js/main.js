


//Array con objetos
const remeras = [{
        id: 1,
        producto: "remera",
        precio: 2000,
        talle: ["S", "M", "L", "XL"],
        modelo: "con estampa",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 2,
        producto: "remera",
        precio: 1800,
        talle: ["S", "M", "L", "XL"],
        modelo: "algodon elastizado",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 3,
        producto: "remera",
        precio: 1600,
        talle: ["S", "M", "L", "XL"],
        modelo: "algodon",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 4,
        producto: "remera",
        precio: 1600,
        talle: ["M", "L", "XL"],
        modelo: "algodon",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 5,
        producto: "remera",
        precio: 1600,
        talle: ["S", "M", "L", "XL"],
        modelo: "lisa",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 6,
        producto: "remera",
        precio: 2200,
        talle: ["S", "M", "L", "XL"],
        modelo: "manga larga",
        color: ["roja", "negra", "blanca", "azul"]
    }
];

const camperas = [{
        id: 1,
        producto: "campera",
        precio: 6000,
        talle: ["S", "M", "L", "XL"],
        modelo: "con plumas",
        color: ["negra", "azul"]
    },
    {
        id: 2,
        producto: "campera",
        precio: 6000,
        talle: ["S", "M", "L", "XL"],
        modelo: "con plumas",
        color: ["negra", "verde"]
    },
    {
        id: 3,
        producto: "campera",
        precio: 8000,
        talle: ["S", "M", "L", "XL"],
        modelo: "parka",
        color: ["negra", "azul"]
    },
    {
        id: 4,
        producto: "campera",
        precio: 7500,
        talle: ["M", "L", "XL"],
        modelo: "con peluche",
        color: ["negra", "azul"]
    }
];

const camisas = [{
        id: 1,
        producto: "camisa",
        precio: 4000,
        talle: ["S", "M", "L", "XL"],
        modelo: "lisa",
        color: ["negra","azul","blanca"]
    },
    {
        id: 2,
        producto: "camisa",
        precio: 4500,
        talle: ["S", "M", "L", "XL"],
        modelo: "rallada",
        color: ["negra","blanca"]
    },
    {
        id: 3,
        producto: "camisa",
        precio: 4200,
        talle: ["S", "M", "L", "XL"],
        modelo: "lisa",
        color: ["negra","blanca"]
    }
]
const catalogo = [remeras,camperas,camisas];


/* console.log(productos[3].talle)// Aca me talle solamente los talles del id 4 */
//Aca creo con arrow function para generar un msj
let preguntaBienvenida = "";
//funcion con la primera pregunta
function preguntaUno() {
    preguntaBienvenida = prompt("Bienvenidos a Urbanos Clothing \n Estos son los productos que tenemos por el momento: \n -buzos \n -camperas \n -remeras \n -camisas \n ¿Que producto desea ver? \n -salir") ;
}


//COMIENZA EL PROGRAMA


while (preguntaBienvenida !== "salir" || preguntaBienvenida !== "SALIR") {
    preguntaUno();
    if (preguntaBienvenida === "remeras" || preguntaBienvenida === "REMERAS" || preguntaBienvenida === "remera" || preguntaBienvenida === "REMERA") {
        const rem = catalogo.filter(el => el.producto === "remera");
        alert(rem)
    } else if (preguntaBienvenida === "buzos" || preguntaBienvenida === "BUZOS"
    || preguntaBienvenida === "buzo" || preguntaBienvenida === "BUZO") {
        alert("buzo");
        break;
    }else if (preguntaBienvenida === "camisas" || preguntaBienvenida === "CAMISAS" || preguntaBienvenida === "camisa" || preguntaBienvenida === "CAMISA") {
        alert("camisa");
        break;
    }else if (preguntaBienvenida === "camperas" || preguntaBienvenida === "CAMPERAS" || preguntaBienvenida === "campera" || preguntaBienvenida === "CAMPERA") {
        alert("campera");
        break;
    } else if (preguntaBienvenida === "salir" || preguntaBienvenida === "SALIR") {
        alert("Saludos, vuelva cuando quiera ver algun producto");
        break;
    } else {
        alert("Opcion incorrecta");

    }
}