$(function(){
 /* localStorage.str1 = localStorage.str1
    ||'["http://getbootstrap.com","http://vishub.org"]';*/

  var urls = JSON.parse(localStorage.str1);

  function mostrar(urls) {
    var i, iframes="";
    for (i=0;  i < urls.length;  ++i) {
      iframes += "<iframe src='" + urls[i] + "'></iframe>";
    }
    $('#iframes').html(iframes);
  };

  $("#boton").on('click', function(){
    urls = JSON.parse(localStorage.str1);
    urls.push($('#nuevo').val());
    mostrar(urls);
    localStorage.str1 = JSON.stringify(urls);
  });

  mostrar(urls);
});
