$(function(){
 localStorage.str8= localStorage.str8
    ||'["https://colorhunt.co/","https://uigradients.com/#KimobyIsTheNewBlue","https://www.pexels.com/es-es/","https://alexcgdesign.com/blog/"]';

var urls = JSON.parse(localStorage.str8);
 


  function mostrar(urls) {
       var i, iframes8="";
     
    for (i=0;  i < urls.length;  ++i) {
      iframes8 += "<iframe src='" + urls[i] + "'></iframe>";
    }
    $('#iframes').html(iframes8);
    
  };

  $("#boton").on('click', function(){
   
     urls = JSON.parse(localStorage.str8);
    urls.push($('#nuevo').val());
    mostrar(urls);
     localStorage.str8= JSON.stringify(urls);
   
  });
  $("#boton2").on('click', function(){
   
  var borrar=document.getElementById("num").value;
    if(borrar.length>=1){
      localStorage.removeItem(borrar);
    }
   
  });
 

  mostrar(urls);
  
});
 
       function vaciar () {num.value = "";}  
      

  