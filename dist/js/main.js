var mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 100,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
});