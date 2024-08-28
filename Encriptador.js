function encriptar(){
    let texto = document.getElementById("texto").value;
   // let tituloMensaje= document.getElementById("titulo-mensaje");
    //let parrafo = document.getElementById("parrafo");
    let textoCifrado = texto
                    .replace(/e/gi,"enter")
                    .replace(/i/gi,"imes")
                    .replace(/a/gi,"ai")
                    .replace(/o/gi,"ober")
                    .replace(/u/gi,"ufat");

if (document.getElementById("texto").value.length !=0) {
    document.getElementById("texto").value= textoCifrado;
    document.getElementById("titulo-mensaje").textContent= "texto encriptado ";
    document.getElementById("parrafo").textContent="";
}
}
function desencriptar(){
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
                    .replace(/enter/gi,"e")
                    .replace(/imes/gi,"i")
                    .replace(/ai/gi,"a")
                    .replace(/ober/gi,"o")
                    .replace(/ufat/gi,"u");
if (document.getElementById("texto").value.length !=0) {
    document.getElementById("texto").value= textoCifrado;
    document.getElementById("titulo-mensaje").textContent= "texto desencriptado ";
    document.getElementById("parrafo").textContent="";

}
}

function copiar(){
    var str = document.getElementById("texto").value;
    alert("Copiado");
  }


