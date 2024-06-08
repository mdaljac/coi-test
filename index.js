import { createObserver, toggle } from "./utils.js";

window.onload = () => {
	const button = document.querySelector(".js-button");
	const targets = document.querySelectorAll(".js-hidden");
	const card = document.querySelector(".card");
	const observer = createObserver();

	// initially all targets are not visible
	gsap.set(targets, { autoAlpha: 0, height: 0 });

	button.addEventListener("click", toggle);
	observer.observe(card);
};
