function saludar() {  //lo que escribamos a la derecha de FUNTION lo va a tomar como el nomfre de esa funcion
    console.log("Hola Mundo");
}

saludar();

function suma() {
    return 2 + 2; //nos permite reutilizar codigo que se encuentre dentro de estas funciones. Van a poder calcular algo y devolver el valor que calcularon para usarlo en un futuro
}

let resultado = suma();
// console.log(resultado);  
console.log(suma());
