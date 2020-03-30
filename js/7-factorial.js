function hacerclic() {
    document.querySelector("#pag7").onclick = factorial;
}

function factorial() {
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
    var resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    var nuevoElemento = "<br><h2>" + resultado + "</h2>";
    msg.innerHTML = nuevoElemento;
}

window.onload = hacerclic;
