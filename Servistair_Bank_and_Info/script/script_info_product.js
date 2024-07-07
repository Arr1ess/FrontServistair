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
  let swiperIntroSlider = new Swiper(".intro-slider", {
    navigation: {
      nextEl: ".intro-slider-button-next",
      prevEl: ".intro-slider-button-prev",
    },
  });

  const swiperInfoSlider = initilizationSliderInformaiton(swiperIntroSlider);

  swiperIntroSlider.on("slideChange", function () {
    console.log(swiperInfoSlider.realIndex);
    resetActiveSlider();
    setActiveSlider(this.realIndex);
    swiperInfoSlider.slideTo(this.realIndex);
  });

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

  const swiperMainSlider = new Swiper(".main-slider__content", {
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: ".main-slider__pagination",
    },
    loop: true,
  });
});

function initilizationSliderInformaiton(sliderIntro) {
  let introSlider = document.querySelector(".intro-slider");

  let imagesInnerIntroSlider = introSlider.querySelectorAll(".intro-image");

  let countElementIntroSlider = imagesInnerIntroSlider.length;

  for (let i = 0; i < countElementIntroSlider; i++) {
    createElementForSliderBy(imagesInnerIntroSlider[i], i, sliderIntro);
  }

  let countVisitedSlide = 0;

  if (countElementIntroSlider != 0) {
    setActiveSlider(0);
  }

  if (countElementIntroSlider <= 2) {
    beetween = 0;
    let slider = document.querySelector(".block-information__slider");
    slider.style.maxWidth = "180px";
    countVisitedSlide = countElementIntroSlider;
  } else {
    countVisitedSlide = 3;
  }

  const swiperInfoSlider = new Swiper(".block-information__slider", {
    slidesPerView: countVisitedSlide,
  });

  return swiperInfoSlider;
}

function createElementForSliderBy(element, index, slider) {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide", "information-slider__item");

  const imageBox = document.createElement("div");
  imageBox.classList.add("block-information__slider-image-box");

  const img = document.createElement("img");
  img.src = element.src;
  img.alt = element.alt;
  img.classList.add("block-information__slider-image");

  imageBox.appendChild(img);

  swiperSlide.appendChild(imageBox);

  const parent = document.querySelector(".information-slider__wrapper");
  parent.appendChild(swiperSlide);

  swiperSlide.addEventListener("click", function () {
    slider.slideTo(index);
    resetActiveSlider();
    setActiveSlider(index);
  });

  return swiperSlide;
}

function resetActiveSlider() {
  let sliders = document.querySelectorAll(".information-slider__item");

  for (let i = 0; i < sliders.length; i++) {
    if (sliders[i].classList.contains("active-slider-image-box")) {
      sliders[i].classList.remove("active-slider-image-box");
    }
  }
}

function setActiveSlider(index) {
  let sliders = document.querySelectorAll(".information-slider__item");

  sliders[index].classList.add("active-slider-image-box");
}
