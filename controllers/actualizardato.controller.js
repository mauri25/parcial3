import { gemelosServices } from "../service/gemelos-service";

const formulario = document.querySelector("[data-form]"); 

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

 if (id === null) {
    window.location.href = "/screens/error.html"
 }

const nombre = document.querySelector("[data-nombre]");
const descripcion = document.querySelector("[data-descripcion]");
const precio = document.querySelector("[data-precio]");

try {
    const gemelo = await gemelosServices.detalleCliente(id)
    if (gemelo.nombre && gemelo.descripcion && gemelo.precio) {
        nombre.value = gemelo.nombre;
        descripcion.value = gemelo.descripcion; 
        precio.value = gemelo.precio;
    }else{
        throw new Error();
    }

} catch (error) {
   console.log("Catch Error", error); 
   alert("Hubo un error");
   window.location.href = "/screens/error.html"
}



    
};

obtenerInformacion();

formulario.addEventListener("submit",  (evento) => {
evento.preventDefault();
const url = new URL(window.location);
const id = url.searchParams.get("id");

const nombre = document.querySelector("[data-nombre]").value;
const descripcion = document.querySelector("[data-descripcion]").value;
const precio = document.querySelector("[data-precio]").value;
console.log(nombre, "-", descripcion, "-", precio);
clientServices.actualizarCliente(nombre, descripcion, precio, id ).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
})
}  )
