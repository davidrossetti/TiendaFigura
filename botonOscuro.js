// ///////////////BOTON Y MANTENIMIENTO DEL MODO OSCURO///
const botonModos= document.querySelector("#claro-oscuro")
const body=document.querySelector(".modo-claro")

///Se guarda un valor en localStore, si es verdadero,se 
// mantiene el modo oscuro(por si se reinicia el navegador).

function guardadoPaginaModoOscuro(){
  if (localStorage.getItem("paginaModoOscuro")==="true") {
    body.classList.toggle("modo-oscuro")
    botonModos.textContent="Modo claro"
  }
}
//Boton para cambio al modo oscuro, se guarda un valor en localStore
//para guardar el cambio, si se reinicia el navegador.

botonModos.onclick=() => {
    body.classList.toggle("modo-oscuro")
    if(body.className ==="modo-claro"){
        botonModos.textContent="Modo Oscuro"
        localStorage.setItem("paginaModoOscuro",false)
    }else{
        botonModos.textContent="Modo claro"
        localStorage.setItem("paginaModoOscuro",true)
               
    }
    
}
//Ejecuta el metodo de guardado
guardadoPaginaModoOscuro()