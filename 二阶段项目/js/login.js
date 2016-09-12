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

	$('#registerfromphone').validate({
		rules:{
			phonenumber: {
				required: true,
				number:true,
				minlength: 11
			},
			registerpass:{
				required:true
			},
			fortrue:{
				equalTo:'#registerpass'
			}
		},
		messages:{
			phonenumber: {
				required: "手机号码不能为空",
				minlength: "-请输入有效的手机号"
			},
			registerpass:{
				required:'密码不能为空'
			},
			fortrue:{
				equalTo:"-两次密码输入不一致"
			}
		}
	})
	var $num1=0,
		$num2=0,
		$num3=0;                //通过数字判断密码强度
	$('#registerpass').on('keyup',function(){
		var reg=/[A-Z]/,
			reg2=/[a-z]/,
			reg3=/[0-9]/;
		$('.passstrength').addClass('changeborder');
		if($('#registerpass').val()==''){
			$('.passstrength').removeClass('changeborder');
		}
		if(reg.test($('#registerpass').val())==true){
			$num1=1;
		}else{
			$num1=0;
		}
		if(reg2.test($('#registerpass').val())==true){
			$num2=1;
		}else{
			$num2=0;
		}
		if(reg3.test($('#registerpass').val())==true){
			$num3=1;
		}else{
			$num3=0;
		}
		if(($num1+$num2+$num3)==1){
			$('#registerfromphone .passstrength').eq(0).addClass('color1');
		}else if(($num1+$num2+$num3)==2){
			$('#registerfromphone .passstrength').eq(0).removeClass('color1');
			$('#registerfromphone .passstrength').eq(1).addClass('color2');
		}else if(($num1+$num2+$num3)==3){
			$('#registerfromphone .passstrength').eq(0).removeClass('color1');
			$('#registerfromphone .passstrength').eq(1).removeClass('color2');
			$('#registerfromphone .passstrength').eq(2).addClass('color2');
		}
	})

	$('#registerfromemail').validate({           //表单验证
		rules:{
			emailurl:{
				required: true,
				email:true
			},
			registerfromemailpass:{
				required: true
			},
			isfortrue:{
				equalTo:'#registerfromemailpass'
			}
		},
		messages:{
			emailurl: {
				required: "邮箱地址不能为空",
				email: "-邮箱地址不合法"
			},
			registerfromemailpass:{
				required:'密码不能为空'
			},
			isfortrue:{
				equalTo:'-两次密码输入不一致'
			}
		}
	})
	$('#registerfromemailpass').on('keyup',function(){
		var reg=/[A-Z]/,
			reg2=/[a-z]/,
			reg3=/[0-9]/;
		$('.passstrength').addClass('changeborder');
		if($('#registerfromemailpass').val()==''){
			$('.passstrength').removeClass('changeborder');
		}
		if(reg.test($('#registerfromemailpass').val())==true){
			$num1=1;
		}else{
			$num1=0;
		}
		if(reg2.test($('#registerfromemailpass').val())==true){
			$num2=1;
		}else{
			$num2=0;
		}
		if(reg3.test($('#registerfromemailpass').val())==true){
			$num3=1;
		}else{
			$num3=0;
		}
		if(($num1+$num2+$num3)==1){
			$('#registerfromemail .passstrength').eq(0).addClass('color1');
		}else if(($num1+$num2+$num3)==2){
			$('#registerfromemail .passstrength').eq(0).removeClass('color1');
			$('#registerfromemail .passstrength').eq(1).addClass('color2');
		}else if(($num1+$num2+$num3)==3){
			$('#registerfromemail .passstrength').eq(0).removeClass('color1');
			$('#registerfromemail .passstrength').eq(1).removeClass('color2');
			$('#registerfromemail .passstrength').eq(2).addClass('color2');
		}
	})

	$('.clicktosms').on('click',function(){
		$(this).attr('disabled','true');
		$(this).val('5秒后再次发送');
		var i=5;
		timer=setInterval(function(){
			i--;
			$('.clicktosms').val(i+'秒后再次发送');
			if(i==0){
				clearInterval(timer);
				$('.clicktosms').removeAttr('disabled');
				$('.clicktosms').val('获取手机验证码');
			}
		},1000)
		setTimeout(function(){
			$('.shortmeassage').text('9527');
		},2000)
	})

































})