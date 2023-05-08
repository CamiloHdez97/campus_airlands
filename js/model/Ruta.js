import {VALOR_MILLA} from "../env.js";

export class Ruta{

    static idID = 0;
    constructor(name, ciudadOrigen, ciudadDestino, totalMillas){
        
        this._id = ++ Ruta.idID;
        this._name = name;
        this._ciudadOrigen = ciudadOrigen;
        this._ciudadDestino = ciudadDestino;
        this._totalMillas = totalMillas;
        this._valorMilla = VALOR_MILLA;

    }

    get id(){return this._id;}
    get name(){return this._name;}
    get ciudadOrigen(){return this._ciudadOrigen;}
    get ciudadDestino(){return this._ciudadDestino;}
    get totalMillas(){return this._valorMilla;}
    get valorMilla(){return this._valorMilla;}
    
    set name(nam){this._name = nam;}
    set ciudadOrigen(co){this._ciudadOrigen = co;}
    set ciudadDestino(cd){this._ciudadDestino = cd;}
    set totalMillas(tm){this._valorMilla = tm;}

}

