export class Cliente{
    constructor(doc, name, lastname, tel, fechaN, ciudadOrigen, paisOrigen, correo){

        this._doc = doc;
        this._name = name;
        this._lastname = lastname;
        this._tel = tel;
        this._fechaN = fechaN;
        this._ciudadOrigen = ciudadOrigen;
        this._paisOrigen = paisOrigen;
        this._correo = correo;

    }

    get doc(){return this._doc;}
    get name(){return this._name;}
    get lastname(){return this._lastname;}
    get tel(){return this._tel;}
    get fechaN(){return this._fechaN;}
    get ciudadOrigen(){return this._ciudadOrigen;}
    get paisOrigen(){return this._paisOrigen;}
    get correo(){return this._correo;}
    
    set doc(idc){this._doc = idc;}
    set name(nam){this._name = nam;}
    set lastname(lasnam){this._lastname = lasnam;}
    set tel(tele){this._tel = tele;}
    set fechaN(fechaNa){this._fechaN = fechaNa;}
    set ciudadOrigen(fechaOr){this._ciudadOrigen = fechaOr;}
    set paisOrigen(paisOr){this._paisOrigen = paisOr;}
    set correo(corr){this._correo = corr;}

}
