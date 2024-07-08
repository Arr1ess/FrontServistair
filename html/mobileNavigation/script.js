let lastScrollTop = 0;
const menu = document.querySelector(".menu");

window.addEventListener("scroll", () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		// Scrolling down
		menu.classList.remove("visible");
	} else {
		// Scrolling up
		menu.classList.add("visible");
	}
	lastScrollTop = scrollTop;
});
