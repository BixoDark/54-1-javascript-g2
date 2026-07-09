import GestorTareas from "./clases/GestorTareas.js";

const gestorTareas = new GestorTareas();




const crearFilaTabla = (tarea) => {

    let { id, descripcion, estado, fechaCreacion } = tarea;

    let estadoTexto = estado ? "Finalizada" : "Pendiente";
    return `
    <tr>
        <th scope="row">${id}</th>
        <td>${descripcion}</td>
        <td>${estadoTexto}</td>
        <td>${fechaCreacion}</td>
        <td>
            <button class="btn btn-warning" data-id="${id}">Cambiar estado</button>
            <button class="btn btn-danger" data-id="${id}">Eliminar</button>
        </td>
    </tr>
    `;
}


const cargarTareasTabla = (tareas) => {

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    };

    document.querySelector("#tabla-tareas tbody").innerHTML = acumuladorFilas;

    document.getElementById("cuerpo-tabla-placeholder").classList.add("d-none");
    document.getElementById("cuerpo-tabla").classList.remove("d-none");
}


//EVENTO FORMULARIO CREAR TAREAS

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        const dataFormulario = new FormData(formAddTarea);

        let descripcion = dataFormulario.get("descripcion");

        gestorTareas.crearTarea(descripcion);

        const tareas = gestorTareas.obtenerTareas();

        cargarTareasTabla(tareas);

       //LIMPIAR EL FORMULARIO AL FINAL
        formAddTarea.reset();

    } catch (error) {
        console.log(error);
    }
});
