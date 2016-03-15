//javascript doc

$(function(){
	$('ul.worklist > li').hover(function(){
		$(this).find('section').fadeIn(200);
	},
	function(){
		$(this).find('section').fadeOut(200);
	})
	$(".gotoTop").click(function(){
		$("html,body").stop().animate({scrollTop:0},800);
	});
})