;(function(){
	var index=0;
	$(".sliders_point li").eq(0).addClass("active")
	function change(){
		$("#sliders li").eq(index).show().siblings("li").hide();
		$(".sliders_point li").eq(index).addClass("active").siblings("li").removeClass("active");
	}
	function slider(){
		index++;
		change();
		if(index==$(".sliders_point li").length){
			index=0;
			change();
		}
	}
	var timer=setInterval(slider,3000);
	function stop(){
		clearInterval(timer);
	}
	$('#pre').click(function(){
		stop();
		index--;
		change();
		if(index<0){
			index=$(".sliders_point li").length;
			index--;
			change();
		}
		timer=setInterval(slider,3000);
	});
	$('#next').click(function(){
		stop();
		slider();
		timer=setInterval(slider,3000);
	});
	$('.sliders').hover(
		function(){
			$('.sliders>a').css('opacity',1);
		},function(){
			$('.sliders>a').css('opacity',0);
	});	
	$(".sliders_point li").on("click",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$("#sliders li").eq($(this).index()).show().siblings("li").hide();
	});
})();