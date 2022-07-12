$(function(){
// 마스크 & 스노클
    $('#gear1').click(function(){
        $('.popgear1').fadeIn();//.show();
    });
    $('.close1 a').click(function(){
        $('.popgear1').fadeOut();//.hide();
    });

// 슈트 & 웨이트
    $('#gear2').click(function(){
        $('.popgear2').fadeIn();//.show();
    });
    $('.close2 a').click(function(){
        $('.popgear2').fadeOut();//.hide();
    });

// 롱핀 & 삭스
    $('#gear3').click(function(){
        $('.popgear3').fadeIn();//.show();
    });
    $('.close3 a').click(function(){
        $('.popgear3').fadeOut();//.hide();
    });
});