$(document).ready(function(){
	$("body #sousuo").hover(function(){
		$("body #sousuo").val("请选择游戏搜索道具")
	},function(){
		$("body #sousuo").val("")
	})
	$("body #sousuo").click(function(){
		$("body #sousuo").val("")
		$("body #sousuo").prop("placeholder","")
	})
	$("body #sousuo").blur(function(){
		$("body #sousuo").val("")
		$("body #sousuo").prop("placeholder","请选择游戏搜索道具")
	})
	$("#xiazai").hover(function(){
		$("#xiazai").css("background","rgb(20,142,219)")
	},function(){
		$("#xiazai").css("background","deepskyblue")
	})
	$("#gouwuche").hover(function(){
		$("#gouwuche").css("background","rgb(228,51,51)")
	},function(){
		$("#gouwuche").css("background","rgb(247,74,74)")
	})
	var time=null
	var n=0
	for(var i=0;i<5;i++){
		$("#neirong1_2 img").eq(i).css("display","none")
	}
	$("#neirong1_2 img").eq(0).css("display","block")
	$("#neirong1_2_1_2 div").eq(0).css({"background":"orangered"})
	function a(){
		time=setInterval(function(){
		if(n==4){
			n=-1
		}
		n++
		$("#neirong1_2_1_2 div").eq(n).css({"background":"orangered"})
		$("#neirong1_2_1_2 div").eq(n).siblings().css({"background":"white"})
		for(i=0;i<5;i++){
			$("#neirong1_2 img").eq(i).css("display","none")
		}
		$("#neirong1_2 img").eq(n).css("display","block")
		
		
		},2000)
	
	
	}
	
	a()
	$("#neirong1_2 img").hover(function(){
		clearInterval(time)
	},function(){
		a()
	})
	
	$("#neirong1_2_1_2 div").hover(function(){
		n=$(this).index()
		$("#neirong1_2_1_2 div").eq(n).css({"background":"orangered"})
		$("#neirong1_2_1_2 div").eq(n).siblings().css({"background":"white"})
		for(i=0;i<5;i++){
			$("#neirong1_2 img").eq(i).css("display","none")
		}
		$("#neirong1_2 img").eq(n).css("display","block")
	})
	
	
	$("body #button").hover(function(){
		$(this).css("background","rgb(228,51,51)")
	},function(){
		$(this).css("background","rgb(247,74,74)")
	})
	
	$("#qiandao span").hover(function(){
		$(this).css("background","rgb(228,51,51)")
	},function(){
		$(this).css("background","rgb(247,74,74)")
	})
	
	
	$("#neirong3_1 div").hover(function(){
		$(this).find("p").eq(0).css({"color":"red","text-decoration":"underline"})
		$(this).find("h2").css({"color":"red","text-decoration":"underline"})
	},function(){
		$(this).find("p").eq(0).css({"color":"#3A3F4A","text-decoration":"none"})
		$(this).find("h2").css({"color":"#3A3F4A","text-decoration":"none"})
	})
	
	
	$("#neirong5_1_2_1 div").hover(function(){
		$(this).find("div").stop().animate({
			left:"8px"
		},300)
	},function(){
		$(this).stop().animate({
			left:"0px"
		},300)
	})
	
	
})
