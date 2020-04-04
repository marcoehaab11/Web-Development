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

     //Smoth Scroll to Div
     $('.ser').click(function(){
     	$(("html,boy")).animate({
     		scrollTop:$('#servies').offset().top
     	},1000);
     });
     $('.team').click(function(){
     	$(("html,boy")).animate({
     		scrollTop:$('#porta').offset().top
     	},1000);
    });
          $('.test').click(function(){
     	$(("html,boy")).animate({
     		scrollTop:$('#test').offset().top
     	},1000);
    });
          $('.port').click(function(){
     	$(("html,boy")).animate({
     		scrollTop:$('#Project').offset().top
     	},1000);
    });

    //Our Auto Slider Code

    (function autoslider(){
    	$('.sliderr .active').each(function(){
    		if(!$(this).is(':last-child')){
    			$(this).delay(3000).fadeOut(1000,function(){
    				$(this).removeClass('active').next().addClass('active').fadeIn();
    				autoslider();
    			});
    		} else{
    			$(this).delay(3000).fadeOut(1000,function(){
    				$(this).removeClass('active');
    				$('.sliderr div').eq(0).addClass('active').fadeIn();
    				autoslider();
    			})
    		}
    	});
    }());

   $('#Container').mixItUp();

   // Adjust shuffle Links

   $('.ourproject li').click(function(){
   	$(this).addClass('active2').siblings().removeClass('active2');
   });

   // Triggle Nice Scroll
   $('html').niceScroll({
   	cursorcolor:'#50c29e',
   	cursorborder: "1px solid #50c29e",
   	cursorwidth: "4px"
   });

});
 