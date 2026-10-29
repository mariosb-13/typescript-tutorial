abstract class Usuario{
    constructor(uid:number,nombre:string,apellidos:string){}
}

class Admin extends Usuario{
    super(uid:number,nombre:string,apellidos:string,permiso:string){
    }
}