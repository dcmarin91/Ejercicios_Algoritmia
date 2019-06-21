function comparar(){
    var cont=0;
    var picas=0;
    var fijas=0;
    val = generarRandom();
    val = val.toString();
    while(fijas<4){ 
      picas=0;
      fijas=0;
      var num= prompt("Ingresa un numero de 4 digitos")
      for(let i=0;i<val.length;i++){
        for(let j=0;j<num.length;j++){
          if(val[i]===num[j]&&i===j){
            fijas++;
          }
          else if(val[i]===num[j]){
            picas++;
          }
        } 
      }
      alert("El numero es " + val);
      alert("Picas: "+ picas+ " y Fijas: "+ fijas)
    }
  }
  function generarRandom(){
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
  }
  $(function(){
    $('#boton').on('click', function(){
       alert('click event');
    });
});