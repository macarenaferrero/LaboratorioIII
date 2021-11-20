class Anuncio{

    constructor(id, titulo, transaccion, descripcion, precio){
        this.id = id ;
        this.titulo = titulo ;
        this.transaccion = transaccion ;
        this.descripcion = descripcion ;
        this.precio = precio ;
        
    }
}

export default class AnuncioAuto extends Anuncio {

    constructor(id, titulo, transaccion, descripcion, precio, num_wc, num_autos, num_dorm) {
        super(id, titulo, transaccion, descripcion, precio);
        this.num_wc = num_wc ;
        this.num_autos = num_autos ;
        this.num_dorm = num_dorm;
    }
  }