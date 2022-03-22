/**
 * Cree una función que reciba un número entero J y un arreglo de enteros, la función debe retornar el arreglo con los enteros desplazados hacia la izquierda según el entero J.
 *
 * Ej.
 * J = 2
 * arr = [1,2,3,4,5]
 * RES: [3,4,5,1,2]
 */
 const moverPosiciones = (j, arreglo) => {

    let nuevoArray = [];

    for (i=0;i<arreglo.length;i++){
        if(j>i){

            let eliminar = arreglo.shift();
            nuevoArray.push(eliminar);

        }
        
    }

    return arreglo.concat(nuevoArray);

};




let j = +prompt("Ingrese el desplazamiento")
/**
 * Hacer que el usuario ingrese numeros y tener en un arreglo
 */
let continuar = true;
let arrNum = [];
do {
    let ingreso = prompt("Ingrese un número o escriba x para dejar de ingresar números");
    if (ingreso === "x") {
        continuar = false;
    } else {
        arrNum.push(+ingreso);
    }
} while (continuar === true);
console.log(moverPosiciones(j, arrNum))