

//muestra todo el array en consola invocando la funcion peticion Ap:
async function peticionApi() {
    const respuesta = await fetch("https://63c8559a075b3f3a91df17c0.mockapi.io/productos");
    const data = await respuesta.json();
      const filtroCategoriaFiguraArticulada=data.filter( elemento =>
      elemento.categoria =="merchandising"
      
      );
      
  
    productosInsertados(filtroCategoriaFiguraArticulada)
  }
  peticionApi()
  //
  
  
  //muestra en el HTML los distintos elementos dentro del mockup en la clase contenedor
  const productosInsertados =(productosMockup) =>{
    
  
    const arrayReducido = productosMockup.reduce ((acc, elemento)=>{
      if (elemento.enStock==true) {
        elemento.enStock="disponible"
      } else {
        elemento.enStock="sin stock"
      }
      
      return acc += `
      <article class="casillaGeneralItem">
  
  <div class="imagenItem">
      <img src="https://bbts1.azureedge.net/images/p/thumb/2021/09/ca3f2afc-bb2d-4bba-a503-4282fde79c32.png"
          alt="">
  </div>
  
  <div class="descripcion">
      <div class="productoNombre">
          <p> ${elemento.producto}</p>
      </div>
      <div class="productoPrecio">
          <p>${elemento.precioUSD}</p>
      </div>
  
      
  
  </div>
  
  <div class="estadoYconsulta">
      <div>  ${elemento.enStock}</p>
      <button class="boton-card" id="boton-${elemento.id}">
      Añadir al carro
      </button>
  </div>
      
  
  </div>
  </article>
  
       `
    } , "")
  
    document.querySelector(".contenedor").innerHTML = arrayReducido
  }
  
  
  //
  
  
  
  
  
  
  
  
  //SELECION DE BUSQUEDA, codigo que muestra una parte, en este caso producto en la consola
  fetch("https://63c8559a075b3f3a91df17c0.mockapi.io/productos")
  .then((respuesta) => respuesta.json() )
  .then((informacion)=>{
    informacion.forEach(element =>{
      if(element.categoria=="figura articulada"){
       
      }
    
    })
  })
  
  
  
  const carrito =[]
  
  function aniadirAlCarro() {
    const añadirBoton=document.querySelectorAll(".boton-card")
   
    añadirBoton.forEach(elemento =>{
      elemento.onclick = () => {
        console.log(elemento.id)
      }
  
    })
  }
  aniadirAlCarro()