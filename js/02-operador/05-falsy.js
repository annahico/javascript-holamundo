//SHORT CIRCUIT es como un cortocircuito que se genera cuando nosotros estamos trabajando con cableado electrico pero más seguro

// FALSO (evaluar primero en falso porque es una cantidad limitada y el resto es TRUE)

// FALSE
// 0
// ''
// NULL
// UNDEFINED
// NaN (no logra calcular un numero valido en una operacion matematica )

let nombre = "Chanchito feliz";
let username = nombre || "Anonimo";
console.log(username);

function fn1() {
    console.log("soy funcion 1");
    return false;
}

function fn2() {
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();

/*
si nosotros tenemos que escribir una lógica pero necesitamos que una lógica anterior haya devuelto
TRUE podemos hacer uso del operador && al ejecutar funciones

*/