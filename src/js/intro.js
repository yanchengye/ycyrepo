$(function() {
    $('footer .f-content').on('tap', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var $index = $('footer .active').index();
        $('.swiper-slide').eq($index).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active');
		$('.content').eq($index).addClass('active').siblings().removeClass('active');
    })
	$('.swiper-container').on('click',function(){
		$(this).toggle();
	})
    var myScroll,
        pullDownEl, pullDownOffset,
        pullUpEl, pullUpOffset,
        generatedCount = 0,
        oIscroll1 = document.querySelector('#iscroll1');
        // console.log(oIscroll1);
    function pullDownAction() {  //下拉刷新
        /*setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');
    
            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerText = 'Generated row ' + (++generatedCount);
                el.insertBefore(li, el.childNodes[0]);
            }
    
            myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000); // <-- Simulate network congestion, remove setTimeout from production!*/
    }
    
	var arr = [{'src':'./images/zepto.png','name':'zapto'},{'src':'./images/gulp.png','name':'gulp'}];
    
    function pullUpAction() {     //上拉加载
        setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
            var item1, div, img, span;
            item1 = document.getElementById('item1');
            for (i = 0; i < arr.length; i++) {
                div = document.createElement('div');
                img = document.createElement('img');
                img.src = arr[i].src;
                span = document.createElement('span');
                span.innerText = arr[i].name;
                div.appendChild(img);
                div.appendChild(span);
                item1.appendChild(div);
                // console.log(div);
            }
            myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
    }

    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        pullUpEl = document.getElementById('pullUp');
        pullUpOffset = pullUpEl.offsetHeight;
    
        myScroll = new iScroll('#iscroll1', {
            useTransition: true,
            topOffset: pullDownOffset,
            onRefresh: function() {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                } else if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                }
            },
            onScrollMove: function() {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                    this.minScrollY = -pullDownOffset;
                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                    pullDownAction(); // Execute custom function (ajax call?)
                } else if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
                    pullUpAction(); // Execute custom function (ajax call?)
                }
            }
        });
    
        setTimeout(function() {
            document.getElementById('iscroll1').style.left = '0';
        }, 800);
    }
    
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(loaded, 200);
    }, false);
})
