
import { Anuncio_Auto } from "./anuncio.js";
import { crearTabla } from "./dinamicas.js";
import { getAnunciosAxiosAsync, createAnuncioAxiosAsync, getAnuncioAjax , updateAnuncio, deleteAnuncioAxiosAsync } from "./controllers.js";
const $spinnerContainer = document.getElementById("spinner-container");

const $divTabla = document.getElementById("divTabla");

getAnunciosAxiosAsync();


window.addEventListener("click", (e) => {
 
    if (e.target.matches("td")) {
        console.log(e.target.parentElement.dataset.id);
        let id = e.target.parentElement.dataset.id;
        const anuncio = getAnuncioAjax(id);
        
    }
    else if (e.target.matches("#btnDelete")) {
        deleteAnuncioAxiosAsync(parseFloat($formulario.txtId.value));
        $formulario.txtId.value = "";
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        $formulario.reset();
    } else if (e.target.matches("#btnCancelar")) {
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        const $btnCancelar = document.getElementById("btnCancelar").classList.add("oculto");
        $formulario.reset();
    }
});

const $formulario = document.forms[0];

export function cargarFormulario(anuncio) {
    const { titulo, precio, baños, autos, habitaciones, txtId, descripcion, transaccion } = $formulario;
    txtId.value = anuncio.id;
    titulo.value = anuncio.titulo;
    descripcion.value = anuncio.descripcion;
    precio.value = anuncio.precio;
    baños.value = anuncio.baños;
    autos.value = anuncio.autos;
    habitaciones.value = anuncio.habitaciones;
    transaccion.value = anuncio.transaccion;

    const $submit = document.getElementsByClassName("submit")[0];
    $submit.value = "Modificar";
    const $btnEliminar = document.getElementById("btnDelete").classList.remove("oculto");
    const $btnCancelar = document.getElementById("btnCancelar").classList.remove("oculto");
}

$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Enviando");
    const { titulo, precio, baños, autos, habitaciones, txtId, descripcion, transaccion } = $formulario;    
    const anuncioAuxiliar = new Anuncio_Auto(txtId.value, titulo.value, transaccion.value, descripcion.value, precio.value, baños.value, habitaciones.value, autos.value);

    if (anuncioAuxiliar.id === '') {
        anuncioAuxiliar.id = Date.now();
        createAnuncioAxiosAsync(anuncioAuxiliar);
    }
    else {
        updateAnuncio(anuncioAuxiliar);
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        const $btnCancelar = document.getElementById("btnCancelar").classList.add("oculto");
        $formulario.txtId.value = "";
    }

    $formulario.reset();
})


export function actualizarTabla(data) {
    while ($divTabla.hasChildNodes()) {
        $divTabla.removeChild($divTabla.firstChild)
    }
    if (data) {
        $divTabla.appendChild(crearTabla(data));
    }
};


export function agregarSpinner() {
    let spinner = document.createElement("img");
    spinner.setAttribute("src", "./images/construccionSpinner.gif");
    spinner.setAttribute("style", "width:200px");
    spinner.setAttribute("alt", "Imagen spinner");
    return spinner;
}


export function eliminarSpinner() {    

    while ($spinnerContainer.hasChildNodes()) {
        $spinnerContainer.removeChild($spinnerContainer.firstElementChild);
    }
}

