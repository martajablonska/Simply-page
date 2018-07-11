//hamburger menu

let width= window.innerWidth;

$(document).ready(function(){
    
    if(width<600) {                         //600px breakpoint in css
        $('#menu').hide();
        $("#hamburger").click(function(){
            $('#menu').slideToggle();
        });
    };
});

//scrolling to sections

function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();

    if(width < 600) {
       $('html, body').animate({
            scrollTop: $(href).offset().top -227
        }, 800);        
    } else {
        $('html, body').animate({
            scrollTop: $(href).offset().top - 68
        }, 800);  
    };

    location.hash = href;

};

$('a[href*="#"]').click(scroll);