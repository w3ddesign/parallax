//PARALLAX SOCKET AND FOOTER

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	// LANDING SOCKET

	if(wScroll > $("#socket").offset().top - 800) {

		$("#socket .contact").addClass("slide");

		$(".footer-content").addClass("slide");

	}


});