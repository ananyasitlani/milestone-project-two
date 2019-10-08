// Hover on Country

$(document).ready(function() {

// Countries to Castles 

    $(".england").click(function(){
            $('.england-castles').slideToggle('1000');
            $('.scotland-castles').slideUp('1000');
            $('.wales-castles').slideUp('1000');
            $('.northernireland-castles').slideUp('1000');
        });
    $(".scotland").click(function(){
            $('.england-castles').slideUp('1000');
            $('.scotland-castles').slideToggle('1000');
            $('.wales-castles').slideUp('1000');
            $('.northernireland-castles').slideUp('1000');
        });
    $(".wales").click(function(){
            $('.england-castles').slideUp('1000');
            $('.scotland-castles').slideUp('1000');
            $('.wales-castles').slideToggle('1000');
            $('.northernireland-castles').slideUp('1000');
        });
    $(".northernireland").click(function(){
            $('.england-castles').slideUp('1000');
            $('.scotland-castles').slideUp('1000');
            $('.wales-castles').slideUp('1000');
            $('.northernireland-castles').slideToggle('1000');
        });
        
    // castles and maps
    
$ (".castle-styles").click(function(){
       $(this).toggleClass("chosen"); 
    });
    
    // reset button
    
    $(".reset-button").click(function(){
            $('.england-castles').slideUp('1000');
            $('.scotland-castles').slideUp('1000');
            $('.wales-castles').slideUp('1000');
            $('.northernireland-castles').slideUp('1000');
            $('.filter').removeProp('.filter');
    });
    
    
});

