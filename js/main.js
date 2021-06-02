// $(window).on("load", function () {
// 	myLoading();
// });
// function myLoading() {
// 	setTimeout(() => {
// 		$("body > .overlay").addClass("loaded");
// 		AOS.init();
// 	}, 1234);
// }
svgToInline(".inline-svg");

// EVENTS IMAGE 3D SLIDER
$(".slider-3D input").on("change", function () {
	const thisId = $(this).attr("id");
	const left = $(".slider-3D label.left");
	const right = $(".slider-3D label.right");
	const selected = $(".slider-3D label.selected");
	const selector = `.slider-3D label[for="${thisId}"]`;
	if ($(selector).hasClass("left")) {
		selected.removeClass("selected").addClass("right");
		$(selector).removeClass("left").addClass("selected");
		right
			.removeClass("right")
			.addClass("behind")
			.delay(100)
			.queue(function (next) {
				$(this).removeClass("behind");
				next();
			})
			.addClass("left");
	} else if ($(selector).hasClass("right")) {
		selected.removeClass("selected").addClass("left");
		$(selector).removeClass("right").addClass("selected");
		left
			.removeClass("left")
			.addClass("behind")
			.delay(100)
			.queue(function (next) {
				$(this).removeClass("behind");
				next();
			})
			.addClass("right");
	}
});
// // BACK TO TOP
// const $backToTop = $("footer .back-to-top");
// $backToTop.on("click", function () {
// 	//1 second of animation time
// 	//html works for FFX but not Chrome
// 	//body works for Chrome but not FFX
// 	//This strange selector seems to work universally
// 	// THANKS TO "Explosion Pills"
// 	$("html, body").animate({ scrollTop: 0 }, 1000);
// });
