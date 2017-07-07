$(document).ready(function () {

	/* Hamburger toggle 
	  --------------------------- */
	$('#fa-openclose').click(function(){
		$(this).find('i').toggleClass('fa-bars fa-times');
	});
	
	/* Scrolling 
	  --------------------------- */
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top-40}, 500);
	});
	
});
