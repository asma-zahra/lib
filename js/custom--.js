$(document).ready(function(){
 /* redirect job seeker to .co.in */
	/*$('.lookingfor').on('change', function() {

  	if( this.value == 'job' ) {
  	
  		   window.location.replace('https://www.virtualemployee.co.in/contact-us');
  	
  		}
	});*/

	/* disable onclick for label - form*/
	$("form label").on('click',function(){return false;});
	/* PopUp Form Auto Fill */
	$(document).on('click','.popup-content .badge',function(){ 
	var tag = $(this).text(); 
	if($('#patentcustom #requirement_description').val().trim() == '') 
	{ 
		$('#patentcustom #requirement_description').val('Looking to hire ' + tag + ' expert.'); 
	} 
	else 
	{ 
		var found = '', existing = false; 
		$('.data-cont .badge').each(function(){ 
			if($('#patentcustom #requirement_description').val().indexOf($(this).text()) > -1)
			{ 
				found = $(this).text(); 
					if($(this).text() == tag) 
						existing = true; 
			} 
		}); 
		var old = $('#patentcustom #requirement_description').val(); 
		var updated = old; 
		if(found){ 
			if(!existing) 
			updated = old.replace(found, tag + ',' + found); 
		} 
		else 
		{ 
			updated = old + ' ' + 'Looking to hire ' + tag + ' expert.'; 
		} 
		$('#patentcustom #requirement_description').val(updated); 
	} 
	$('#patentcustom #requirement_description').focus();
	$('#patentcustom #requirement_description').addClass('bg-success text-white');
	setTimeout(   function()   {  $('#patentcustom #requirement_description').removeClass('bg-success text-white');  $('#patentcustom #name').focus();  }, 800); 
	});
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};

	testWebP(function(support) {
		if(support){
			$('body').addClass('webp');
			$(".detectWebp").each(function(){
				var imgTemp =  $(this).attr('data-src'); 
				var res = imgTemp.split(".");
				$(this).attr('src',res[0] + '.webp');
			});
		} else {
			$('body').addClass('non-webp');
			$(".detectWebp").each(function(){
				var imgTemp =  $(this).attr('data-src'); 
				$(this).attr('src',imgTemp);
			});
		}
	});	
	
    $('form').attr('action', document.location.href);

    $.validator.addMethod("customphone", function(e, r) {
        return this.optional(r) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(e)
    }, "Invalid Number");
    $.validator.addMethod("customEmail", function(e, r) {
        return this.optional(r) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
    }, "Invalid email");
    $.validator.addMethod("customName", function(e, r) {
        return this.optional(r) || /^([a-zA-Z0-9.\- ])+$/.test(e)
    }, "Invalid name");
    $.validator.addMethod("customUrl", function(e, r) {
        return this.optional(r) || /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/.test(e)
    }, "Invalid URL");
    $.validator.addMethod('checklength', function (value, element) {
		return this.optional(element) || value.length < 1801;
	}, "Maximum characters limit exceeded");
	
    $('.getStartedForm').each(function() {
		$(this).validate({
			debug: !1,
			errorElement: "em",
			errorContainer: $("#warning, #summary"),
			errorPlacement: function(e, r) {
				$(r).closest("form").find("label[for='" + r.attr("id") + "']").append(e)
			},
			success: function(e) {
				e.html("").addClass("success")
			},
			onkeyup: !1,
			highlight: function(e, r, a) {
				$(e).addClass(r).removeClass(a), $(e.form).find("label[for=" + e.id + "]").addClass("errorTick").removeClass("rightTick")
			},
			unhighlight: function(e, r, a) {
				$(e).removeClass(r).addClass(a), $(e.form).find("label[for=" + e.id + "]").removeClass("errorTick").addClass("rightTick")
			},
			errorElement: "span",
			rules: {
				name: {
					required: {
						depends: function() {
							return $(this).val($.trim($(this).val())), !0
						}
					}
				},
				email: {
					required: !0,
					customEmail: !0
				},
				phone: {
					required: !0,
					customphone: !0
				},
				project_duration: "required",
				requirement_description: {
					required: {
						depends: function() {
							return $(this).val($.trim($(this).val())), !0
						}
					},
						checklength : true
				}
			},
			messages: {
				name: "Enter name",
				email: {
					required: "Enter email",
					customEmail: "Invalid email"
				},
				phone: {
					required: "Enter number",
					customphone: "Invalid number"
				},
				project_duration: "Select one",
				requirement_description: {
					required: "Enter details",
					checklength: "Maximum characters limit exceeded"
				}
			},
			submitHandler: function (form) {
				// Prevent double submission
				if (!this.beenSubmitted) {
					this.beenSubmitted = true;
					form.submit();
				}
			}
		});
	});
    $('.getStartedFormJob').each(function() {
		$(this).validate({
			debug: !1,
			errorElement: "em",
			errorContainer: $("#warning, #summary"),
			errorPlacement: function(e, r) {
				$(r).closest("form").find("label[for='" + r.attr("id") + "']").append(e)
			},
			success: function(e) {
				e.html("").addClass("success")
			},
			onkeyup: !1,
			highlight: function(e, r, a) {
				$(e).addClass(r).removeClass(a), $(e.form).find("label[for=" + e.id + "]").addClass("errorTick").removeClass("rightTick")
			},
			unhighlight: function(e, r, a) {
				$(e).removeClass(r).addClass(a), $(e.form).find("label[for=" + e.id + "]").removeClass("errorTick").addClass("rightTick")
			},
			errorElement: "span",
			rules: {
				name: {
					required: {
						depends: function() {
							return $(this).val($.trim($(this).val())), !0
						}
					}
				},
				email: {
					required: !0,
					customEmail: !0
				},
				phone: {
					required: !0,
					customphone: !0
				},
				project_duration: "required",
				looking_for: "required",
				requirement_description: {
					required: {
						depends: function() {
							return $(this).val($.trim($(this).val())), !0
						}
					},
						checklength : true
				}
			},
			messages: {
				name: "Enter name",
				email: {
					required: "Enter email",
					customEmail: "Invalid email"
				},
				phone: {
					required: "Enter number",
					customphone: "Invalid number"
				},
				project_duration: "Select one",
				looking_for: "Select one",
				requirement_description: {
					required: "Enter details",
					checklength: "Maximum characters limit exceeded"
				}
			},
			submitHandler: function (form) {
				// Prevent double submission
				if (!this.beenSubmitted) {
					this.beenSubmitted = true;
					form.submit();
				}
			}
		});
	});
	
	// See More Videos
	$('#testimonial-custom').on('click', function(){
			$('.modal').addClass('full_vid');
	});
	$('#videoModal .close').on('click', function(){
			$('.modal').removeClass('full_vid');
	});	
	
	// Scroll to form section
	$('.smoothScroll').click(function(evt){
		evt.preventDefault();
		var to = $(this).attr('href');
		
		$('html,body').animate({
		scrollTop: $(to).offset().top - 80},
		'slow');
		return false;
	});		
	
	// Process load more 
	$('#more-step').slideUp();	
	$('#view_more_step').click(function() {
		$('#more-step').slideToggle();
		if ($(this).text() == 'View Less') {
			$(this).html('View More');
		} else {
			$(this).html('View Less');
		}
	});
	
	// Services load more 
	$('#all-domain').slideUp();	
	$('#view-more').click(function() {
		if ($(this).text() == 'View Less')
		var scrollHeight = document.getElementById('all-domain').offsetHeight;
		$('#all-domain').slideToggle();
		if ($(this).text() == 'View Less') {
			$(this).html('View More');
			$('html, body').animate({
				scrollTop: $(window).scrollTop() - scrollHeight
			});
		} else {
			$(this).html('View Less');
		}
	});
	
	$('#view-more_tech').click(function() {
		$('#all-domain').slideToggle();
		if ($(this).text() == 'View Less') {
			$(this).html('View More');
		} else {
			$(this).html('View Less');
		}
	});	
	
	
	/*  PopUp Form Starts Here */

	$("#overlayCustomForm").removeClass("active");
	
	$("body").on("click", ".open", function(){ 
		var div_id = $(this).attr('data-class');
		$("#overlayCustomForm").addClass(div_id);
		var form_title = $(this).attr('data-main-title');
		$("#overlayCustomForm .form_title").html(form_title);
		var to = '#overlayCustomForm';
		var serv_container = $(this).children('div').html();
		
		if(serv_container != '')
		$("#overlayCustomForm .data-cont").html(serv_container);		
		
		$("#overlayCustomForm,#overlayCustomForm .popup-content,.popup-overlay").addClass("active");
		$('html,body').animate({
		scrollTop: $(to).offset().top - 90},
		'slow');				
		$('span.error').html('');
		
		
    	if(document.getElementById('patentcustom') != null){
			document.getElementById('patentcustom').reset();
		}
		
		
	}); 
	
	$("body").on("click", ".close-btn", function(){
	  $("#overlayCustomForm,#overlayCustomForm .popup-content,.popup-overlay").removeClass("active");
	  $("#overlayCustomForm").removeClass( "below-services");
	  $("#overlayCustomForm").removeClass( "below-services");
	  $("h4.tech-icon").removeClass( "less-pd");
	});
	/* Developers PopUp Form Starts Here */
	$("#overlayCustomForm1").removeClass("active");

	$("body").on("click", ".open1", function(){
		var div_id = $(this).attr('data-class');
		$("#overlayCustomForm1").addClass(div_id);
		var form_title = $(this).attr('data-main-title');
		$("#overlayCustomForm1 .form_title").html(form_title);
		var to = '#overlayCustomForm1';
		$("#overlayCustomForm1,#overlayCustomForm1 .popup-content").addClass("active");
		$('html,body').animate({
			scrollTop: $(to).offset().top - 90},
			'slow');
			$('span.error').html('');

			if(document.getElementById('patentcustom') != null){
			document.getElementById('patentcustom').reset();
		}
	});

	$("body").on("click", ".close-btn1", function(){
		$("#overlayCustomForm1,#overlayCustomForm1 .popup-content").removeClass("active");
		$("#overlayCustomForm1").removeClass( "below-services");
		// $("h4.tech-icon").removeClass( "less-pd");
	});

    $("#overlayCustomForm2").removeClass("active");

	$("body").on("click", ".open2", function(){
		var div_id = $(this).attr('data-class');
		$("#overlayCustomForm2").addClass(div_id);
		var form_title = $(this).attr('data-main-title');
		$("#overlayCustomForm2 .form_title").html(form_title);
		var to = '#overlayCustomForm2';
		$("#overlayCustomForm2,#overlayCustomForm2 .popup-content").addClass("active");
		$('html,body').animate({
			scrollTop: $(to).offset().top - 90},
			'slow');
			$('span.error').html('');

			if(document.getElementById('patentcustom') != null){
			document.getElementById('patentcustom').reset();
		}
	});

	$("body").on("click", ".close-btn2", function(){
		$("#overlayCustomForm2,#overlayCustomForm2 .popup-content").removeClass("active");
		$("#overlayCustomForm2").removeClass( "below-services");
		$("#overlayCustomForm2").removeClass( "below-services");
		// $("h4.tech-icon").removeClass( "less-pd");
	});

	// Video PopUp in modal window
	var $videoSrc;  
	var $imageSrc; 
    var $timer;	
	/*$('.video-btn').click(function() {
		$videoSrc = $(this).data( "src" );
	});*/
	
	$('body').on('click','.video-btn', function(){ 
	  $videoSrc = $(this).data( "src" ); 
	  $timer = $(this).attr( "data-starttime" );
	});	
		
	$('#videoModal').on('shown.bs.modal', function (e) { 
	    var $startTime = '';
		if(typeof $timer === "undefined"){var $startTime = '';}else{ var $startTime = $timer;}
		$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0&start="+$startTime ); 
	})
	$('#videoModal').on('hide.bs.modal', function (e) {
		$("#video").attr('src',''); 
	});
	
	
	// Image PopUp in modal window
	$('.image-btn').click(function() {
		$imageSrc = $(this).data( "src" );
	});
	$('#imageModal').on('shown.bs.modal', function (e) {
		$("#image").attr('src',$imageSrc); 
	})
	$('#imageModal').on('hide.bs.modal', function (e) {
		$("#image").attr('src',''); 
	});	
	
});
