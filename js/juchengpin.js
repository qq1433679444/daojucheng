//菜单显示隐藏

$(".menu_right").hover(
	function(){
		$(".zidan").show();
		
	},
	function(){
		$(".zidan").hide();
		
	}
)
$(".zidan").hover(
	function(){
		$(".zidan").show()
	},
	function(){
		$(".zidan").hide()
	}
)

$("#tou").addClass("shang_tou")
$(window).scroll(function(){

	if($(window).scrollTop()>600){
		
		
		$("#tou").css({
			"position":"fixed",
			"top":"0",
			"z-index":"100"
		})
		
	}else{
		
		$("#tou").css({
			"position":"relative",
			"z-index":"1"
		})
	}
	var ping = $(window).scrollTop()
	
})


$(function(){
	$(".clearfixx li a").hover(
	function(){
		$(this).parent().css({
			"box-shadow":"0px 10px 20px #ccc"
		})
		$(this).parent().stop().animate({
			
			top:"-5px"
			
		},200)
	},
	function(){
		$(this).parent().css({
			"box-shadow":"none"
		})
		$(this).parent().stop().animate({

			top:"0"
		},200)
	}
	
	)

})
//li的动画效果 身体里
