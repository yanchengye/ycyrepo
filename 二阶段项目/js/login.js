$(function(){


	$('.wechatwrap').hover(function(){            //滑过微信显示二维码
		$('.wechatfloat').css('display','block');
	},function(){
		$('.wechatfloat').css('display','none');
	})


	$('#midwrap .midwrap-left').animate({left:0},800);    //页面加载执行   内容从两边进去
	$('#midwrap .midwrap-right').animate({right:0},800);

	$('.registerway').on('click',function(){              //点击切换手机注册邮箱注册
		$('.registerway').removeClass('active');
		$(this).addClass('active');
		$('.phone-email').removeClass('active');
		$('.phone-email').eq($(this).index()).addClass('active');
	})




































})