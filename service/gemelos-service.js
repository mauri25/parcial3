const listaClientes = () => fetch("http://localhost:3000/Gemelos").then((respuesta) =>  respuesta.json());



const crearCliente = (nombre, descripcion, precio) => {return fetch("http://localhost:3000/Gemelos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, descripcion, precio, id: uuid.v4()}),
});
}

const eliminarCliente = (id) => {
  console.log("Eliminar a => ", id);
  return fetch(`http://localhost:3000/Gemelos/${id}`, {
    method: "DELETE",
  })
}

const detalleCliente =  async (id)=>{
  const respuesta = await fetch(`http://localhost:3000/Gemelos/${id}`);
    return await respuesta.json();
};

const actualizarCliente = async (nombre, descripcion, precio, id)=>{
  try {
        const respuesta = await fetch(`http://localhost:3000/Gemelos/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, descripcion,precio })
        });
        return console.log(respuesta);
    } catch (err) {
        return console.error(err);
    }
}

export const gemelosServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

