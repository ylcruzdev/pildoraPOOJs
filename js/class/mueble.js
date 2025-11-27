// no olvides exportar la clase Mueble para poder usarla en otros archivos
export class Mueble {
    //propiedades de la clase
    material;
    color;
    
    //metodo constructor
    constructor(material, color) {

        //inicializamos las propiedades    
        this.material = material;
        this.color = color;  
    }
    
    //metodos de la clase
    describir() {
        console.log(`Este mueble está hecho de ${this.material} y es de color ${this.color}.`);
        return `Este mueble está hecho de ${this.material} y es de color ${this.color}.`;
    }

    mover(){
        return `se ha movido el mueble`
    }

    //getter y setter para la propiedad material
    get describeMaterial() {
        return `Mi material es ${this.material}`;
    }

    set describeMaterial(newMaterial) {
        this.material = newMaterial;
    }
    
}