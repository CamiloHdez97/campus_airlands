export class Personal{
    
    constructor(doc, name, lastname, email, tel, profession){

        this._doc = doc;
        this._name = name;
        this._lastname = lastname;
        this._email = email;
        this._tel = tel;
        this._profession = profession;

    }

    get doc(){return this._doc;}
    get name(){return this._name;}
    get lastname(){return this._lastname;}
    get email(){return this._email;}
    get tel(){return this._tel;}
    get profession(){return this._profession;}

    set doc(idc){this._doc = idc;}
    set name(nam){this._name = nam;}
    set lastname(lasnam){this._lastname = lasnam;}
    set email(ema){this._email = ema;}
    set tel(tele){this._tel = tele;}
    set profession(pro){this._profession = pro;}

}
