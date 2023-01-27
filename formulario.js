//Dom
const formularioDato= document.querySelector("#formulario")
let inputUsuarioNombre =document.querySelector("#input-usuario")
let inputUsuarioMail =document.querySelector("#input-mail")
let inputUsuarioTelefono =document.querySelector("#input-telefono")
let inputUsuarioTextoComentario=document.querySelector("#input-comentario")

//variables
let usuarioNombre = false;
let mail = false;
let telefono = false;
let casillaTexto = false;


//Al presionar el boton de enviar, se ejecutan las funciones:
formularioDato.onsubmit =(evento) =>{
evento.preventDefault()
validacionArroba(inputUsuarioMail.value)
validezLongitudCaracteres(inputUsuarioTextoComentario.value)
validezTelefono(inputUsuarioTelefono.value)
validezNombre(inputUsuarioNombre.value)
validezTotal()
}

//Si tiene caracter numero, lanza alerta.
//Si el nombre es valido, el valor usuario nombre pasa a verdadero.
 function validezNombre(nombreIngresado){
  const numeros = /[0,1,2,3,4,5,6,7,8,9]/;
  let caracterNumero = false;
  for (let i = 0; i < nombreIngresado.length; i++) {
      if (nombreIngresado[i].match(numeros)) {
        caracterNumero=true;
      } 
    }

  if (caracterNumero == true) {
    alert(
      "Nombre invalido.Verifique que no tenga numeros"
    )
    
  }
  if(caracterNumero == false){
      alert(
        "Nombre valido"  
      )
      usuarioNombre =true;   
   }
      
 }

//Verifica si el mail de  usuario tiene @.
//Si el mail es valido, el valor mail pasa a verdadero.
function validacionArroba(usuarioConEmail) {
   let verificacionArroba= false;
  for (let i = 0; i < usuarioConEmail.length; i++) {
    if (usuarioConEmail[i] =="@") {
        verificacionArroba=true;
    }
  }
  if(verificacionArroba==true){
    alert("Casilla de mail correcta")
    mail= true;
  }else{
    alert("Casilla de mail incorrecta, agregar arroba(@)")
  }
}

// Verifica si longitud de texto comentario es mayor a 150 caracteres.
//Si es valido, el valor casillaTexto pasa a verdadero.
function validezLongitudCaracteres(texto) {
  if (texto.length > 150) {
    alert("Texto ingresado posee mas de 150 caracteres");
  }
  else{
    casillaTexto= true;
  }
}

//Verifica si el telefono ingresado esta compuesto de numeros.
//Si es valido, el valor telefono pasa a verdadero.
function validezTelefono(telefonoIngresado) {
  const numeros = /[0,1,2,3,4,5,6,7,8,9]/;
  let caracterNumero = false;
  for (let i = 0; i < telefonoIngresado.length; i++) {
    if (telefonoIngresado[i].match(numeros)) {
      caracterNumero = true;
    }
  }
  if (caracterNumero == false) {
    alert(
      "Telefono ingresado invalido"
    )
  } 
  if (caracterNumero == true) {
    telefono=true;
  }
}

//si el resultado de todas las funciones son true, lanza mensaje de alerta,
//indicando que los datos son validos, sino indica completar formulario.
function validezTotal(){
  if (usuarioNombre & mail & telefono & casillaTexto ==true) {
    alert(
      "formulario enviado"
    ) 
  }
  if(usuarioNombre || mail || telefono || casillaTexto ==false){
    alert(
      "Formulario con datos incorrectos o incompleto"
    )
  }
}
 


