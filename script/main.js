$(function(){
    nav();
    fadeNav();
})

function nav(){
    $('#nav_btn').click(function(){
        if($(this).hasClass('on')){
            $('#fadeIn').fadeOut();
            $(this).removeClass('on');
            $('#main_nav_wrap').removeClass('active');
            $('#bar1').removeClass('bar1_on');
            $('#bar2').removeClass('bar2_on');
        } else{
            $('#fade_nav').fadeIn();
            $(this).addClass('on');
            $('#main_nav_wrap').addClass('active');
            $('#bar1').addClass('bar1_on');
            $('#bar2').addClass('bar2_on');
        }
    })
}
function fadeNav(){
    $('#fade_nav').click(function(){
        $('#nav_btn').removeClass('on');
        $('#main_nav_wrap').removeClass('active');
        $('#bar1').removeClass('bar1_on');
        $('#bar2').removeClass('bar2_on');
    })
}