
  $("#boton").on('click', function(){
   
    var añadir=document.getElementById("nuevo").value();
    if(añadir.length>=1){
      localStorage.setItem(añadir,añadir);
    }
   
  });
  var mostrar=document.getElementById("marco");
  for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == "string"){
      var iframes=document.createElement("iframes")
      iframes.append(localStorage[i])
      mostrar.append(iframes)


    }
  }
  
   