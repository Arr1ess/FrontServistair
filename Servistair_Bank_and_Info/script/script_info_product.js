const controllers = document.querySelectorAll(".history-card__value-controler");

controllers.forEach((controller) => {
  const minusButton = controller.querySelector(".history-card__value-minus");
  const valueElement = controller.querySelector(".history-card__value-meaning");
  const plusButton = controller.querySelector(".history-card__value-plus");

  let currentValue = parseInt(valueElement.innerHTML, 10);

  minusButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentValue > 0) {
      currentValue -= 1;
      valueElement.innerHTML = currentValue;
    }
  });

  plusButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (currentValue < 1000) {
      currentValue += 1;
      valueElement.innerHTML = currentValue;
    }
  });
});




function uncoverText() {
  const buttonDescription = document.querySelector(
    ".description__button-open-close"
  );
  buttonDescription.classList.toggle("rotate");
  buttonDescription.classList.toggle("reverse-rotate");

  const descriptionBlock = document.querySelector(".description-block");

  descriptionBlock.classList.toggle("uncorentTextBlock");

  const textDescription = document.querySelector(".description__text");

  textDescription.classList.toggle("uncorentText");
}

document.addEventListener("DOMContentLoaded", function () {
  const swiperRecommendedSlider = new Swiper(".recommended-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    on: {
      slideChange: function () {
        const slides = this.slides;
        const activeIndex = this.activeIndex;
        const lastIndex = slides.length - 1;

        this.params.width += 20;
        this.update();

        if (activeIndex == lastIndex) {
          this.allowSlideNext = false;
        } else {
          this.allowSlideNext = true;
        }
      },
    },
  });
  const swiperIntroSlider = new Swiper(".intro-slider", {
    navigation: {
      nextEl: ".intro-slider-button-next",
      prevEl: ".intro-slider-button-prev",
    },
  });


});
