$(function(){
	$('.rating a').hover(function(){            //划过显示会员价格
		$(this).addClass('active');
		$('.vipprice').css('display','block');
	},function(){
		$(this).removeClass('active');
		$('.vipprice').css('display','none');
	})

	$('.phonebuywrap').hover(function(){              //划过去手机购买
		$('.phonecode').css('display','block');
	},function(){
		$('.phonecode').css('display','none');
	})

	$('.sharetpwrap').hover(function(){              //划过去显示分享
		$('.sharetocontent').css('display','block');
	},function(){
		$('.sharetocontent').css('display','none');
	})

	$('.bigpicwrap').hover(function(){                      //放大镜部分
		$(this).children().css('display','block');
		$(document).on('mousemove',function(e){
			var $clientx=e.pageX,
				$clienty=e.pageY,
				$finalx=$clientx-$('.bigpicwrap').offset().left-$('.zoomcover').outerWidth()/2,
				$finaly=$clienty-$('.bigpicwrap').offset().top-$('.zoomcover').outerHeight()/2,
				$bigx=$finalx*($('.superbig img').outerWidth()-$('.superbig').outerWidth())/($('.bigpicitem').outerWidth()-$('.zoomcover').outerWidth()),
				$bigy=$finaly*($('.superbig img').outerHeight()-$('.superbig').outerHeight())/($('.bigpicitem').outerHeight()-$('.zoomcover').outerHeight());
			if($bigx<=0){
				$bigx=0;
			}
			if($bigx>=($('.superbig img').outerWidth()-$('.superbig').outerWidth())){
				$bigx=($('.superbig img').outerWidth()-$('.superbig').outerWidth());
			}
			if($bigy<=0){
				$bigy=0;
			}
			if($bigy>=($('.superbig img').outerHeight()-$('.superbig').outerHeight())){
				$bigy=($('.superbig img').outerHeight()-$('.superbig').outerHeight());
			}
			if($finalx<=0){
				$finalx=0;
			};
			if($finalx>=($('.bigpicitem').outerWidth()-$('.zoomcover').outerWidth())){
				$finalx=($('.bigpicitem').outerWidth()-$('.zoomcover').outerWidth());
			}
			if($finaly<-0){
				$finaly=0;
			}
			if($finaly>=$('.bigpicitem').outerHeight()-$('.zoomcover').outerHeight()){
				$finaly=$('.bigpicitem').outerHeight()-$('.zoomcover').outerHeight();
			}
			$('.zoomcover').css({left:$finalx,top:$finaly});
			$('.superbig img').css({left:-$bigx,top:-$bigy});
			// $('.zoomcover').text($clientx+''+$clienty);
		})
	},function(){
		$(this).find('div').css('display','none');
		$(document).off('mousemove');
	})
	/*$('.zoomcover').on('mousedown',function(){
		$(document).on('mousemove',function(e){
			var $clientx=e.pageX,
				$clienty=e.pageY,
				$finalx=$clientx-$('.bigpicwrap').offset().left-$('.zoomcover').outerWidth()/2,
				$finaly=$clienty-$('.bigpicwrap').offset().top-$('.zoomcover').outerHeight()/2;
			if($finalx<=0){
				$finalx=0
			};
			if($finalx>=($('.bigpicitem').outerWidth()-$('.zoomcover').outerWidth())){
				$finalx=($('.bigpicitem').outerWidth()-$('.zoomcover').outerWidth())
			}
			if($finaly<-0){
				$finaly=0;
			}
			if($finaly>=$('.bigpicitem').outerHeight()-$('.zoomcover').outerHeight()){
				$finaly=$('.bigpicitem').outerHeight()-$('.zoomcover').outerHeight();
			}
			$('.zoomcover').css({left:$finalx,top:$finaly});
			// $('.zoomcover').text($clientx+''+$clienty);
		})
	})
	$('.zoomcover').on('mouseup',function(){
		$(document).off('mousemove');
	})*/
	$('.smallpiclist a').on('click',function(){               //点击小图切换大图
		$this=$(this);
		$('.superbig img').attr('src','../img/detail/superbig'+($this.index()+1)+'.jpg');
		$('.bigpicitem').fadeOut(200,function(){
			$('.bigpicitem').attr('src','../img/detail/bigpic'+($this.index()+1)+'.jpg');
		});
		$('.bigpicitem').fadeIn(200);
	})

	/*$("body img").lazyload({
		effect: "fadeIn",
	});*/

	$('.navallwrap').hover(function(){
		$('.bannerlisthide').css('display','block');              //banner上的导航
	},function(){
		$('.bannerlisthide').css('display','none');
	})




	function floorad(objul,obja,objli/*,objbtn,objbtnlist*/){     //推荐产品的点击
		objul.css('width',(objli.outerWidth())*(objul.children().length))
		obja.eq(1).on('click',function(){    //点击右边的向左拉
			if(objul.position().left<=-((objli.outerWidth())*(objul.children().length-6))){
				objul.css('left',objul.position().left);
			}else{
				objul.animate({'left':objul.position().left-185},300);		
			}
		})
		obja.eq(0).on('click',function(){        //点击左键向右拉
			if(objul.position().left>=0){
				objul.css('left',0);
			}else{
				objul.animate({'left':objul.position().left+185},300);
			}
		})
		/*objbtn.on('mouseenter',function(){        //鼠标移入显示按钮
			objbtnlist.css('display','block');
		})
		objbtn.on('mouseleave',function(){           //鼠标移出隐藏按钮
			objbtnlist.css('display','none');
		})*/
	}
	floorad($('.goods-best ul'),$('.goods-bestwrap > p'),$('.goods-best ul li')/*,$('.goods-best ul'),$('.goods-best ul')*/)

	$('.goods-best ul li a').hover(function(){
		$(this).siblings().stop(true,true).animate({'bottom':0},300);
	},function(){
		$(this).siblings().stop(true,true).animate({'bottom':-27},300);
	})
	
	//最新产品的滚动
	$('.latestgoods ul').css('height',$('.latestgoods ul li').outerHeight()*$('.latestgoods ul').children().length);
	var $speed=$('.latestgoods ul li').outerHeight();
	function autoupdown(){
		timer=setInterval(function(){
			if($speed>0){
				if($('.latestgoods ul').position().top<=-($('.latestgoods ul li').outerHeight()*($('.latestgoods ul').children().length-3))){
					$speed*=-1;
				}
			}else if($speed<0){
				if($('.latestgoods ul').position().top>=0){
					$speed*=-1;
				}
			}
			$('.latestgoods ul').animate({'top':$('.latestgoods ul').position().top-$speed});
		},500)
	}
	autoupdown();
	$('.latest').hover(function(){       //划过终止计时器
		clearInterval(timer);
	},function(){
		autoupdown();
	})
	$('.dircbtn a').eq(0).on('click',function(){
		$speed=$('.latestgoods ul li').outerHeight();
		if($('.latestgoods ul').position().top<=-($('.latestgoods ul li').outerHeight()*($('.latestgoods ul').children().length-3))){
			$('.latestgoods ul').css('top',-($('.latestgoods ul li').outerHeight()*($('.latestgoods ul').children().length-3)));
		}else{
			$('.latestgoods ul').animate({'top':$('.latestgoods ul').position().top-$speed});
		}
	})
	$('.dircbtn a').eq(1).on('click',function(){
		$speed*=-1;
		if($('.latestgoods ul').position().top>=0){
			$('.latestgoods ul').css('top',0);
		}else{
			$('.latestgoods ul').animate({'top':$('.latestgoods ul').position().top-$speed});	
		}
	})

	/*var newTime=new Date(2016,8,22,08,00,0);           //倒计时截止的时间
	fnTime();
	setInterval(fnTime,1000)                         //设置计时器 一秒刷新一次
	function fnTime(){
	var nowTime=new Date();                           //获取当前时间    
	var t=Math.floor((newTime-nowTime)/1000);         //算出当前时间与目标时间的毫秒差 转成秒    
	var day=Math.floor(t/86400);                      //算出天数
	var hours=Math.floor(t%86400/3600);              //算出小时数
	var minutes=Math.floor(t%86400%3600/60);          //算出分钟数
	var seconds=t%60;                                  //算出秒数
	var str="";                                           
	str=day+"天"+hours+"小时"+minutes+"分"+seconds+"秒"; //保存到字符串里
	//document.body.innerHTML='<h1>距离考试还有</h1>'+str;
	$('.countdown').text(str);
	}*/
	$('.countdown').countdown('2016/9/24',function(event){        //倒计时截止的时间
		$(this).text(event.strftime(''
		    + '%D天'
		    + '%H小时'
		    + '%M分钟'
		    + '%S秒'));
	})
	
	$(window).on('scroll',function(){                      //导航吸顶
		$scrollh=$(window).scrollTop();
		if($scrollh>1082){
			$('.goods-detail-c .tit').css({'position':'fixed'});
			$('.goods-detail-r .top').css({'position':'fixed'});
			$('.goodsfloor').css({'position':'fixed','top':37});
		}else{
			$('.goods-detail-c .tit').css({'position':'relative'});
			$('.goods-detail-r .top').css({'position':'relative'});
			$('.goodsfloor').css({'position':'relative','top':0});
		}
		$('.detailfloorlist').each(function(i){              //滚动到那一楼 显示哪一楼的标志
			var $height=$('.detailfloorlist').eq(i).offset().top+$(this).height()/2; //楼层与浏览器的高度
			if($scrollh<$height){
				$('.goodsfloor ul li').removeClass('active');
				$('.goodsfloor ul li').eq(i).addClass('active');
				return false;
			}                             
		})
		$('.fixdatailfloor').each(function(i){              //滚动到那一楼 显示吸顶的标志
			var $height=$('.fixdatailfloor').eq(i).offset().top+$(this).height()/2; //楼层与浏览器的高度
			if($scrollh<$height){
				$('.goods-detail-c .tit ul li').removeClass('active');
				$('.goods-detail-c .tit ul li').eq(i).addClass('active');
				return false;
			}                             
		})
	})

	$('.goods-detail-c .tit ul li').on('click',function(){          //吸顶的点击点击直达楼层
		$('.goods-detail-c .tit ul li').removeClass('active');
		console.log($('.goods-detail-c .tit ul li'));
		$index=$(this).index();
		$(this).addClass('active');
		$('html,body').animate({'scrollTop':$('.fixdatailfloor').eq($index).offset().top-50},500);
	})

	$('.goodsfloor ul li').on('click',function(){             //商品评价点击的楼层
		$('.goodsfloor ul li').removeClass('active');
		$(this).addClass('active');
		$index=$(this).index();
		$('html,body').animate({'scrollTop':$('.detailfloorlist').eq($index).offset().top-50},500);
	})
	































})