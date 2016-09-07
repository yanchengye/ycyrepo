




//首页banner图切换
$(function(){
	$('#banner>li').each(function(i){
		$(this).css('background','url(img/banner'+(i+1)+'.jpg) no-repeat center top');
	});
	var $index,$nextindex;                      //定义变量保存下标
	timer=setInterval(function(){
		$index=$('#banner>.active').index();                //获取下标
		$nextindex=$index+1;
		$('.banner-squlist').removeClass('active');
		$('.banner-squlist').eq($nextindex).addClass('active');
		if($index>$('#banner>li').size()-1){$index=0;};       //边界判断
		if($nextindex>$('#banner>li').size()-1){$nextindex=0;};
		$('#banner>li').eq($index).fadeOut(500);
		$('#banner>li').eq($nextindex).fadeIn(500);
		$('#banner>li').removeClass('active');
		$('#banner>li').eq($nextindex).addClass('active');
	},4000)
	$('.banner-square').on('mouseenter',function(){
		clearInterval(timer);
	})
	$('.banner-square').on('mouseleave',function(){
		timer=setInterval(function(){
			$index=$('#banner>.active').index();                //获取下标
			$nextindex=$index+1;
			$('.banner-squlist').removeClass('active');
			$('.banner-squlist').eq($nextindex).addClass('active');
			if($index>$('#banner>li').size()-1){$index=0;};       //边界判断
			if($nextindex>$('#banner>li').size()-1){$nextindex=0;};
			$('#banner>li').eq($index).fadeOut(500);
			$('#banner>li').eq($nextindex).fadeIn(500);
			$('#banner>li').removeClass('active');
			$('#banner>li').eq($nextindex).addClass('active');
		},4000)
	}) 
	$('.banner-squlist').on('click',function(){               //点击方块查看对应banner
		$('.banner-squlist').removeClass('active'); 
		$(this).addClass('active');
		$index=$(this).index();
		$('#banner>li').fadeOut(500);
		$('#banner>li').eq($index).fadeIn(500);
	})
})

//菜单
function downmenu(obj,child){
	obj.hover(function(){                    //顶部下拉菜单
		child.css('display','block');
	},function(){
		child.css('display','none');
	})
}
$(function(){
	$('.banner-list>li').hover(function(){                //banner的菜单
		$(this).css({'background':'#e31939','color':'#fff'});
		$(this).find('div').css('display','block')
	},function(){
		$(this).css({'background':'','color':'','borderLeft':''});
		$(this).find('div').css('display','none');
	})
	/*$('.header-city').hover(function(){                    //顶部城市下拉菜单
		$('.citylist').css('display','block');
	},function(){
		$('.citylist').css('display','none');
	})*/
	downmenu($('.header-city'),$('.citylist'));
	/*$('.header-myinfo').hover(function(){                    //顶部我的信息下拉菜单
		$('.myinfo-list').css('display','block');
	},function(){
		$('.myinfo-list').css('display','none');
	})*/
	downmenu($('.header-myinfo'),$('.myinfo-list'));
	/*$('.header-collect').hover(function(){                    //顶部收藏夹下拉菜单
		$('.collectitem').css('display','block');
	},function(){
		$('.collectitem').css('display','none');
	})*/
	downmenu($('.header-collect'),$('.collectitem'));
	/*$('.header-mobile').hover(function(){                    //顶部收藏夹下拉菜单
		$('.app').css('display','block');
	},function(){
		$('.app').css('display','none');
	})*/
	downmenu($('.header-mobile'),$('.app'));
	downmenu($('.header-seller'),$('.sellerhelp'));            //顶部帮助中心下拉
	downmenu($('.header-nav'),$('.navmenu'));

})


//楼层下面的品牌点击
function floorad(objul,obja,objli,objbtn,objbtnlist){
	objul.css('width',(objli.outerWidth())*(objul.children().length))
	obja.eq(1).on('click',function(){    //点击右边的向左拉
		if(objul.position().left<=-((objli.outerWidth())*(objul.children().length-10))){
			objul.css('left',objul.position().left);
		}else{
			objul.animate({'left':objul.position().left-122},300);		
		}
	})
	obja.eq(0).on('click',function(){        //点击左键向右拉
		if(objul.position().left>=0){
			objul.css('left',0);
		}else{
			objul.animate({'left':objul.position().left+122},300);
		}
	})
	objbtn.on('mouseenter',function(){        //鼠标移入显示按钮
		objbtnlist.css('display','block');
	})
	objbtn.on('mouseleave',function(){           //鼠标移出隐藏按钮
		objbtnlist.css('display','none');
	})
}
$(function(){
	floorad($('#index-1f .index-1f-bottom ul'),$('#index-1f .index-1f-bottombtn a'),$('#index-1f .index-1f-bottom ul li'),$('#index-1f .index-1f-bottom'),$('#index-1f .index-1f-bottombtn'));
	floorad($('#index-2f .index-1f-bottom ul'),$('#index-2f .index-1f-bottombtn a'),$('#index-2f .index-1f-bottom ul li'),$('#index-2f .index-1f-bottom'),$('#index-2f .index-1f-bottombtn'));
	floorad($('#index-3f .index-1f-bottom ul'),$('#index-3f .index-1f-bottombtn a'),$('#index-3f .index-1f-bottom ul li'),$('#index-3f .index-1f-bottom'),$('#index-3f .index-1f-bottombtn'));
	floorad($('#index-4f .index-1f-bottom ul'),$('#index-4f .index-1f-bottombtn a'),$('#index-4f .index-1f-bottom ul li'),$('#index-4f .index-1f-bottom'),$('#index-4f .index-1f-bottombtn'));
	floorad($('#index-5f .index-1f-bottom ul'),$('#index-5f .index-1f-bottombtn a'),$('#index-5f .index-1f-bottom ul li'),$('#index-5f .index-1f-bottom'),$('#index-5f .index-1f-bottombtn'));
	floorad($('#index-6f .index-1f-bottom ul'),$('#index-6f .index-1f-bottombtn a'),$('#index-6f .index-1f-bottom ul li'),$('#index-6f .index-1f-bottom'),$('#index-6f .index-1f-bottombtn'));
	floorad($('#index-7f .index-1f-bottom ul'),$('#index-7f .index-1f-bottombtn a'),$('#index-7f .index-1f-bottom ul li'),$('#index-7f .index-1f-bottom'),$('#index-7f .index-1f-bottombtn'));
	floorad($('#index-8f .index-1f-bottom ul'),$('#index-8f .index-1f-bottombtn a'),$('#index-8f .index-1f-bottom ul li'),$('#index-8f .index-1f-bottom'),$('#index-8f .index-1f-bottombtn'));
})

//楼层切换
$(function(){
	$('#floortab li').on('click',function(){               //点击直达楼层
		$('#floortab a').removeClass('active');
		$('#floortab span').removeClass('act');
		$(this).find('a').addClass('active');
		$(this).find('span').addClass('act');
		$(window).scrollTop($('.floorlist').eq($(this).index()).offset().top)
	})
	$(window).on('scroll',function(){                           //窗口滚动时事件

	})
})

//固定右侧栏
$(function(){
	$('#index-fixed>div').hover(function(){
		$(this).children().css('display','block');
		$(this).find($('.before')).stop(true,true).animate({'top':-38},200);
		$(this).find($('.after')).stop(true,true).animate({'top':0},200);
	},function(){
		$(this).find($('.hide')).css('display','none');
		$(this).find($('.before')).stop(true,true).animate({'top':0},200);
		$(this).find($('.after')).stop(true,true).animate({'top':38},200);
	})
})

//搜索框切换
$(function(){
	$('.top-search-tab').on('click',function(){
		$('.top-search-tab').removeClass('top-search-active');
		$(this).addClass('top-search-active');
	})
})

//banner选项卡
$(function(){
	$('.banner-blog >a').on('mouseenter',function(){
		$('.banner-blog >a').removeClass('active');
		$(this).addClass('active');
		$('.banner-blog div').css('display','none');
		$('.banner-blog div').eq($(this).index()).css('display','block');
	})
})

//白酒的点击事件
$(function(){
	$('.wine-spirit-btn .right').on('click',function(){  //白酒切换
		$('.wine-spirit1').animate({'left':-1200});
		$('.wine-spirit2').animate({'right':0});
	})
	$('.wine-spirit-btn .left').on('click',function(){
		$('.wine-spirit1').animate({'left':15});
		$('.wine-spirit2').animate({'right':-1183});
	})
	/*$('.wine-spirit-wrap').hover(function(){              //鼠标移入 显示按钮
		$('.wine-spirit-btn').css('display','block');
	},function(){
		$('.wine-spirit-btn').css('display','none');
	})*/
	$('#wine > a').eq(0).on('mouseenter',function(){
		$('#wine > a').removeClass('wine-active');
		$(this).addClass('wine-active');
		$('.wine-spirit').css('display','none');
		$('.wine-spirit-wrap').css('display','block');
		$('.wine-spirit1').css('display','block');
		$('.wine-spirit2').css('display','block');
	})
	$('#wine > a').eq(1).on('mouseenter',function(){
		$('#wine > a').removeClass('wine-active');
		$(this).addClass('wine-active');
		$('.wine-spirit').css('display','none');
		$('.wine-spirit-wrap').css('display','none');
		$('.wine-local').css('display','block');
	})
	$('#wine > a').eq(2).on('mouseenter',function(){
		$('#wine > a').removeClass('wine-active');
		$(this).addClass('wine-active');
		$('.wine-spirit-wrap').css('display','none');
		$('.wine-red').css('display','block');
	})
})

$(function(){                                       //热门店铺
	$('.hotstores-center a').hover(function(){
		$(this).stop(true,true).animate({'top':-10},300).animate({'top':0},300);
	},function(){

	})
})

$(function(){
	$('.tablist').hover(function(){                   //疯狂抢购
		$('.tablist').removeClass('active');
		$(this).addClass('active');
		$index=$(this).index();
		$('.tabitem').removeClass('act');
		$('.tabitem').eq($index).addClass('act');	
	},function(){

	})
})
function floorchoose(obj,obj2){
	obj.hover(function(){
		obj.removeClass('active');
		$(this).addClass('active');
		$index=$(this).index();
		obj2.removeClass('active');
		obj2.eq($index).addClass('active');
	})
}
$(function(){                                                            //楼层的选项卡
	/*$('#index-1f .tab a').hover(function(){
		$('#index-1f .tab a').removeClass('active');
		$(this).addClass('active');
		$index=$(this).index();
		$('#index-1f .index-1f-middle-goods').removeClass('active');
		$('#index-1f .index-1f-middle-goods').eq($index).addClass('active');
	})*/
	floorchoose($('#index-1f .tab a'),$('#index-1f .index-1f-middle-goods')); //一楼的
	floorchoose($('#index-2f .tab a'),$('#index-2f .index-1f-middle-goods'));
	floorchoose($('#index-3f .tab a'),$('#index-3f .index-1f-middle-goods'));
	floorchoose($('#index-4f .tab a'),$('#index-4f .index-1f-middle-goods'));
	floorchoose($('#index-5f .tab a'),$('#index-5f .index-1f-middle-goods'));
	floorchoose($('#index-6f .tab a'),$('#index-6f .index-1f-middle-goods'));
	floorchoose($('#index-7f .tab a'),$('#index-7f .index-1f-middle-goods'));
	floorchoose($('#index-8f .tab a'),$('#index-8f .index-1f-middle-goods'));
})