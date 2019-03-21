$(".luntans").hide()
$(".luntanx").mouseover(function(){
	$(".luntans").show();
	$(".luntanx").hide()
})
$(".luntans").mouseover(function(){
	$(".luntans").show();
	$(".luntanx").hide()
})
$(".luntans").mouseout(function(){
	$(".luntans").hide();
	$(".luntanx").show()
})

//搜索游戏


$(".youxi").hover(
	function(){
		$(".xuanyou").css(
			"background","url(imgs/xiaoguai2.png) no-repeat center right"
		);
		$(".youxibiao").show();
	},
	function(){
		$(".xuanyou").css(
			"background","url(imgs/xiaoguai1.png) no-repeat center right"
		);
		$(".youxibiao").hide()
	}
	)


$(".liebiao").find("li").css("background-position","30px")

$(".all_left").hover(
	function(){
		$(".liebiao").show(),
		$(".fenlei").hide()
	},
	function(){
		$(".liebiao").hide(),
		$(".fenlei").show()
	}
)
$(".fenleia").hover(
	function(){
		$(this).find("a").css("color","#333");
		$(this).css({
			"background":"#fff",
			"border":"none",
			"height":"67px",
			
		});
		$(this).find("i").css("background","url(imgs/youguaibai.png)  no-repeat center right");
		var biao = $(this).index();
		if(biao == 1){
			$(".tu1").css("background","url(imgs/heiren5.png) no-repeat center left")
		};
		if(biao == 2){
			$(".tu2").css("background","url(imgs/heiren2.png) no-repeat center left")
		}
		if(biao == 3){
			$(".tu3").css("background","url(imgs/heiren3.png) no-repeat center left")
		}
		if(biao == 4){
			$(".tu4").css("background","url(imgs/heiren4.png) no-repeat center left")
		}
		if(biao == 5){
			$(".tu5").css("background","url(imgs/heiren1.png) no-repeat center left")
		};
		
	},
	function(){
		$(this).find("a").css("color","#FFFFFF");
		$(this).css({
			"background":"#f75757",
			"border":"none",
			"height":"66px",
			"border-bottom":"1px solid #ee4545"
			
			
			
		});
		$(this).find("i").css("background","url(imgs/youguai.png)  no-repeat center right");
		
		var biao = $(this).index();
		if(biao == 1){
			$(".tu1").css("background","url(imgs/ren5.png) no-repeat center left")
		};
		if(biao == 2){
			$(".tu2").css("background","url(imgs/ren2.png) no-repeat center left")
		}
		if(biao == 3){
			$(".tu3").css("background","url(imgs/ren3.png) no-repeat center left")
		}
		if(biao == 4){
			$(".tu4").css("background","url(imgs/ren4.png) no-repeat center left")
		}
		if(biao == 5){
			$(".tu5").css("background","url(imgs/ren1.png) no-repeat center left")
		}
	}
)
var jie;
//左边列表二级 三级
$(".liebiao .fenleia").hover(
	function(){
		var leij = $(this).index();
		$(".fenleib .b").eq(leij-1).show()
		
		
		return jie = leij
	},
	function(){
		var leij = $(this).index();
		$(".fenleib .b").eq(leij-1).hide()
		
	}
)
$(".b").hover(
	function(){
		
		$(this).show();
		var bai = $(this).index();
	
		
		$(".fenleia").eq(bai).find("a").css("color","#333");
		$(".fenleia").eq(bai).css({
			"background":"#fff",
			"border":"none",
			"height":"67px",
			
		});
		$(".fenleia").eq(bai).find("i").css("background","url(imgs/youguaibai.png)  no-repeat center right");
		
		if(bai == 0){
			$(".tu1").css("background","url(imgs/heiren5.png) no-repeat center left")
		};
		if(bai == 1){
			$(".tu2").css("background","url(imgs/heiren2.png) no-repeat center left")
		}
		if(bai == 2){
			$(".tu3").css("background","url(imgs/heiren3.png) no-repeat center left")
		}
		if(bai == 3){
			$(".tu4").css("background","url(imgs/heiren4.png) no-repeat center left")
		}
		if(bai == 4){
			$(".tu5").css("background","url(imgs/heiren1.png) no-repeat center left")
		};
	},
	function(){
		
		$(this).hide()
		var bai = $(this).index();
		$(".fenleia").eq(bai).find("a").css("color","#FFFFFF");
		
		$(".fenleia").eq(bai).css({
			"background":"#f75757",
			"border":"none",
			"height":"66px",
			"border-bottom":"1px solid #ee4545"	
		});
		$(".fenleia").eq(bai).find("i").css("background","url(imgs/youguai.png)  no-repeat center right");
		

		if(bai == 0){
			$(".tu1").css("background","url(imgs/ren5.png) no-repeat center left")
		};
		if(bai == 1){
			$(".tu2").css("background","url(imgs/ren2.png) no-repeat center left")
		}
		if(bai == 2){
			$(".tu3").css("background","url(imgs/ren3.png) no-repeat center left")
		}
		if(bai == 3){
			$(".tu4").css("background","url(imgs/ren4.png) no-repeat center left")
		}
		if(bai == 4){
			$(".tu5").css("background","url(imgs/ren1.png) no-repeat center left")
		}
		
	}
)

var game_sou = document.getElementById("game_kuang");



$("#sousuo").hover(
	function(){
	$("#sousuo").css("color","#000")
},
function(){
	$("#sousuo").css("color","#aaa8a8");
	
}
	)
$("#game_kuang").focus(function(){
	game_sou.placeholder="";
	$("#game_kuang").css("color","#000")
})
$("#game_kuang").blur(function(){
	game_sou.placeholder="请输入游戏名称查询";
})


//收起打开


$(".gengduo").click(function(){
	$(".game_left").hide();
	$(".game_huan").show();
});
$(".gengduo_fu").click(function(){
	$(".game_huan").hide();
	$(".game_left").show();
	
	
})

//打开收起切换

$(".suoyou").eq(0).show();
$(".suoyou").click(function(){
	$(".suoyou").css({
		"color":"#3a3f4a",
		"font-weight":"normal"
	})
	
	var suoyou_huan = $(this).index()/2;
	console.log(suoyou_huan);


	$(".huan_qu").hide();
	$(".huan_qu").eq(suoyou_huan).show();
	$(this).css({
		"color":"#f74a4a",
		"font-weight":"800"
	});
	
	


	
})
