/*global $,alert,cosole*/

$(function(){

	'use strict';

	// Adjust Header Height
	var myHeader= $('.header');
	myHeader.height($(window).height());

	$(window).resize(function(){
			myHeader.height($(window).height());

		  $('.slider').each(function (){
  $(this).css( 'paddingTop',($(window).height()-$('.slider div').height())/2);
 });




	
	});

	//Links Add Active Class

	$(".links li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	//Adjust BxSlider 

	  $('.slider').each(function (){
  $(this).css( 'paddingTop',($(window).height()-$('.slider div').height())/2);
 });



	// Trigger Bxslider

     $('.slider').bxSlider();
    
     // Smoth Scroll To Div

     $('.ser').click(function(){
     	$('html','body').animate({
     		 scrollTop: $('#' + $(this).data('value')).offset().top
     	},1000);
     })


});
 