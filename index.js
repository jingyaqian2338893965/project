$(function(){
	$(".liebiao  li").click(function(){
		var text=$(this).children().children()[1].innerHTML;
		if (text=="首页") {
			$(".right-2").load('pages/shouye.html')
		}else if(text=="栏目管理"){
			$(".right-2").load('pages/lanmu.html')
		}else if(text=="资讯管理"){
			$(".right-2").load('pages/zixun.html')
		}else if(text=="用户管理"){
			$(".right-2").load('pages/yonghu.html')
		}
	});

	//默认点击首页
	$(".liebiao li:first").trigger('click');

})