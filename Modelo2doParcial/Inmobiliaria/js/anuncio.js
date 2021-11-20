class Anuncio {

    constructor(id, titulo, transaccion, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}


export class Anuncio_Auto extends Anuncio {

    constructor(id, titulo, transaccion, descripcion, precio, baños, autos, habitaciones) {
        super(id, titulo, transaccion, descripcion, precio);
        this.baños = baños;
        this.autos = autos;
        this.habitaciones = habitaciones;
    }
}