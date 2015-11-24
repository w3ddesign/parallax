//PARALLAX HEADER AND EASING IN

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	$(".sun").css({
		
		'transform' : 'translate(0px, '+ wScroll / 14 +'%)'

	});

	$(".back-landscape").css({

		'transform' : 'translate(0px, '+ wScroll / 40 + '%)'

	});

	$(".first-mountain").css({

		'transform' : 'translate(0px, '+ wScroll / 80 +'%)'

	});

	$(".second-mountain").css({

		'transform' : 'translate(0px, '+ wScroll / 60 +'%)'

	});

	$(".fore-landscape").css({

		'transform' : 'translate(0px, '+ wScroll / 70 +'%)'

	});

	$(".tablet").css({

		'transform' : 'translate(0px, -'+ wScroll / 30 + '%)'

	});

	$(".logo-big").css({

		'transform': 'translate(0px, '+ wScroll / 3 + '%)'

	});

	// REMOVE HEADER BUTTONS WHEN SCROLL

	if(wScroll > $(".buttons").offset().top - 400) {
		$(".landscape-box .buttons a").addClass("not-show");
	}else{
		$(".landscape-box .buttons a").removeClass("not-show");
	}
	

	// LANDING ELEMENTS SERVICES

	if(wScroll > $(".our-services").offset().top - 600) {  // When .our-services is at the top of the wScroll (offset top)

		$(".our-services p").each(function(i) {

			setTimeout(function(){
				$(".our-services p").eq(i).addClass("is-showing");
			}, 150 * (i+1));
		});

	}

	//LANDING ELEMENTS PORTFOLIO

	if(wScroll > $(".portfolio").offset().top - 600) {

		$(".portfolio a").each(function(i){

			setTimeout(function(){

				$(".portfolio a").eq(i).addClass("is-showing");

			}, 150 * (i+1));

		});

	}

	// LANDING SOCKET


	
	// LANDING SUN AS USER SCROLLS
	
	if(wScroll > $("#socket").offset().top - $(window).height()){
	
		var offset = Math.min(0, wScroll-$('#socket').offset().top +$(window).height() - 750); 
		
		// Declare a variable that has to be between 0 and the wScroll top of div, so the object max position will be 0
		
		$('.landscape-logo').css({
		
			'transform' : 'translate(0, '+ Math.abs(offset * 0.2) +'px)'
		
		});
	
	}
	
	if(wScroll > $("#socket").offset().top - $(window).height()){
	
		var offsetB = Math.min(0, wScroll-$('#socket').offset().top +$(window).height() - 200); 
		
		// Declare a variable that has to be between 0 and the wScroll top of div, so the object max position will be 0
		
		$('.landscape-buildings').css({
		
			'transform' : 'translate(0, '+ Math.abs(offsetB * 0.95) +'px)'
		
		});
	
	}
	


});

// MENU OVERLAY

$("#toggle").click(function() {

	$(this).toggleClass('active');

	$("#overlay").toggleClass('open');
});


$(".menu-link").click(function() {

	$("#toggle").toggleClass('active');

	$("#overlay").toggleClass('open');

});


// SMOOTH SCROLL LINKS WHEN DOCUMENT IS READY

$(document).ready(function() {

$('.scroll').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: $(this.hash).offset().top
    	}, 2000);
    });
});



//COOKIES ALERT


$(document).ready(function(){
  //Close the whole panel
  $('a.cookie_close').click(function(){
    $('#cookie').slideUp();
  });

  //More info button
  $('a.cookie_more').click(function() {
    $('a.cookie_more').toggle();
        $('#cookie_more_info').slideToggle("fast");
  });
});


// ARROW UP


$(window).scroll(function(){
	if ($(this).scrollTop() > 700) {
		$('.ir-arriba').addClass('show');
    }else {
    	$('.ir-arriba').removeClass('show');
    }
});
