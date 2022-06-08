$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'familia') {
            $('.cont-work').show('1000');
        } else {

            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });
        let yo = $('#yo').offset().top,
        familia = $('#familia').offset().top,
        web = $('#web').offset().top,
        fotos = $('#fotos').offset().top,
        contacto = $('#contacto').offset().top;
        window.addEventListener('resize', function(){
        let yo = $('#yo').offset().top,
        familia = $('#familia').offset().top,
        web = $('#web').offset().top,
        fotos = $('#fotos').offset().top,
        contacto = $('#contacto').offset().top;
       
    });
        $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-yo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: yo -100
        },600);
    });

    $('#enlace-familia').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: familia -100
        },600);
    });

    $('#enlace-web').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: web -100
        },600);
    });

     $('#enlace-fotos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: fotos -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
    });