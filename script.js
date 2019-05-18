function validateForm() {
    this.validarNombre();
    this.validarApellido();
    this.validarEmail();
    this.validarEmailRepetido();
    this.validarDNIcorrecto();
    this.validarMovil();
};

function validarNombre() {
    valor = document.getElementById("nombre").value;
    let valor2 = document.getElementById("nombreMal");
    valor2.innerHTML = "";
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        valor2.innerHTML = "Nombre no introducido";
    }
}

function validarApellido() {
    valor = document.getElementById("apellido").value;
    let valor2 = document.getElementById("apellidoMal");
    valor2.innerHTML = "";
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        valor2.innerHTML = "Apellido no introducido";
    }
}

function validarEmail() {
    valor = document.getElementById("email").value;
    let valor2 = document.getElementById("emailMal");
    valor2.innerHTML = "";
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        valor2.innerHTML = "Email no introducido";
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        valor2.innerHTML = "Email mal introducido";
    }
}

function validarEmailRepetido() {
    valor = document.getElementById("email-repetido").value;
    let valor2 = document.getElementById("emailMal2");
    valor2.innerHTML = "";
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        valor2.innerHTML = "Email no introducido";
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        valor2.innerHTML = "Email mal introducido";
    }
}

function validarDNIcorrecto() {
    valor = document.getElementById("dni").value;
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let valor2 = document.getElementById("dniMal");
    valor2.innerHTML = "";
    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        valor2.innerHTML = "DNI no introducido";
    }
    if (valor.charAt(8) != letras[(valor.substring(0, 8)) % 23]) {
        valor2.innerHTML = "DNI mal introducido";
    }
}

function validarMovil() {
    valor = document.getElementById("movil").value;
    let valor2 = document.getElementById("movilMal");
    valor2.innerHTML = "";
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        valor2.innerHTML = "Movil no introducido";
    }
    if (!(/^\d{9}$/.test(valor))) {
        valor2.innerHTML = "Movil mal introducido";
    }
}