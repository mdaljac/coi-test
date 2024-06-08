export function toggle() {
	const target = document.querySelector(`[data-target="${this.dataset.open}"]`);

	// if element visible
	if (gsap.getProperty(target, "opacity")) {
		gsap.timeline().to(target, { autoAlpha: 0 }).to(target, { height: 0 });
	}
	// if not visible
	else {
		gsap
			.timeline()
			.to(target, { autoAlpha: 1 })
			.to(target, { height: target.scrollHeight }, "<");
	}
}

export function createObserver() {
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				gsap.to(entry.target, { autoAlpha: 1 });
			} else {
				gsap.to(entry.target, { autoAlpha: 0 });
			}
		});
	};

	let observer = new IntersectionObserver(callback, options);

	return observer;
}
