function suma(a, b) { //damos un valor a la suma
    console.log(arguments);// forma NO recomendada para acceder a todos los valores de los parametros de una funcion
    return a + b; //aqui no tenemos aún definido el valor exacto de A
} //aquí la A y B son un parametro y pueden recibir multples argumentos y parametos

let resultado = suma(5, 6, 1, 2, 3); //aquí le damos la funcion de A y esto se llama ARGUMENTOS
console.log(resultado) // esto nos permite que nuestras funciones sean más flexibles y poder reutilizar la logica de una manera más fácil y eficiente para calcular resultados
console.log(typeof suma);