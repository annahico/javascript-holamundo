// cuales son los numeros pares

// //aqui se ejecuta primero la condicion
let i = 2;

// while (i < 2) { //esto es la condicion
//     if (i % 2 == 0) {
//         console.log("Número par", i);
//     }
//     i++;
// }


//aqui la condicion de ejecuta al final y el codigo va a tener comportamientos diferentes
do {
    if (i % 2 == 0) {
        console.log("Número par", i);
    }
    i++;
} while (i < 2); //esto es la condicion

//en do-while ejecuta la porcion de codigo y luego la condicion y si la condicon se cumple vuelve a subir y se ejecuta la porcion de codigo