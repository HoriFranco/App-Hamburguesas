function calcular(){
    let tipo = document.querySelector("#tipo").value; 
    let cantidad = parseInt(document.querySelector("#cantidad").value);
    let tarjeta = document.querySelector("#tarjeta").value;
    let pago = 0;

    if (tipo == "Sencilla") {
        if (tarjeta == "si"){
            pago = 51 * cantidad + (51 * cantidad * 0.05);
        }else{
            pago = 51 * cantidad;
        }

    }else if(tipo == "Doble"){
        if( tarjeta == "si"){
            pago = 58 * cantidad + (58*cantidad*0.05);
        }else{
            pago = 58 * cantidad;
        }
    }else if (tipo == "Triple"){
        if (tarjeta == "si"){
            pago = 64 * cantidad + (64 * cantidad * 0.05);
        }else{
            pago = 64 * cantidad;
        }
    }else{
        // Tipo no válido
        document.querySelector("#resultado").innerHTML = "Tipo de hamburguesa no válido";
        return;
    }

    document.querySelector("#resultado").innerHTML = `El resultado es ${pago}`;
}

document.querySelector("button").addEventListener("click", calcular);