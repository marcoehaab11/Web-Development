/*$(document).ready(function(){
var open = $(".open")
$("button").click(function(){
	open.slideUp().slideDown().fadeOut().fadeIn().hide().show().animate({width:'500px',left:'200px',height:'300',borderRadius:'20px'},2000)
});

var text =$(".text").text();
$("p").html(text);

$("button").click(function(){
	$(".call").text("You have Write " + $("input").val());
	alert("You have Write " + $("input").val());

	$("a").attr("href","https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi-zeLOn43oAhVD7eAKHeh3CjIQPAgH")
});

$(".Chat").click(function(){
	$(this).toggleClass("border");
});

*/
/*

$(document).ready(function(){

$(".child").parentsUntil(".moo").css("border","3px solid #F00");

$(".parent").find($("p:contains('love')")).css("border","3px solid #0F0");

$(".parent").click(function(){
	$(this).toggleClass("border");
});


});
*/

$(document).ready(function()
{
	$("div:odd").css("border","2px solid #0F0");


	$("#addclass").click(function(){
		$("p:first").addClass('color')
	});

	$("#removeclass").click(function(){
		$("p:first").removeClass('color')
	});

	$("#toggleclass").click(function(){
		$("p:first").addClass('color')
	});

	$("#insclass").click(function(){
		$("p:first").css("font-size","+=1px")
	});








});




























