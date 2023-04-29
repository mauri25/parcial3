import { gemelosServices } from "../service/gemelos-service";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    const precio = document.querySelector("[data-precio]").value
    console.log(nombre, "", descripcion, "", precio);
    gemelosServices.crearCliente(nombre, descripcion, precio).then((respuesta) => {
      alert("se ha realizado su compracon exito")
    }).cath(err => console.log(err));
    
});