//menu inicial
$(function(){
    $('header').hide();
    $('header').show('slow');

    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo<500){
            $('.bloco-historia').hide();
        }else{
            $('.bloco-historia').fadeIn('2000');
        }
    });
});


//menu mobile
var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


$(".btn-menu").click(function(){
    $(".menu").show();
    }
);
$(".btn-close").click(function(){
    $(".menu").hide();
    }
);