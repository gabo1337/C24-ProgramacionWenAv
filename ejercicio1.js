const tresvalores = (num1, num2 ,num3) => {

    var mayor = Math.max(num1, num2, num3);
    return mayor;
}
let arrNum = [];
for (i=0;i<3;i++){
    let ingreso = prompt("Ingrese un número o escriba x para dejar de ingresar números");
    arrNum.push(+ingreso);
}


console.log(tresvalores(arrNum[0], arrNum[1],arrNum[2]))


