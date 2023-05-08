export class Flota{

    constructor(cantidad, cantPasajeros, fechaCompra, valorCompra, matricula){
        
        this._cantidad = cantidad;
        this._cantPasajeros = cantPasajeros;
        this._fechaCompra = fechaCompra;
        this._valorCompra = valorCompra;
        this._matricula= matricula;

    }

    get cantidad(){return this._cantidad;}
    get cantPasajeros(){return this._cantPasajeros;}
    get fechaCompra(){return this._fechaCompra;}
    get valorCompra(){return this._valorCompra;}
    get matricula(){return this._matricula;}
    
    set cantidad(cant){this._cantidad = cant;}
    set cantPasajeros(cantP){this._cantPasajeros = cantP;}
    set fechaCompra(fc){this._fechaCompra = fc;}
    set valorCompra(vc){this._valorCompra = vc;}
    set matricula(mat){this._matricula = mat;}

}

