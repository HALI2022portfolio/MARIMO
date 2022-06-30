$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(1)').click();
	// eq(0) 이렇게 되어있어서! 첫번째 탭이 기본으로 보여졌다~~@
	// 여기 값을 고쳐주고 나니깐 두번째 탭이 기본으로 보여짐 >_<

	// 우어.. 똑같은 소스로 고쳐버리니깐 메인페이지에도 영향 주잖아...!
	// 그래서 다시 이름 바꿔서 저장하는걸루.... 메인페이지는 photo가 보여야해.
  });
