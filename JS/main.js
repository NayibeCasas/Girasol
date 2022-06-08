// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado=true;
var cancion=0;


function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertuera(){
    if (cerrado) {
        menu.style.width='70vw';/*virtual width*/
        cerrado=false;
    }else{
        menu.style.width='0';
        menu.style.overflow='hidden';
        cerrado=true;
    }
}
/*cerrar el menu cuando se de click*/
window.addEventListener('click',function(e){
    console.log(e.target);/*dice a que elemento se da click*/
    if(cerrado==false){/*cuando el menu este abierto*/
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('load',function(){

    /*uso jquery*/
    $('#onload').fadeOut();
      $('body').removeClass('hidden');

    menus();
});
/* cada vez que mueva el scrool*/
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);/*contador de px en la consola */
    menus();
});
window.addEventListener('resize',function(){
     if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click',function(){
    apertuera();

});
var fecha=new Date();
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","   Noviembre","Diciembre");
        var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        document.getElementById('fecha').innerHTML=diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
function inic ()   {

             fecha = new Date() ;
                    h = fecha.getHours() ;
                    m = fecha.getMinutes() ;
                    s = fecha.getSeconds() ;
                            meida=(h<12)?"am":"pm";

              horaImprimible = h + " : " + m + " : " + s +" "+meida ;
                  
            document.getElementById('reloj').innerHTML=horaImprimible;
             setTimeout(inic,500)
               var mensaje;
                var msj;

              if      (fecha.getHours() ==19 || fecha.getHours() >19)  { msj = "¡Buenas noches!";}
              else if (fecha.getHours() < 12) { msj = "¡Buenos días!";}
              else if (fecha.getHours()==12 ||fecha.getHours() < 19) { msj = "¡Buenas tardes!";}
              document.getElementById('saludo').innerHTML=msj;
        
    }