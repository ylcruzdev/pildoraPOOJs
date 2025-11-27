//Importamos la clase Mueble
import { Mueble } from "./mueble.js";

//Clase o subClase Silla que hereda de Mueble
export class Silla extends Mueble {
    //metodo constructor
    constructor(material, color, tieneRespaldo = true) {
        //llamamos al constructor de la clase padre
        super(material, color);
        //inicializamos la propiedad propia de la clase Silla
        this.tieneRespaldo = tieneRespaldo;
    }

    //metodo usar de la clase Silla
    usar() {
        console.log("Te has sentado en la silla");
        return "Te has sentado en la silla";
    }
}