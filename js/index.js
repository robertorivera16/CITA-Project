$(document).ready(function(){
   
    $(window).scroll(function(){
        if ($('#bio1').isOnScreen()) {
            // The element is visible, do something
            
            $('#bio1').removeClass('invisible'); 
            $('#bio1').addClass('magictime swashIn'); 

        }
        if ($('#bio2').isOnScreen()) {
            // The element is visible, do something
            
            
            $('#bio2').removeClass('invisible'); 
            $('#bio2').addClass('magictime swashIn'); 
        } 
        if ($('#bio3').isOnScreen()) {
            // The element is visible, do something
            
            
            $('#bio3').removeClass('invisible'); 
            $('#bio3').addClass('magictime swashIn'); 
        } 
         
    });
});

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() + -100;
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};