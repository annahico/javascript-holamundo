// AND, OR, NOT 

// AND se utiliza &&

console.log(true && true); //indicamos a js tiene que evaluar lo que tiene a su izqueirda y derecha
// TRUE: si a la izquiera y derecha es true el resultado es TRUE
// FALSE: si hay algun false el resultado es FALSE
console.log(false && true);

/*se utiliza esto por ejemplo cuando estamos suscritos a una plataforma como Netflix 
y usamos Netlix siempre existe la opcion de que un menor acceda a la plataforma y no podemos 
mostrarle todo el contenido y asegurarnos que tenga una suscripcion activa.
Se usan dos variables 
*/
let mayor = false;
let suscrito = true;
console.log("operador and", mayor && suscrito);

//OR se utiliza ||

console.log("operador or", mayor || suscrito); 
//para que devuelva false, los dor tienen que ser FALSE

// NOT se utiliza ! antes de la variable

console.log("operador not", !mayor); //como le decimos que es NOT pasa de mostrar false a true

/* usamos la negación de una variable por ejemplo cuando queremos indicarle solamente
acceso al catalogo infantil al menor
*/
let soloCatalogoInfantil = !mayor;