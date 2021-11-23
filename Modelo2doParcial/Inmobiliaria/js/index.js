import { crearPublicidad } from "./dinamicas.js";

const $divTabla = document.getElementById("divTabla");
const URL = "http://localhost:3000/anuncios";
const $spinnerContainer = document.getElementById("spinner-container");

const getAnunciosAxios = () => {
    $spinnerContainer.appendChild(agregarSpinner());
    axios.get(URL)
        .then((res) => {
            const { data } = res;            
            crearPublicidad(data)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            eliminarSpinner();
        });
};
getAnunciosAxios();


function agregarSpinner() {
    let spinner = document.createElement("img");
    spinner.setAttribute("src", "./images/construccionSpinner.gif");
    spinner.setAttribute("style", "width:200px");
    spinner.setAttribute("alt", "Imagen spinner");
    return spinner;
}


function eliminarSpinner() {

    while ($spinnerContainer.hasChildNodes()) {
        $spinnerContainer.removeChild($spinnerContainer.firstElementChild);
    }
}
