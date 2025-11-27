//Importamos la clase Mueble
import { Mueble } from "./mueble.js";

//Clase o subClase Mesa que hereda de Mueble
export class Mesa extends Mueble {
    //metodo constructor
    constructor(material, color, forma = "rectangular") {
        //llamamos al constructor de la clase padre
        super(material, color);
        //inicializamos la propiedad propia de la clase Mesa
        this.forma = forma;
    }

    //metodo usar de la clase Mesa
    usar() {
        console.log("Estás usando la mesa para estudiar y programar en JavaScript");
        return "Estás usando la mesa para estudiar y programar en JavaScript";
    }

    //metodo privado (solo accesible dentro de la clase Mesa)
    #limpiar() {
        console.log("La mesa ha sido limpiada");
        return "La mesa ha sido limpiada";
    }

    //metodo publico que usa el metodo privado #limpiar
    prepararParaUsar() {
        console.log("Preparando la mesa para usar...");
        return this.#limpiar();
    }
    
}