fetch("https://reqres.in/api/users?page=2").then((respuesta)=>{
        return respuesta.json();
}).then((datos)=>{
        console.log(datos)
}).catch((err)=>{
        console.error(err);
});

let nuevoUsuario = {
        name:"Gabo",
        job:"Boss"
}

let configuracion = {
        method:"POST",
        headers:{
                "Content-Type":"application/json"
        },
        body:JSON.stringify(nuevoUsuario),
};

fetch("https://reqres.in/api/users",configuracion)
.then((respuesta)=>{
        return respuesta.json();
})
.then((usuarioCreado)=>{
        console.log(usuarioCreado);
})
.catch((err) => console.log(err));


