/*--------------------------------------------Countries to Castles*/

$(document).ready(function() {
    $(".england").click(function(){
            $('.england-castles').show('slow');
            $('.scotland-castles').hide('slow');
            $('.wales-castles').hide('slow');
            $('.northernireland-castles').hide('slow');
        });
    $(".scotland").click(function(){
            $('.england-castles').hide('slow');
            $('.scotland-castles').show('slow');
            $('.wales-castles').hide('slow');
            $('.northernireland-castles').hide('slow');
        });
    $(".wales").click(function(){
            $('.england-castles').hide('slow');
            $('.scotland-castles').hide('slow');
            $('.wales-castles').show('slow');
            $('.northernireland-castles').hide('slow');
        });
    $(".northernireland").click(function(){
            $('.england-castles').hide('slow');
            $('.scotland-castles').hide('slow');
            $('.wales-castles').hide('slow');
            $('.northernireland-castles').show('slow');
        });
});