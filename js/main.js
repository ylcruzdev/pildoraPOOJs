import { Mueble } from "./class/mueble.js";
import { Mesa } from "./class/mesa.js";
import { Silla } from "./class/silla.js";
import { SillaInteligente } from "./class/sillaInteligente.js";
import { Armario } from "./class/armario.js";

// instanciamos un objeto de la clase Mueble
const mueble1 = new Mueble("Hierro", "rojo");
// usamos el metodo describir del objeto mueble1
const descripcionMueble1 = mueble1.describir();
console.log(mueble1.describeMaterial = "Madera"); // usamos el setter para cambiar el material
console.log(mueble1.describeMaterial); // usamos el getter para obtener el material


// Manipulacion del DOM para mostrar el resultado en la pagina
const app = document.querySelector("#app");
app.appendChild(document.createElement("h1")).textContent = "Ejmplos de Pildora POO JS";
app.appendChild(document.createElement("p")).innerHTML = `<strong>mueble1.describir():</strong> ${descripcionMueble1}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>mueble1.describeMaterial (despues de usar el setter):</strong> ${mueble1.describeMaterial}`;


//POLIMORFISMO con Mesas y sillas
// instanciamos objetos de las clases Silla y Mesa
const silla1 = new Silla("madera", "marrón");
const mesa1 = new Mesa("metal", "blanco");
// usamos el metodo usar de cada objeto
const usoSilla1 = silla1.usar();
const usoMesa1 = mesa1.usar();

// mostramos los resultados en la pagina
app.appendChild(document.createElement("p")).innerHTML = `<strong>silla1.usar():</strong> ${usoSilla1}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>mesa1.usar():</strong> ${usoMesa1}`;

// mostramos las descripciones de los muebles en la pagina
app.appendChild(document.createElement("p")).innerHTML = `<strong>silla1.describir():</strong> ${silla1.describir()}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>mesa1.describir():</strong> ${mesa1.describir()}`;

//ENCAPSULAMIENTO y abstracción con SillaInteligente
// instanciamos un objeto de la clase SillaInteligente
const sillaInteligente1 = new SillaInteligente("Hierro", "negro");
// usamos los metodos sentarse y levantarse del objeto sillaInteligente1
const intentoSentarse1 = sillaInteligente1.sentarse();
const intentoSentarse2 = sillaInteligente1.sentarse(); // intento de sentarse de nuevo
const intentoLevantarse1 = sillaInteligente1.levantarse();
const intentoLevantarse2 = sillaInteligente1.levantarse(); // intento de levantarse de nuevo

// intentamos acceder a la propiedad privada #ocupada (esto generará un error si se descomenta)
//console.log(sillaInteligente1.#ocupada); // SyntaxError: Private field '#ocupada' must be declared in an enclosing class
// mostramos los resultados en la pagina
app.appendChild(document.createElement("p")).innerHTML = `<strong>sillaInteligente1.sentarse() 1er intento:</strong> ${intentoSentarse1}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>sillaInteligente1.sentarse() 2do intento:</strong> ${intentoSentarse2}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>sillaInteligente1.levantarse():</strong> ${intentoLevantarse1}`;
app.appendChild(document.createElement("p")).innerHTML = `<strong>sillaInteligente1.levantarse() 2do intento:</strong> ${intentoLevantarse2}`;

// instanciamos una mesa y preparamos para usarla
const mesa2 = new Mesa("Madera", "Marrón", "cuadrada");
app.appendChild(document.createElement("p")).innerHTML = `<strong>mesa2.describir():</strong> ${mesa2.describir()}`;
const preparacionMesa2 = mesa2.prepararParaUsar();
app.appendChild(document.createElement("p")).innerHTML = `<strong>mesa2.prepararParaUsar():</strong> ${preparacionMesa2}`;
//intentamos acceder al metodo privado #limpiar (esto generará un error si se descomenta)
//console.log(mesa2.#limpiar()); // SyntaxError: Private field '#limpiar' must be declared in an enclosing class

// instanciamos un objeto de la clase Armario
const armario1 = new Armario("Madera", "Gris", 3, 5, 2.5, 1.5);
// usamos el metodo describir del objeto armario1
const descripcionArmario1 = armario1.describir();
app.appendChild(document.createElement("p")).innerHTML = `<strong>armario1.describir():</strong> ${descripcionArmario1}`;
// usamos el metodo guardar del objeto armario1
const guardarObjeto1 = armario1.guardar("laptop", 2, 1);
app.appendChild(document.createElement("p")).innerHTML = `<strong>armario1.guardar("laptop", 2, 1):</strong> ${guardarObjeto1}`;
// intentamos guardar en una repisa o puerta que no existen
const guardarObjeto2 = armario1.guardar("alargador", 6, 4);
app.appendChild(document.createElement("p")).innerHTML = `<strong>armario1.guardar("alargador", 6, 4):</strong> ${guardarObjeto2}`;
// mostramos las repisas disponibles despues de guardar objetos
app.appendChild(document.createElement("p")).innerHTML = `<strong>armario1.repisasDisponibles despues de guardar:</strong> ${armario1.repisasDisponibles}`;