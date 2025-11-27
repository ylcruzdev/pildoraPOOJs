import { Mueble } from "./mueble.js";
//Clase o subClase Armario que hereda de Mueble
export class Armario extends Mueble {
    //metodo constructor
    constructor(material, color, numeroPuertas = 2, repisas = 4, altura = 2, ancho = 1) {
        //llamamos al constructor de la clase padre
        super(material, color);
        //inicializamos la propiedad propia de la clase Armario
        this.numeroPuertas = numeroPuertas;
        this.repisas = repisas;
        this.repisasDisponibles = repisas;
        this.altura = altura;
        this.ancho = ancho;
        this.name = "armario";
    }
    
    describir() {
        console.log(`Este ${this.name} está hecho de ${this.material} y es de color ${this.color}. Tiene ${this.numeroPuertas} puertas y ${this.repisas} repisas. y es de ${this.altura} metros de altura y ${this.ancho} metros de ancho.`);
        return `Este ${this.name} está hecho de ${this.material} y es de color ${this.color}. Tiene ${this.numeroPuertas} puertas y ${this.repisas} repisas. y es de ${this.altura} metros de altura y ${this.ancho} metros de ancho.`
    }

    //metodo guardar de la clase Armario
    guardar(obj) {
        let objeto =obj.objeto;
        let repisa = obj.repisa; 
        let puerta = obj.puerta;
        if (repisa > this.repisas || puerta > this.numeroPuertas) {
            console.log("No puedes guardar el objeto en esa repisa o puerta porque no existen");
            return "No puedes guardar el objeto en esa repisa o puerta porque no existen";
        }

        this.repisasDisponibles--;
        
        console.log(`Has guardado tu ${objeto} en el armario, en la repisa ${repisa} y detrás de la puerta ${puerta}`);
        return `Has guardado tu ${objeto} en el armario, en la repisa ${repisa} y detrás de la puerta ${puerta}`;
    }
}