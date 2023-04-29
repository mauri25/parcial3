import { gemelosServices } from "../service/gemelos-service";

const crearNuevaLinea = (nombre,descripcion, precio, id) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${descripcion}</td>
    <td>${precio}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
btn.addEventListener("click", () => {
    const id = btn.id;
    gemelosServices.eliminarCliente(id).then((respuesta) => {console.log(respuesta)}).catch((err) => ("Ocurrio un error"));
});
return linea;
};

const table = document.querySelector("[data-table]")

gemelosServices.listaClientes().then((data) => {
    data.forEach(({nombre,descripcion, precio, id}) => {
        const nuevaLinea =  crearNuevaLinea(nombre,descripcion, precio, id);
       table.appendChild(nuevaLinea);
     });
    
}).catch((err) => alert("Ocurrio un error"));

