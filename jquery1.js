
$(document).ready(function(){
	$('#my_style').css("color","#2d3f44");
	$('.nav-item').hover(function(){

	$(this).css("font-size","20px");
	},
	function() {
		$(this).css("font-size","15px");
	});
	$('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
	
	$('#contact_cece').text("Contact Cece");




});
