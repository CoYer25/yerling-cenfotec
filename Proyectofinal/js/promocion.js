document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "Globoflexia":
            document.querySelector('.galeriaGloboflexia').style.display = "block";
            document.querySelector('.galeriaCajitas').style.display = "none";
            document.querySelector('.galeriaCadyBar').style.display = "none";
            document.querySelector('.galeriaEmpresas').style.display = "none";
            break;

        case "Cajitas":
            document.querySelector('.galeriaGloboflexia').style.display = "none";
            document.querySelector('.galeriaCajitas').style.display = "block";
            document.querySelector('.galeriaCadyBar').style.display = "none";
            document.querySelector('.galeriaEmpresas').style.display = "none";

            break;

        case "CadyBar":
            document.querySelector('.galeriaGloboflexia').style.display = "none";
            document.querySelector('.galeriaCajitas').style.display = "none";
            document.querySelector('.galeriaCadyBar').style.display = "block";
            document.querySelector('.galeriaEmpresas').style.display = "none";

            break;

        case "Empresas":
            document.querySelector('.galeriaGloboflexia').style.display = "none";
            document.querySelector('.galeriaCajitas').style.display = "none";
            document.querySelector('.galeriaCadyBar').style.display = "none";
            document.querySelector('.galeriaEmpresas').style.display = "block";

            break;

        default:
            document.querySelector('.galeriaGloboflexia').style.display ="none"
            document.querySelector('.galeriaCajitas').style.display ="none"
            document.querySelector('.galeriaCadyBar').style.display ="none"
            document.querySelector('.galeriaEmpresas').style.display ="none"

    }
}
