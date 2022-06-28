// 헤더 메인 고정 네비 스르륵 효과
$(function(){
    $('.nav li').mouseover(function(){
        $(this).children('.mainsub').stop().slideDown();
    });

    $('.nav li').mouseleave(function(){
        $(this).children('.mainsub').stop().slideUp();
    });
});

$(function(){
    $('.topnav li').mouseover(function(){
        $(this).children('.topsub').stop().slideDown();
    });

    $('.topnav li').mouseleave(function(){
        $(this).children('.topsub').stop().slideUp();
    });
});

//박스4 마리모에게 물어봐! 교육과정 효과주기! 
$(function(){
    $('.box4_inner a').mouseover(function(){
        $('.box4_inner').addClass('answer_img');
    });

    $('.box4_inner a').mouseleave(function(){
        $('.box4_inner').removeClass('answer_img');
    });
    
});


// 탑버튼 처음엔 없다가, 스크롤 내리면 생기기
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.topbutton').fadeIn();
    } else {
        $('.topbutton').fadeOut();
    }
});

$( '.topbutton' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );