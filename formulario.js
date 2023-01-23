const formularioDato= document.querySelector("#formulario")
let inputUsuarioNombre =document.querySelector("#input-usuario")
let inputUsuarioMail =document.querySelector("#input-mail")
let inputUsuarioTelefono =document.querySelector("#input-telefono")
let inputUsuarioTextoComentario=document.querySelector("#input-comentario")

formularioDato.onsubmit =(evento) =>{
evento.preventDefault()
validacionArroba(inputUsuarioMail.value)
validezLongitudCaracteres(inputUsuarioTextoComentario.value)
}


//Verifica si el mail de  usuario tiene @:
function validacionArroba(usuarioConEmail) {
   let verificacionArroba= false;
  for (let i = 0; i < usuarioConEmail.length; i++) {
    if (usuarioConEmail[i] =="@") {
        verificacionArroba=true;
    }
  }
  if(verificacionArroba==true){
    alert("Casilla de mail correcta")
  }else{
    alert("Casilla de mail incorrecta, agregar arroba(@)")
  }
}

//Tira una alerta si longitud de texto comentario es mayor a 150 caracteres:
function validezLongitudCaracteres(texto) {
  if (texto.length > 150) {
    alert("Texto ingresado posee mas de 150 caracteres");
  }
}

//Verifica si dentro de la  contraseña tiene algun numero:
function validezTelefono(telefono) {
  const numeros = /[0,1,2,3,4,5,6,7,8,9]/;
  let numeroValido=false;
  let letraIngresada=false;
  for (let i = 0; i < telefono.length; i++) {
    if (telefono[i].match(numeros)) {
      numeroValido = true;
    }else{
        letraIngresada=true;
    }
  }
  if (letraIngresada == true || numeroValido== false) {
    alert(
      "Numero de telefono invalido"
    )
}
    
}
