function abrirImagen(src){
    document.getElementById("imagenGrande").src = src;
    document.getElementById("modalImagen").style.display = "flex";
}

function cerrarImagen(){
    document.getElementById("modalImagen").style.display = "none";
}

function abrirPdf(src){
    document.getElementById("pdfVista").src = src;
    document.getElementById("modalPdf").style.display = "flex";
}

function cerrarPdf(){
    document.getElementById("modalPdf").style.display = "none";
    document.getElementById("pdfVista").src = "";
}

function abrirCertificados(){
    document.getElementById("modalCertificados").style.display = "flex";
}

function cerrarCertificados(e){
    if(!e || e.target === document.getElementById("modalCertificados")){
        document.getElementById("modalCertificados").style.display = "none";
    }
}

function cambiarTab(e, tabId){
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    e.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}