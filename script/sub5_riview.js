$(function(){
	$("#board li").click(function(){
		$(this).children(".riview").slideToggle()
		$(this).siblings().children(".riview").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});
});