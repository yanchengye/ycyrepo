




//首页banner图切换
$(function(){
	$('#banner>li').each(function(i){
		$(this).css('background','url(img/banner'+(i+1)+'.jpg) no-repeat center top');
	});
	var $index,$nextindex;                      //定义变量保存下标
	setInterval(function(){
		$index=$('#banner>.active').index();                //获取下标
		$nextindex=$index+1;
		if($index>$('#banner>li').size()-1){$index=0;};       //边界判断
		if($nextindex>$('#banner>li').size()-1){$nextindex=0;};
		$('#banner>li').eq($index).fadeOut(500);
		$('#banner>li').eq($nextindex).fadeIn(500);
		$('#banner>li').removeClass('active');
		$('#banner>li').eq($nextindex).addClass('active');
	},4000)
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
$(function(){
	$('.index-1f-bottom ul').css('width',($('.index-1f-bottom ul li').outerWidth())*($('.index-1f-bottom ul').children().length))
	$('.index-1f-bottombtn a').eq(1).on('click',function(){    //点击右边的向左拉
		if($('.index-1f-bottom ul').position().left<=-(($('#index-1f .index-1f-bottom ul li').outerWidth())*($('.index-1f-bottom ul').children().length-10))){
			$('.index-1f-bottom ul').css('left',$('.index-1f-bottom ul').position().left);
		}else{
			$('.index-1f-bottom ul').animate({'left':$('.index-1f-bottom ul').position().left-122},300);		
		}
	})
	$('.index-1f-bottombtn a').eq(0).on('click',function(){        //点击左键向右拉
		if($('.index-1f-bottom ul').position().left>=0){
			$('.index-1f-bottom ul').css('left',0);
		}else{
			$('.index-1f-bottom ul').animate({'left':$('.index-1f-bottom ul').position().left+122},300);
		}
	})
	$('.index-1f-bottom').on('mouseenter',function(){        //鼠标移入显示按钮
		$('.index-1f-bottombtn').css('display','block');
	})
	$('.index-1f-bottom').on('mouseleave',function(){           //鼠标移出隐藏按钮
		$('.index-1f-bottombtn').css('display','none');
	})
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