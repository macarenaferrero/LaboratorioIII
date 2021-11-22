const URL = "http://localhost:3000/personas";
const divSpinner = document.querySelector(".spinner");

const getSpinner = () => {
    const $spinner = document.createElement("img");
    $spinner.setAttribute("src", "./assets/construccionSpinner.gif");
    $spinner.setAttribute("alt", "spinner");
    $spinner.setAttribute("style", "width:300px")
    return $spinner;
}

const clearSpinner = () => {
    while (divSpinner.hasChildNodes()) {
        divSpinner.removeChild(divSpinner.firstChild);
    }
}

const getPersonasAjax = () => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
            else {
                console.error(`Error ${xhr.status} : ${xhr.statusText}`);
            }
            clearSpinner();
        }
        else {
            divSpinner.appendChild(getSpinner());
        }
    });
    xhr.open("GET", URL);
    xhr.send();
};

//RECIBE UN ID - SELECCIONA UNA PERSONA
const getPersonaAjax = (id) => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
            else {
                console.error(`Error ${xhr.status} : ${xhr.statusText}`);
            }
            clearSpinner();
        }
        else {
            divSpinner.appendChild(getSpinner());
        }
    });
    xhr.open("GET", URL + "/" + id);
    xhr.send();
};

//VERSION FETCH 

const getPersonasFetch = () => {
    divSpinner.appendChild(getSpinner());
    fetch(URL)
        .then(res => res.ok ? res.json() : Promise.reject(`Error ${res.status} : ${res.statusText}`))
        .then(data => console.log(data))
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            clearSpinner();
        });
};

//VERSION FETCH ASYNC AWAIT

const getPersonasFetchAsync = async () => {
    try {
        divSpinner.appendChild(getSpinner());
        const res = await fetch(URL);
        if(!res.ok){
            throw new Error(`Error ${res.status} : ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    } finally {
        clearSpinner();
    }
};

//AXIOS  NORMAL
const getPersonasAxios = () => {
    divSpinner.appendChild(getSpinner());
    axios.get(URL)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.error(err.responseText)
        })
        .finally(() => {
            clearSpinner();
        });
};

//AXIOS  ASYNC
const getPersonasAxiosAsync = async () => {
    
    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios.get(URL);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    finally{
        clearSpinner();
    }
};

//CREAR PERSONA
//Se debe leer de form
const createPersona = ()=>{
    const nuevaPersona = {nombre: "Juancito", apellido: "Perez"};
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                alert(`Error : ${data.id} ${data.nombre}${data.apellido}`);
            }
            else {
                console.error(`Error ${xhr.status} : ${xhr.statusText}`);
            }
            clearSpinner();
        }
        else {
            divSpinner.appendChild(getSpinner());
        }
    });
    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type","application/json;charset=utf8");
    xhr.send(JSON.stringify(nuevaPersona));
};

//crear persona con fetch

const creatPersonaFetch = () => {
    const nuevaPersona = {nombre: "Lorena", apellido: "Gonzalez"};

    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(nuevaPersona),
    };
    divSpinner.appendChild(getSpinner());
    fetch(URL, options)
        .then(res => res.ok ? res.json() : Promise.reject(`Error ${res.status} : ${res.statusText}`))
        .then(data => console.log(data))
        .catch((err) => {
            alert(`${data.id} ${data.nombre} ${data.apellido}`);
        })
        .finally(() => {
            clearSpinner();
        });
};

const createPersonaAxiosAsync = async () => {
    const nuevaPersona = {nombre: "Loana", apellido: "Ferrero"};
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        data:JSON.stringify(nuevaPersona),
    };
    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios(URL, options);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    finally{
        clearSpinner();
    }
};

//Delete persona Ajax
const deletePersona = (id)=>{
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                alert(xhr.responseText);
            }
            else {
                console.error(`Error ${xhr.status} : ${xhr.statusText}`);
            }
            clearSpinner();
        }
        else {
            clearSpinner();
        }
    });
    xhr.open("DELETE", URL + "/" + id);
    xhr.send();
};

//Delete persona Fetch

const deletePersonaFetch = (id) => {

    const options = {
        method:"DELETE",
    };
    divSpinner.appendChild(getSpinner());
    fetch(URL + "/" + id, options)
        .then(res => res.ok ? res.json() : Promise.reject(`Error ${res.status} : ${res.statusText}`))
        .then(data => console.log(data))
        .catch((err) => {
            alert(data);
        })
        .finally(() => {
            clearSpinner();
        });
};

const deletePersonaAxiosAsync = async (id) => {
    const options = {
        method:"DELETE",
    };
    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios.delete(URL + "/" + id);
        alert(data);
    } catch (err) {
        console.error(err);
    }
    finally{
        clearSpinner();
    }
};

//Modificar persona Ajax
const updatePersona = (id)=>{
    const personaAEditar = {id:21, nombre: "Loana", apellido: "Ferraro"};

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                alert(xhr.responseText);
            }
            else {
                console.error(`Error ${xhr.status} : ${xhr.statusText}`);
            }
            clearSpinner();
        }
        else {
            clearSpinner();
        }
    });
    xhr.open("PUT", URL + "/" + personaAEditar.id);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(personaAEditar));
};