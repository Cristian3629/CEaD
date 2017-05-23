//Dado un caption, lo formateo
//Ejemplo
/*135
00:07:57,530 --> 00:08:03,310
descomposiciÃ³n que querÃ­amos
(linea vacia)
Me genera  4 lineas mas

Por eso hago res.length / 4
De esas 4 lineas, solo me interesa el time y el texto, por eso hago for 1 a 2
*/


function parserCaption(caption){
  var res = caption.split("\n");
  var len = res.length / 4;
  var elementForLine = 4;
  for (var i = 0; i < len -1; i++) {
      console.log("pos:["+i*elementForLine + 2 +"]:"+res[i*elementForLine + 2]);
      var line = $("<p></p>");
      line.val( res[ i*elementForLine +1 ] );
      //Aca me fijo si mi caption es un indice o un caption
      var caption = res[i*elementForLine + 2];
      var n = caption.search("Tema:");
      //Si no es un indice
      line.text( res[ i*elementForLine + 2 ] );
      if (n == -1){
        line.addClass('line');
        $("#caption").append(line);
      }else{
        line.addClass('chapter');
        $("#chapters").append(line);
        console.log("Este es un tema:"+caption);
      }


    }


  }
