$(document).ready(function(){
	$("body #sou_2").hover(function(){
		$("#sou_2 input").val("请选择游戏搜索道具")
	},function(){
		$("#sou_2 input").val("")
	})
	$("body #sou_2").click(function(){
		$("#sou_2 input").val("")
	})
	
	$("#sousuo").hover(
	function(){
	$("#sousuo").css("color","#000")
},
function(){
	$("#sousuo").css("color","#aaa8a8")
}
	)

	
	
	
	$(".jsby_list ul li").mouseover(function(){
		$(this).css("background-color","#FF0000")
		$(this).find("a").css("color","#fff")
	})
	$(".jsby_list ul li").mouseleave(function(){
		$(this).css("background-color","#FFFFFF")
		$(this).find("a").css("color","#808080")
	})

	
	$(".jjyx_list ul li").mouseover(function(){
		$(this).css("background-color","#FF0000")
		$(this).find("a").css("color","#fff")
	})
	$(".jjyx_list ul li").mouseleave(function(){
		$(this).css("background-color","#FFFFFF")
		$(this).find("a").css("color","#808080")
	})
	
	
	
	$(".xxyx_list ul li").mouseover(function(){
		$(this).css("background-color","#FF0000")
		$(this).find("a").css("color","#fff")
	})
	$(".xxyx_list ul li").mouseleave(function(){
		$(this).css("background-color","#FFFFFF")
		$(this).find("a").css("color","#808080")
	})

	
	$(".wyyx_list ul li").mouseover(function(){
		$(this).css("background-color","#FF0000")
		$(this).find("a").css("color","#fff")
	})
	$(".wyyx_list ul li").mouseleave(function(){
		$(this).css("background-color","#FFFFFF")
		$(this).find("a").css("color","#808080")
	})

	
	$(".lunbo1 ul").children().css("display", "none")
	$(".lunbo1 ul li").first().css("display", "block")
	
	$(".lunbo2 ul").children().css("display", "none")
	$(".lunbo2 ul li").first().css("display", "block")
	
	$(".lunbo3 ul").children().css("display", "none")
	$(".lunbo3 ul li").first().css("display", "block")

//		$(".lunbo1 ul li").eq(0).slideUp(2000);
//		$(".lunbo1 ul li").eq(1).slideDown(2000);

            var n = 0;
			var time = null

			function run1() {
				time = setInterval(function() {
					n++
					if(n == 5) {
						n = 0
					}
					$(".lunbo1 ul li").eq(n).show();
					$(".lunbo1 ul li").eq(n).siblings().hide();
				}, 1500)
			}
			run1();
			
			function run2() {
				time = setInterval(function() {
					n++
					if(n == 5) {
						n = 0
					}
					$(".lunbo2 ul li").eq(n).show()
					$(".lunbo2 ul li").eq(n).siblings().hide();
				}, 1500)
			}
			run2();

	function run() {
				time = setInterval(function() {
					n++
					if(n == 5) {
						n = 0
					}
					$(".lunbo3 ul li").eq(n).show()
					$(".lunbo3 ul li").eq(n).siblings().hide();
				}, 1500)
			}
			run();
			
			$("#asdf").click(function(){
				if($('#asdf').is(':checked')==true){
					$("#daojv_list").hide()
				}else{
					$("#daojv_list").show()
				}
			})
			
			$(function(){
$(".flip").click(function(){
    $(".listlb").slideToggle('fast');
    $(".1").toggle();
    $(".2").toggle();
  });});
			
})
