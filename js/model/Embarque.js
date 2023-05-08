class Embarque {

    constructor(doc, fecha, idVuelo){

        this._doc = doc;
        this._fecha = fecha;
        this._idVuelo = idVuelo;

    }
    
    get doc(){return this._doc;} 
    get fecha(){return this._fecha;} 
    get idVuelo(){return this._idVuelo;} 

    set doc(doci){this._doc = doci;}
    set fecha(fec){this._fecha = fec;}
    set idVuelo(idv){this._idVuelo = idv;}

}