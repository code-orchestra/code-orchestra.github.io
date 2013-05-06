// JavaScript Document

		$(function(){
			$('#titul-slides').slides({
				preload: true,
				preloadImage: 'img/loading.gif',
				play: 5000,
				pause: 2500,
				hoverPause: true,
				animationStart: function(current){
					$('.caption').animate({
						opacity:0
					},100);
					$('#slides-header').animate({
						opacity:0
					},100);
					if (window.console && console.log) {
						// example return of current slide number
						console.log('animationStart on slide: ', current);
					};
				},
				animationComplete: function(current){
					$('.caption').animate({
						opacity:1.0
					},200);
					$('#slides-header').css('background-image','url(images/text'+current+'.png)');
					$('#slides-header').animate({
						opacity:1.0
					},200);
					if (window.console && console.log) {
						// example return of current slide number
						console.log('animationComplete on slide: ', current);
					};
				},
				slidesLoaded: function() {
					$('.caption').animate({
						opacity:1.0
					},200);
				}
			});
		});

		$(document).ready(function(){
			$("#tabsCo2").verticaltabs({speed: 500,slideShow: false,activeIndex: 0});
		});
    
      $(document).ready(function(){
        $("a[rel^='prettyPhoto']").prettyPhoto();
      });
    
		$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility				
			$("#carousel-ytube").sliderkit({
				auto:true,
				autospeed:4000,
				shownavitems:5,
				circular:true,
				fastchange:false,
				scrolleasing:"easeOutExpo", //"easeOutBounce, easeOutBack"
				scrollspeed:500
			});	
		});	
