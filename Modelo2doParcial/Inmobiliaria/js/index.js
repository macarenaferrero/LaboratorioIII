import { crearPublicidad } from "./dinamicas.js";

const $divTabla = document.getElementById("divTabla");
const URL = "http://localhost:3000/anuncios";
const $spinnerContainer = document.getElementById("spinner-container");

const getAnunciosAxios = () => {
    axios.get(URL)
        .then((res) => {
            const {data} = res; 
            crearPublicidad(data)
        })
        .catch((err) => {
            console.error(err)
        });
};
getAnunciosAxios();

