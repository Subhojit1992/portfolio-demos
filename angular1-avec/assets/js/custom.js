// ******************************
// Document Ready
// ******************************
jQuery(document).ready(function($) {


	// **********************************
	// main mobile menu click |= START =|
	// **********************************
		// $('#mobiletrigger').on('click', function(event) {
		// 	event.preventDefault();
		// 	 //Act on the event 
		// 	$('#slidenav').slideToggle();
		// 	$(this).toggleClass('active');
		// });
	// ********************************
	// main mobile menu click |= END =|
	// ********************************



	// ****************************
	// main home slider |= START =|
	// ****************************
		$('#slides').superslides({
			// inherit_height_from: '#mn-slider'
		});
	// ****************************
	// main home slider |= END =|
	// ****************************


	// *********************************************
	// to form right side grouped button |= START =|
	// *********************************************
		// $('.spclnav li').each(function(index, el) {
		// 	var $getTrigger = $(this).find('a');

		// 	$getTrigger.on('click', function(event) {
		// 		event.preventDefault();
		// 		/* Act on the event */
		// 		// store local data
		// 		var getDataId  = $(this).data('id'),
		// 		    mkProperId = '#' + getDataId;
	 //            // made a event with data
	 //            $('body').addClass('pop-active');
	 //            $('.popwrap').addClass('active');
		// 		$(mkProperId).fadeIn('100');
		// 	});
		// });

		// popup close logic
		// $('.to-pop-cls').on('click', function(event) {
		// 	event.preventDefault();
		// 	/* Act on the event */
		// 	$('body').removeClass('pop-active');
		// 	$('.popwrap').removeClass('active');
		// 	$(this).parents('.to-form').fadeOut('100');
		// });


		// header form 
		// $("#buyform").validate();
		// $("#letform").validate();
		// $("#registerform").validate();

		// // body form 
		// $('#sidebarform').validate();

		// email validation regex code
		// $.validator.methods.email = function( value, element ) {
		//   return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
		// }
		// header form
	// *********************************************
	// to form right side grouped button |= END =|
	// *********************************************



	// ********************************
	// subscribe popup hide |= START =|
	// ********************************
		// $('#subpopcls').on('click', function(event) {
		// 	event.preventDefault();
		// 	 // Act on the event 
		// 	$(this).parent('#pop-sub').removeClass('active');
		// 	$("#news_form input").val('');

		// });
	// ******************************
	// subscribe popup hide |= END =|
	// ******************************




	// trigger 'resize' func
	// $(window).trigger('resize');

});



// ******************************
// Load Resize
// ******************************
$(window).on("load resize",function(e){

	// // get the window width and height
	// var winW = $(window).width(),
	// 	winH = $(window).height();

	// // slider container height set
	// var getHdrHght = $('#header').outerHeight(),
	// 	sliderValue = (winH - getHdrHght) + 'px';

	// $('#mn-slider').height(sliderValue);

	// header padding for fixed nav
	// var headerHight = $('#header').outerHeight();
	// $('body').css({
	// 	paddingTop: headerHight + 'px'
	// });
	// // fixed spcl nav
	// $('#spclbtngrpnav.spclnav.mobile').css({
	// 	top: (headerHight + 5) + 'px'
	// });

	// // mobile menu resize appending
	// var $mainnav 	 = $('#mainnav'),
	// 	$navitem 	 = $mainnav.find('ul'),
	// 	$destination = $('#slidenav');
	// // on resize if else
	// if(winW <= 767){
	// 	$destination.append($navitem);
	// }else{
	// 	$mainnav.append($destination.find('ul'));
	// }



});




// ******************************
// Load
// ******************************
$( window ).load(function() {
	
	// preload remove
	// $('#preload').remove();


	
});



