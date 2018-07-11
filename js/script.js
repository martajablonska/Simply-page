/*function scroll(e) {

    var href = $(this).attr('href');
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top - 80
    }, 800);

    location.hash = href;

};

$('a[href*="#"]').click(scroll);*/
    

$(document).ready(function(){
    
    let width= window.innerWidth;
    
    if(width<600) {
        $('#menu').hide();
        $("#hamburger").click(function(){
            $('#menu').slideToggle();
        });
    };
});