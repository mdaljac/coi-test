window.onload = () => {
	customElements.define("my-swiper", MySwiper);
};

class MySwiper extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		this.swiperOptions = {
			// Default parameters
			slidesPerView: 1.1,
			spaceBetween: 10,
			// Responsive breakpoints
			breakpoints: {
				640: {
					slidesPerView: 1.8,
				},
				1024: {
					slidesPerView: 2.2,
				},
				1440: {
					slidesPerView: 2.8,
				},
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			on: {
				slideChange: function () {
					console.log(this.activeIndex);
				},
			},
		};
	}

	connectedCallback() {
		let swiper = new Swiper(".swiper", this.swiperOptions);

		const toggleSwiperBtn = document.querySelector(".js-button");
		toggleSwiperBtn.addEventListener("click", () => {
			if (swiper.destroyed) {
				swiper = new Swiper(".swiper", this.swiperOptions);
				toggleSwiperBtn.textContent = "Destroy Swiper";
			} else if (swiper.enabled) {
				swiper.destroy(true, true);
				toggleSwiperBtn.textContent = "Initialize Swiper";
			}
		});
	}
}
