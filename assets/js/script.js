// Hover on Country

$(document).ready(function() {
    $(".england").mouseenter(function(){
        $('.england').fadeTo(1000, 0.5);
    $(".england").mouseleave(function(){
        $('.england').fadeTo(1000, 1);
    });
    });
    $(".scotland").mouseenter(function(){
        $('.scotland').fadeTo(1000, 0.5);
    $(".scotland").mouseleave(function(){
        $('.scotland').fadeTo(1000, 1);
    }); 
    });
    $(".wales").mouseenter(function(){
        $('.wales').fadeTo(1000, 0.5);
    $(".wales").mouseleave(function(){
        $('.wales').fadeTo(1000, 1);
    });
    });
    $(".northernireland").mouseenter(function(){
        $('.northernireland').fadeTo(1000, 0.5);
    $(".northernireland").mouseleave(function(){
        $('.northernireland').fadeTo(1000, 1);
    });
    });
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
});

