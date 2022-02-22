
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var caracter="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ1!$%&/()=?¡¿/°|¬áéíóú123456789*-+{}'~¨";
function encriptarTexto() {
    var texto = document.getElementById("input-texto").value;
    for(i=0; i<texto.length; i++){
        if (caracter.indexOf(texto.charAt(i),0)!=-1){
            alert("Ingrese solo minúsculas, sin acentos ni caracteres especiales");
            break;
         }
      else 
            {       
                document.getElementById("msg").value = texto.replace(/e/g, "enter")
                                                            .replace(/i/g, "imes")
                                                            .replace(/a/g, "ai")
                                                            .replace(/o/g, "ober")
                                                            .replace(/u/g, "ufat");
                document.getElementById("input-texto").value = ""; 
    		  }
        }
    }

function copyToClipBoard() {
    var content = document.getElementById('msg');        
    //content.select();
    document.execCommand('copy');
    document.getElementById('msg').value="";
    }

function desencriptarTexto() {
    var texto = document.getElementById("input-texto").value;
    for(i=0; i<texto.length; i++){
        if (caracter.indexOf(texto.charAt(i),0)!=-1){
            alert("Ingrese solo minúsculas, sin acentos ni caracteres especiales");
            break;
      } 
      else 
          {
            document.getElementById("msg").value = texto.replace(/enter/g, "e")
                                                        .replace(/imes/g, "i")
                                                        .replace(/ai/g, "a")
                                                        .replace(/ober/g, "o")
                                                        .replace(/ufat/g, "u");
            document.getElementById("input-texto").value = "";
            }
        }
    }

    


