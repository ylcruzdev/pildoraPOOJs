// Importar la clase Silla desde el archivo silla.js
import { Silla } from "./silla.js";

// Encapsulación y abstracción
// Clase o subClase SillaInteligente que hereda de Silla
export class SillaInteligente extends Silla {
    //propiedad privada para controlar si la silla está ocupada
    #ocupada = false;

    sentarse() {
        if (this.#ocupada) {
            console.log("La silla ya está ocupada");
            return "La silla ya está ocupada";
        }
        else {
            this.#ocupada = true;
            console.log("Te has sentado correctamente en la silla");
            return "Te has sentado correctamente en la silla";
        }
    }

    levantarse() {
        if (this.#ocupada) {

            this.#ocupada = false;
            console.log("La silla ya está libre");
            return "La silla ya está libre";
        }
        else { 
            return "No puedes levantarte porque no estás sentado";
        }
    }
}
