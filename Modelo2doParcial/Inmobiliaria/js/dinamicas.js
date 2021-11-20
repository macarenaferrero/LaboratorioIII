
export const crearTabla = (data)=>{

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const fila = document.createElement("tr");

    fila.style.backgroundColor = "rgb(0, 119, 170)";


    //Cargo el thead
    for (const key in data[0]) {
        
        if(key !== "id")
        {    
        const th = document.createElement("th");
        //metodo
        const contenido = document.createTextNode(key);
        th.appendChild(contenido);
        fila.appendChild(th)
        }
    }
    thead.appendChild(fila);
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

export const crearPublicidad = (data)=>{

    const $principal = document.getElementById("principal");
    data.forEach((element, index) => {
        const $article = document.createElement("article");
        $article.classList.add("article");

        const $titulo = document.createElement("h3");
        $titulo.classList.add("texto");
        $titulo.textContent = element.titulo;
        $article.appendChild($titulo);

        const $descripcion = document.createElement("p");
        $descripcion.classList.add("texto");
        $descripcion.textContent = element.descripcion;
        $article.appendChild($descripcion);

       const $precio = document.createElement("p");
        $precio.classList.add("precio");
        $precio.textContent = element.precio;
        $article.appendChild($precio);

        const $ul = document.createElement("ul");
        const $lista = document.createElement("li");
        const $imagenBaño = document.createElement("img");        
        $imagenBaño.setAttribute("src", "./images/baño.png");
        $imagenBaño.setAttribute("width", "25px");
        $imagenBaño.setAttribute("alt", "baños");
        $imagenBaño.classList.add("iconos");
        $lista.appendChild($imagenBaño);

        const $baños = document.createElement("span");
        $baños.classList.add("baños");
        $baños.textContent = element.baños;
        $lista.appendChild($baños);
        

        $ul.appendChild($lista);
        const $listaII = document.createElement("li");
        const $imgAuto = document.createElement("img");
        $imgAuto.setAttribute("src", "./images/autoIn2.png");
        $imgAuto.setAttribute("width", "25px");        
        $imgAuto.setAttribute("alt", "autos");
        $imgAuto.classList.add("iconos");
        $listaII.appendChild($imgAuto);

        const $autos = document.createElement("span");
        $autos.classList.add("autos");
        $autos.textContent = element.autos;
        $listaII.appendChild($autos);

        $ul.appendChild($listaII);
        const $listaIII = document.createElement("li");
        const $imgDorm = document.createElement("img");
        $imgDorm.setAttribute("src", "./images/dormIn.png");
        $imgDorm.setAttribute("width", "25px");
        $imgDorm.setAttribute("alt", "habitaciones");
        $imgDorm.classList.add("iconos");
        $listaIII.appendChild($imgDorm);
        $ul.appendChild($listaIII);
        $article.appendChild($ul);

        const $habitaciones = document.createElement("span");
        $habitaciones.classList.add("habitaciones");
        $habitaciones.textContent = element.habitaciones;
        $listaIII.appendChild($habitaciones);

        const $a = document.createElement("a");
        $a.setAttribute("href", "#");
        $a.textContent = "Ver Anuncio";

        $article.appendChild($a);
        $principal.appendChild($article);

    });
}