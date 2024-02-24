$(function(){

   $('#left').click(function () { 
    $('.box').animate({
        left: "-=40px"
    }, function(){

    });
    
   });

   $('#up').click(function () { 
    $('.box').animate({
        top: "-=40px"
    }, function(){

    });
    
   });

   $('#right').click(function () { 
    $('.box').animate({
        right: "-=40px"
    }, function(){

    });
    
   });

   $('#down').click(function () { 
    $('.box').animate({
        bottom: "-=40px"
    }, function(){

    });
    
   });


});