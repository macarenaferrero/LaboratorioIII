import AnuncioAuto from "./Anuncio.js";

let idSeleccionado = "";

const anuncios = JSON.parse(localStorage.getItem("lista")) || [];

window.addEventListener("load", ()=>{
    console.log("Estoy aca");

    document.forms[0].addEventListener("submit", handlerSubmit);

    document.addEventListener("click", handlerClick);


    if(anuncios.length > 0){
        handlerLoadList(anuncios);
    }

});

// No tocar


function handlerLoadList(e){
    renderizarLista(crearTabla(anuncios), document.getElementById("divLista"));
}

// No tocar


function renderizarLista(lista, contenedor){

    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }

    if(lista){
       contenedor.appendChild(lista); 
    }
}

// No tocar

export const crearTabla = (data)=>{

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const cabecera = document.createElement("tr");

    //Cargo el thead
    for (const key in data[0]) {
        
        if(key !== "id")
        {    
        const th = document.createElement("th");
        const contenido = document.createTextNode(key);    
        th.appendChild(contenido);
        cabecera.appendChild(th)
        }
    }
    thead.appendChild(cabecera);
    tabla.appendChild(thead);

    //Cargo el tbody
    data.forEach((element, index) => {
        const tr = document.createElement("tr");
        for (const key in element) {
            if(key === "id"){
                tr.setAttribute("data-id",element[key]);
            }
            else{            
           const td = document.createElement("td");
           td.textContent = element[key];
           td.addEventListener("click", handlerClick());
           tr.appendChild(td);
        }
    }
        tbody.appendChild(tr);
        if(index % 2)
        {
            tr.setAttribute("style", "background-color: #ccc");
        }
        
    });
    tabla.appendChild(tbody);

    return tabla;

}

function handlerClick(e){

    if(e.target.matches("td")){
        let id = e.target.parentNode.dataset.id;
        idSeleccionado = id;
        console.log("EL ID SELECCIONADO ES : " + id);
        cargarFormulario(idSeleccionado);
        
    }else if (e.target.matches("#btnEliminar")) {
        let id = document.forms[0].id.value;

        if (confirm("Confirma la eliminacion ?")){

            agregarSpinner();
            setTimeout(()=>{

                let index = anuncios.findIndex((el)=>el.id ==id);
                anuncios.splice(index,1);
                almacenarDatos(anuncios); 
              
                eliminarSpinner();
            },2000);
            
        }
        limpiarFormulario(document.forms[0]);
    }
}


function handlerSubmit(){

    if(  document.getElementById("btnSubmit").value == "Modificar"){
        const anuncioEditado = new AnuncioAuto(
            parseInt(id.value),
            titulo.value,
            transaccion.value,
            descripcion.value,
            precio.value,
            num_puertas.value,
            num_kmh.value,
            potencia.value

        );
        
        if (confirm("Confirma Modificacion?")){
            agregarSpinner();
            setTimeout(()=>{
                modificarAnuncio(anuncioEditado);
                eliminarSpinner();
            },2000);
        }

    }else if (  document.getElementById("btnSubmit").value = "Guardar"){

        console.log("Dando de alta");

        const nuevoAnuncio = new AnuncioAuto(
            Date.now(),
            frm.titulo.value,
            frm.transaccion.value,
            frm.descripcion.value,
            frm.precio.value,
            frm.num_puertas.value,
            frm.num_kmh.value,
            frm.potencia.value
        );

            agregarSpinner();
            setTimeout(()=>{
                altaAnuncio(nuevoAnuncio);
                eliminarSpinner();
            },2000);

        }
        limpiarFormulario(e.target);
}


// No tocar


function agregarSpinner(){
    let spinner = document.createElement("img");
    spinner.setAttribute("src","831.gif");
    spinner.setAttribute("alt","Imagen spinner");
    document.getElementById("spinner-container").appendChild(spinner);
}

// No tocar

function eliminarSpinner(){
    document.getElementById("spinner-container").innerHTML="";
}

function altaAnuncio(a){
    anuncios.push(a);
    almacenarDatos(anuncios);
}

function  modificarAnuncio(a){
    let index = anuncios.findIndex((anuncio)=>{
        return anuncio.id == a.id;
    });

    anuncios.splice(index , 1 , a);
    almacenarDatos(anuncios);
}

// No tocar


function almacenarDatos(data){
    localStorage.setItem("lista",JSON.stringify(data));
    handlerLoadList();
}



function limpiarFormulario(frm){
    frm.reset();
    document.getElementById("btnEliminar").classList.add("oculto");
    document.getElementById("btnSubmit").value = "Guardar";

    document.forms[0].id.value = "" ;
}



function cargarFormulario(id){

    let Anuncio = null;

    const frm = document.forms[0];
    
    Anuncio = anuncios.filter(p => p.id == id)[0];

    frm.id.value = Anuncio.id;
    frm.titulo.value= Anuncio.titulo;
    frm.transaccion.value= Anuncio.transaccion;
    frm.descripcion.value= Anuncio.descripcion;
    frm.precio.value= Anuncio.precio;
    frm.num_puertas.value= Anuncio.num_puertas;
    frm.num_kmh.value= Anuncio.num_kmh;
    frm.potencia.value= Anuncio.potencia;


    document.getElementById("btnSubmit").value = "Modificar";
    document.getElementById("btnEliminar").classList.remove("oculto");
}