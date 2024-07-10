document.addEventListener("DOMContentLoaded", () => {
	// Функция для копирования текста
	function copyText(element) {
		const text = element.innerText;
		const tempInput = document.createElement("input");
		tempInput.value = text;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		element.classList.add("copied-active");
		setTimeout(() => {
			element.classList.remove("copied-active");
		}, 800);
	}

	// Получаем все элементы с классом "copied"
	const elementsToCopy = document.getElementsByClassName("copied");

	// Добавляем обработчик события для каждого элемента
	Array.from(elementsToCopy).forEach((element) => {
		element.addEventListener("click", () => copyText(element));
	});

	// Функция для переключения подменю
	function toggleSubmenu(submenu, event) {
		event.preventDefault();
		submenu.classList.toggle("active");
	}

	// Получаем элементы для управления подменю
	const contactSubMenu = document.getElementById("contact-subMenu");
	const contactButton = document.getElementById("contact-button");
	const headerContactSubMenu = document.getElementById(
		"header-contact-subMenu"
	);
	const headerContactButton = document.getElementById("header-contact-button");

	// Добавляем обработчики событий для кнопок подменю
	contactButton.addEventListener("click", (event) =>
		toggleSubmenu(contactSubMenu, event)
	);
	headerContactButton.addEventListener("click", (event) =>
		toggleSubmenu(headerContactSubMenu, event)
	);

	// Закрытие подменю при клике вне его
	document.addEventListener("click", (event) => {
		if (
			!contactSubMenu.contains(event.target) &&
			!contactButton.contains(event.target)
		) {
			contactSubMenu.classList.remove("active");
		}
		if (
			!headerContactSubMenu.contains(event.target) &&
			!headerContactButton.contains(event.target)
		) {
			headerContactSubMenu.classList.remove("active");
		}
	});

	// Управление бургер-меню
	const burgerMenu = document.getElementById("burger-menu");
	const burgerIcon = document.getElementById("burger-icon");
	const burgerMenuItems = document.getElementById("burger-menu-items");

	burgerMenu.addEventListener("click", () => {
		burgerMenu.classList.toggle("open");
	});
});
