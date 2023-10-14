'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Su registro fue exitoso.';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/ID form/ public key cuenta
            //el id del formulario es #form3
            emailjs.sendForm('service_2dhof78', 'template_h50fk4m', '#form3', 'Qcj5fIli24rOvFuOR');
            cleanInputs();
        }
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}
