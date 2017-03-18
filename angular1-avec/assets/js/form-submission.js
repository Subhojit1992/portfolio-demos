
/*********** to buy form **************/
jQuery(document).ready(function($) {
	$("#buyform").validate({
		submitHandler: function(form) {
			// console.log($(form).serialize());

			$.ajax({
				url : 'form-submission.php',
				type: 'POST',
				data : $(form).serialize(),
				success: function(resp){
					$("#buyform").hide();
					$("#to-buy").children(".formcontent").children("p:first").html("<p>Thank you.</p><p>Avec team shall contact you shortly.</p>");
				}
			});
		}
	});	
});

/*********** to let form **************/
jQuery(document).ready(function($) {
	$("#letform").validate({
		submitHandler: function(form) {
			// console.log($(form).serialize());

			$.ajax({
				url : 'form-submission.php',
				type: 'POST',
				data : $(form).serialize(),
				success: function(resp){
					$("#letform").hide();
					$("#to-let").children(".formcontent").children("p:first").html("<p>Thank you.</p><p>Avec team shall contact you shortly.</p>");
				}
			});
		}
	});	
});

/*********** register form **************/
jQuery(document).ready(function($) {
	$("#registerform").validate({
		submitHandler: function(form) {
			// console.log($(form).serialize());

			$.ajax({
				url : 'form-submission.php',
				type: 'POST',
				data : $(form).serialize(),
				success: function(resp){
					$("#registerform").hide();
					$("#register").children(".formcontent").children("p:last").hide();
					$("#register").children(".formcontent").children("p:first").html("<p>Thank you.</p><p>Avec team shall contact you shortly.</p>");
				}
			});
		}
	});	
});

/*********** sidebar form **************/
jQuery(document).ready(function($) {
	$("#sidebarform").validate({
		submitHandler: function(form) {
			// console.log($(form).serialize());

			$.ajax({
				url : 'form-submission.php',
				type: 'POST',
				data : $(form).serialize(),
				success: function(resp){
					$("#sidebarform").hide();
					$(".sidebarformwrap h4").html("Thank you. <br> Avec team shall contact you shortly.");
				}
			});
		}
	});	
});

/*********** newsletter form **************/
jQuery(document).ready(function($) {
	$("#news_form").validate({
		submitHandler: function(form) {
			// console.log($(form).serialize());

			$.ajax({
				url : 'form-submission.php',
				type: 'POST',
				data : $(form).serialize(),
				success: function(resp){
					/*$("#sidebarform").hide();
					$(".sidebarformwrap").children(".contact-form").children("h4:first").text("Thank you");*/
					$('#pop-sub').addClass('active');
				}
			});
		}
	});	
});


