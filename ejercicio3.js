const comicion = (venta) => {

    if(venta>150 & venta<=400){
       let ComicionTotal = venta * 0.1;
        return `su comicion es de ${ComicionTotal}` ;
    }
    else if(venta>400){
        let ComicionTotal = (venta * 0.09)+50 ;
        return `su comicion es de ${ComicionTotal}` ;

    }else{
        return "sin comicion";
    }
    
}





let ingreso = prompt("Ingrese la venta");

console.log(comicion(ingreso))