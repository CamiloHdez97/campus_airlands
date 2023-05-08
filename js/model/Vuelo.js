export class Vuelo{

    static idID = 0;
    constructor(){
        
        this._id = ++ Vuelo.idID;
    }

    get id(){return this._id;}

}

