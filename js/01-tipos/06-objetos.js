// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", //LLAVE = nombre VALOR = Tanjiro
    anime: "Demon slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre); //si ponemos un PUNTO (.) despues de PERSONAJE nos permite escoger la cajita de la LLAVE que queremos ver
console.log(personaje["anime"]); //propiedades de un objeto indicandolo como un string

//modificar la propiedad
personaje.edad = 13; //si se conoce el nombre de la propiedad se utiliza esta opcion

personaje ["edad"] = 13; //si no conocemos el nombre de la propiedad utilzamos esta opcion

// eliminar una propiedad
delete personaje.anime;

console.log(personaje);
