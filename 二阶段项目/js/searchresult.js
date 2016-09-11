$(function(){
	$('.searchresultgoods ul li').hover(function(){       //划过商品显示加入购物车按钮
		$('.puttoshopcart').stop(true,true).eq($(this).index()).fadeIn();
	},function(){
		$('.puttoshopcart').stop(true,true).eq($(this).index()).fadeOut();
	})

	$('.guessprobable ul li').clone().appendTo($('.guessprobable ul'));
	$('.guessprobable ul').css('width',$('.guessprobable ul li').outerWidth()*$('.guessprobable ul li').size())
	$('.btnleft').on('click',function(){                       //点击左往左
		if($('.guessprobable ul').position().left===0){
				$('.guessprobable ul').css('left',-1472);
			}
		$('.guessprobable ul').animate({'left':$('.guessprobable ul').position().left+184})
	})
	$('.btnright').on('click',function(){                      //点击右往右
		automove();
	})
	function automove(){                               //自动轮播
		if($('.guessprobable ul').position().left===-1472){
				$('.guessprobable ul').css('left',0);
			}
		$('.guessprobable ul').animate({'left':$('.guessprobable ul').position().left-184});
	}
	timer=setInterval(function(){                          //自动滚动
		automove();
	},1000)
	$('.guessright').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			automove();
		},1000)
	})

	$('.saleschartslist').hover(function(){                   //销量排行榜
		$('.saleschartsitem').toggleClass('active');
		$('.saleschartsitems').toggleClass('active');
	},function(){})

	var $btn=true;
	$('.leftsidemenu ul li div').on('click',function(){
		$(this).siblings().slideToggle();
		if($btn){
			$(this).find('i').css('background-position','-17px -250px');
			$btn=false;
		}else{
			$(this).find('i').css('background-position','0 -250px');
			$btn=true;
		}
	})
})