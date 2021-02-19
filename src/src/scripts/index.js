//  js入口文件
//引入zepto
	var $ = require('./components/zepto-modules/_custom');
	require('zepto-modules/ajax');
	//引入swiper
	var Swiper = require('./components/swiper/swiper.min.js');
	//引入swiper animate
	var SwiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');
	//引入iscroll
	var IScroll = require('./components/iscroll/iscroll.js');
	// console.log(Iscroll);
	
	var mySwiper = new Swiper ('.swiper-container', {
		effect: 'flip',
	  	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
	  })
	  
	//设置iscroll对象初始化默认hide
	$('#mainContent').hide();
	$('.swiper-container').hide();
	
	$('#enter').on('tap',function(){
		$('#mainContent').show();
		$('.swiper-container').hide();
		//进行post请求
		$.post('/api/skill',{},function(res){
			// console.log(res);
			var html = '';
			$.each(res,function(i,n){
				html += '<li>' + n.category + '</li>';
			})
			$('#scroller ul').html(html);
			var myScroll = new IScroll('#wrapper',{
				mouseWheel: true
			});  
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		})
		
	})
	$('#footer div').tap(function(){
		// console.log($(this).attr('id'));
		var tar = $(this).attr('id');
		$.post('/api/' + tar,{},function(res){
			// console.log(res);
			var html = '';
			$.each(res,function(i,n){
				if(tar == 'work'){
					html += '<li><img src="'+n.src+'">' + n.category + '</li>';
				}else if(tar == 'skill'){
					html += '<li><img src="'+n.src+'">' + n.name + '</li>'; 
				}else if(tar == 'product'){
					html += '<li><img src="'+n.src+'">' + n.description + '</li>'; 
				}else if(tar == 'interest'){
					html += '<li><img src="'+n.src+'">' + n.ball + '</li>';
				}else if(tar == 'my'){
					html += '<li><img src="'+n.src+'">' + n.name + '</li>';
				}
			})
			console.log(html)
			$('#scroller ul').html(html);
			new IScroll('#wrapper',{
				mouseWheel: true
			});  
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		})
	})
	$('#scroller ul').on('tap','li',function(){
		$(this).css('background-color','#ccc').siblings().css('background-color','#fff');
	})
	var interval = setInterval(function(){
		if(document.readyState === 'complete'){
			clearInterval(interval);
			$('.preload').hide();
			$('.swiper-container').show();
			mySwiper.updateContainerSize();
			mySwiper.updateSlidesSize();
		}else{
			$('.preload').show();
		}
	},100)
