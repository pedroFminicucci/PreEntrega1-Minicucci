const user = "comprador";
const pass = "1234";

function solicitarDatos(){

    let usuario = prompt("Ingrese Usuario");
    let clave = prompt("Ingrese Contraseña");

    if(validaDatos(usuario,clave)){

        iniciarJuego();

    }else{
        alert("Usuario y/o contraseña invalida")
    }
}

function validaDatos(usuario,clave){

    if (usuario === user && pass === pass){

        return true;

    }else{
    
        return false;
    }


    }


function iniciarJuego(){


    let responder_quizz = false;
    while (!responder_quizz){
        let ingreseRespuesta = prompt("Ingrese el numero de respuesta");
        let respuesta = respuestaCorrecta(ingresaRespuesta);

        if (respuesta){
            console.log(respuesta)
        }else{
            alert("Ingresa una respuesta valida");
        }

    }

}    

function respuestaCorrecta(ingreseRespuesta){
    let respuesta ;

    switch(ingresaRespuesta){
        case "1" :
            respuesta = "incorrecta";
            break;
        case "2" :
            respuesta = "correcta";
            break;
        case "3" :
            respuesta = "incorrecta";
            break;

         default :
            respuesta = false;
    }

    return resultado ;
}

solicitarDatos();
validarDatos();
iniciarJuego();
respuestaCorrecta();




