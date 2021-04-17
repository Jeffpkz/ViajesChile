$(function(){

    /*Codigo del Smooth Scrolling */

    $("a").click(function(event){
    if(this.hash !==""); {
    event.preventDefault();
    
    var gato = this.hash;
    
    $("html, body"). animate({
        scrollTop: $(gato).offset().top
        }, 800, function(){
            window.location.hash = gato;
            });
    
    }
    });

    /*Creacion del tooltip en las CARDS seccion Destacados*/

    $('[data-toggle="popover"]') .popover ();
    
});

