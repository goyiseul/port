$(function(){
    nav();
})

function nav(){
    $('#nav_btn').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('#main_nav_wrap').removeClass('active');
            $('#bar1').removeClass('bar1_on');
            $('#bar2').removeClass('bar2_on');
        } else{
            $(this).addClass('on');
            $('#main_nav_wrap').addClass('active');
            $('#bar1').addClass('bar1_on');
            $('#bar2').addClass('bar2_on');
        }
    })
}