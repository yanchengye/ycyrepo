$(function(){
	$('.searchresultgoods ul li').hover(function(){       //划过商品显示加入购物车按钮
		$('.puttoshopcart').stop(true,true).eq($(this).index()).fadeIn();
		$(this).css('z-index','8');
	},function(){
		var $that=$(this);
		$('.puttoshopcart').stop(true,true).eq($(this).index()).fadeOut(function(){
			$that.css('z-index','7');
		});
		
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

	$('.top-search-txt').on('keyup',function(){             //搜索热词提供
		$v=$('.top-search-txt').val();
		$.getJSON('http://www.yintai.com/ajaxpage/autosearch.aspx?keyword='+$v+'&callback=?',function(data){
			//console.log(data);
			$('.hotword').css('display','block');
			$('.hotword ul').html('');
			$.each(data,function(i){
				$li=$('<li>');
				$li.text(data[i].keyword);
				$('.hotword ul').append($li);
			})
		})
	})
	$('.top-search-txt').on('blur',function(){
		$('.hotword').css('display','none');
	})
	
	var $num=0,
		$totalpri=0;
	//购物车设置开始
	$('.puttoshopcart a').on('click',function(){
		var $goodsname=$(this).parent().prev().prev().prev().find('dd').find('a').text(),
			$goodspri=$(this).parent().prev().prev().prev().find('dd').find('i').text(),
			$goodsimg=$(this).parent().prev().prev().prev().find('dt').find('img').attr('src');
		// 存储之前判断一下是否存储过该商品
		var sGoods = $.cookie('puttoshopcart');
		if(typeof sGoods === 'undefined') {
			var oGoods = {
				goods: $goodsname,
				img: $goodsimg,
				num: 1,
				pri: $goodspri
			};
			// 存储所有商品
			var aGoods = [];
			aGoods.push(oGoods);
		} else {
			var aGoods  = JSON.parse(sGoods),
				isFirst = true; // 默认它是第一次添加
			for(var i =0; i < aGoods.length; i++) {
				if(aGoods[i].goods === $goodsname){
					aGoods[i].num++;                     //不是的话只加数量
					isFirst = false;
				}
			}
			// 判断是否为第一次添加
			if(isFirst) {
				var oGoods = {
					goods: $goodsname,
					img: $goodsimg,
					num: 1,
					pri: $goodspri
				};
				aGoods.push(oGoods);
			}
		}
		$.cookie('puttoshopcart',JSON.stringify(aGoods),{expires:7,path:'/'});
		if($('.shopcaritem ul').children().length===0){
			$('.thisnone').css('display','block');
			$('.shopcaritem ul').css('display','none');
		}else{
			$('.thisnone').css('display','none');
			$('.shopcaritem ul').css('display','block');
		}
		$('.shopcartgoods').html('');
		$('.shopcaritem ul').html('');
		$('.thisnone').css('display','none');
		$('.shopcaritem ul').css('display','block');
		var $aGood=JSON.parse($.cookie('puttoshopcart'));
		$.each($aGood,function(i){
			$shopcarstr='<div class="shopcartgoodsinfo"><li class="shopcartgoodsinfo1"><input type="checkbox" /></li><li class="shopcartgoodsinfo2"><dl><dt><a href="javascript:;"><img src="'+$aGood[i].img+'" alt=""></a></dt><dd><p><a href="javascript:;">'+$aGood[i].goods+'</a></p><span>尺码: </span><span>颜色: </span></dd></dl></li><li class="shopcartgoodsinfo3">'+$aGood[i].num+'</li><li class="shopcartgoodsinfo4">'+$aGood[i].pri+'</li><li class="shopcartgoodsinfo5">'+$aGood[i].pri*$aGood[i].num+'</li><li class="shopcartgoodsinfo6"><a href="javascript:;">删除</a></li></div>';
			$div=$('<div>');                        //创建标签 放到购物车里
			$div.attr('class','shopcartgoodswrap');
			$div.html($shopcarstr);
			$('.shopcartgoods').append($div);
			$li=$('<li>');
			$str2='<a href="javascript:;"><img src="'+$aGood[i].img+'" alt=""><h4>'+$aGood[i].goods+'</h4><span>'+$aGood[i].pri+'<strong>X</strong>'+$aGood[i].num+'</span></a><i>X</i>';
			$li.html($str2);
			$('.shopcaritem ul').append($li);
			$num+=$aGood[i].num;
			$totalpri+=$aGood[i].pri*$aGood[i].num;      //总价钱
		})
		$('.totalprice').text($totalpri);
		$('.shopcar .isgoods .totalnum').text($num);          //侧边购物车的数量显示
		$('.shopcar>span').text($num);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})