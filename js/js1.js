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
	var time=null
	for(var i=0;i<4;i++){
		$("#div2_1 img").eq(i).css("display","none")
	}
	
	var n=0
	$("#div2_1 img").eq(0).css("display","block")
	$("#div2_2 div").eq(0).css({"background":"rgb(247,74,74)"})
	function a(){
		time=setInterval(function(){
		n++
		if(n==4){
			n=0
		}
		$("#div2_2 div").eq(n).css({"background":"rgb(247,74,74)"})
		$("#div2_2 div").eq(n).siblings().css({"background":"black"})
		for(i=0;i<4;i++){
			$("#div2_1 img").eq(i).css("display","none")
		}
		$("#div2_1 img").eq(n).css("display","block")
		
		
		},2000)
	}
	a()
	
	$("#div2_1,#div2_2").hover(function(){
		clearInterval(time)
	},function(){
		a()
	})
	
	$("#div2_2 div").hover(function(){
		n=$(this).index()
		$("#div2_2 div").eq(n).css({"background":"rgb(247,74,74)"})
		$("#div2_2 div").eq(n).siblings().css({"background":"black"})
		for(i=0;i<4;i++){
			$("#div2_1 img").eq(i).css("display","none")
		}
		$("#div2_1 img").eq(n).css("display","block")
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
})
