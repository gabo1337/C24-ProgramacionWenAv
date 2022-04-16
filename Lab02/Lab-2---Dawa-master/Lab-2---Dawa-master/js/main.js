
let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas con salsa Barbeque",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];
let platos = document.getElementById("platos");
let mainContenido = document.getElementById("contenido");


platos.addEventListener("click",()=>{
    mainContenido.replaceChildren("")
    listaPlatillos.forEach((plato)=>{
        let platilloDom = document.createElement("div");
        platilloDom.classList.add("tarjeta");
    
        platilloDom.innerHTML = `
            <div class="imagen">
                <img src="${plato.imagen}" alt="${plato.nombre}">
            </div>
    
            <div class="texto">
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
            </div>
            <div class = "precio">
                <span>S/ ${plato.precio}</span>
                <button 
                        class="btn-agregar" 
                        data-id="${plato.id}">
                        Agregar
                    </button>
            </div>
    
        
        `;
    
        mainContenido.appendChild(platilloDom);
    
    })
let btnsAgregar = document.getElementsByClassName("btn-agregar");
let arrBtnsAgregar = Array.from(btnsAgregar);

arrBtnsAgregar.forEach((botonAgregar)=> {
    botonAgregar.addEventListener("click",()=>{
        let btnId = botonAgregar.getAttribute("data-id");
        let platoIdentificado = buscarPlatillo(btnId);
        anadirAcarrito(platoIdentificado);
        dibujarCarrito(carrito);
    });

});

const buscarPlatillo = (id) =>{
    let idNumber = parseInt(id);
    let platilloEncontrado = listaPlatillos.find((plato)=>{
        return plato.id===idNumber;
    } );
    console.log({platilloEncontrado});
    return platilloEncontrado;
};


});



//bebidas 
let listaBebidas = [
    {
        id: 7,
        nombre: "Coca cola",
        descripcion: "Bebida gasificada con azucar",
        precio: 2.50,
        stock: 10,
        imagen: "https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png",
    },
    {
        id: 8,
        nombre: "Inka kola",
        descripcion:
            "Bebida gasificada con sabor a jarabe",
        precio: 11.0,
        stock: 8,
        imagen: "https://www.chickenjaus.com.pe/wp-content/uploads/2020/04/1.5-azucar_1.jpg",
    },
    {
        id: 9,
        nombre: "KOLA ESCOSESA ",
        descripcion: "bebida gasificada",
        precio: 11.0,
        stock: 14,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/563350-1000-1000/20201595.jpg",
    },
];


let bebidas = document.getElementById("bebidas");


bebidas.addEventListener("click",()=>{
    mainContenido.replaceChildren("")
    listaBebidas.forEach((bebida)=>{
        let bebidaDom = document.createElement("div");
        bebidaDom.classList.add("tarjeta");
        bebidaDom.innerHTML = `
            <div class="imagen">
                <img src="${bebida.imagen}" alt="${bebida.nombre}">
            </div>
    
            <div class="texto">
                <h4>${bebida.nombre}</h4>
                <p>${bebida.descripcion}</p>
            </div>
            <div class = "precio">
                <span>S/ ${bebida.precio}</span>
                <button 
                        class="btn-agregar" 
                        data-idBebida="${bebida.id}">
                        Agregar
                    </button>
            </div>
        `;
        mainContenido.appendChild(bebidaDom);
    
    })

let btnsAgregar = document.getElementsByClassName("btn-agregar");
let arrBtnsAgregar = Array.from(btnsAgregar);

arrBtnsAgregar.forEach((botonAgregar)=> {
    botonAgregar.addEventListener("click",()=>{
        let btnIdbebida = botonAgregar.getAttribute("data-idBebida");
        let bebidaidentificada = buscarBebida(btnIdbebida);
        anadirAcarrito(bebidaidentificada);
        dibujarCarrito(carrito);
    });

});

const buscarBebida = (id) =>{
    let idNumber = parseInt(id);
    let bebidaEncontrada = listaBebidas.find((bebida)=>{
        return bebida.id===idNumber;
    } );
    console.log({bebidaEncontrada});
    return bebidaEncontrada;
};
});



const carrito = [];



const anadirAcarrito = (nuevoPlatillo) =>{
    let existe = carrito.findIndex((plato)=>{
        return plato.id === nuevoPlatillo.id;
    });

    if(existe===-1){
        nuevoPlatillo.cantidad = 1;
        carrito.push(nuevoPlatillo);
    }else{
        carrito[existe].cantidad++;
    }

}



let tbodyCarrito = document.getElementById("tbody-carrito");
let tbodyResumen = document.getElementById("tbody-resumen");

const dibujarCarrito=(carritoActualizado)=>{
    let trCarrito = ""
    carritoActualizado.forEach((item)=>{
        trCarrito=trCarrito+
        `
        <tr> 
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td>${item.precio * item.cantidad}</td>

        </tr>
        `

    });
    tbodyCarrito.innerHTML = trCarrito;

     // el segundo parámetro de el reduce (en este caso el 0) es para que el acumulador comience en 0, si no por defecto utilizará el primer valor del arreglo
     total = carritoActualizado.reduce((acumulador, plato) => {
        return acumulador + plato.precio * plato.cantidad;
    }, 0);
    tbodyResumen.innerHTML = `<tr>
                                <td>TOTAL</td>
                                <td>${total}</td>
                            </tr>`;
    
};




/**REQUERIDA
 * 1. mostrar estos platillos de forma identica a como lo hace preview
 *
 * //ESTO ES OPCIONAL, aqui tendrías que investigar
 * 2. OPCIONAL (cuando de click en el boton agregar hacer que eso se sume al carrito)
 * 	-tips getElementsByClassName, y pueden agregar attributos adicionales
 * 3. OPCIONAL (mostrar el resumen del carrito en la parte izquierda)
 * 4. OPCIONAL (guardar el resumen en el LocalStorage)
 */

//lo ponen el discord
