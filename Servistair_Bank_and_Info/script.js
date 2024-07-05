function clearButtonDelivery() {
  var buttons = document.querySelectorAll(".address__button");

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("address_button_active")) {
      buttons[i].classList.remove("address_button_active");
    }
  }
}
function setActiveButtonDelivery(element) {
  clearButtonDelivery();

  element.classList.add("address_button_active");

  const radioBtn = element.querySelector('input[type="radio"]');

  radioBtn.checked = true;
}

//ALL input

const orderInputs = document.querySelectorAll(".order-input");

orderInputs.forEach((input) => {
  input.addEventListener("input", function (event) {
    if (event.target.value) input.classList.add("input-active-text");
    else input.classList.remove("input-active-text");
  });
});

//CARD NUMBER

const cardNumberInput = document.querySelector(".card-input__numbers");
const MAX_CARD_NUMBER_LENGTH = 19;

cardNumberInput.addEventListener("input", function (event) {
  let cardNumber = event.target.value.replace(/\D/g, "");

  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ").trim();

  if (cardNumber.length > MAX_CARD_NUMBER_LENGTH) {
    cardNumber = cardNumber.slice(0, MAX_CARD_NUMBER_LENGTH);
  }
  event.target.value = cardNumber;

  if (event.target.value) cardNumberInput.classList.add("input-active-text");
  else cardNumberInput.classList.remove("input-active-text");
});

//CARD DATE

const cardInputDate = document.querySelector(".card-input__date");
const MAX_LENGHT_DATE = 5;

cardInputDate.addEventListener("input", function (event) {
  let dateNum = event.target.value;

  dateNum = dateNum.replace(/\D/g, "");

  dateNum = dateNum.replace(/(\d{2})/g, "$1/");

  if (dateNum.length == 3) {
    dateNum = dateNum.slice(0, 2);
  }

  if (dateNum.length > MAX_LENGHT_DATE) {
    dateNum = dateNum.slice(0, MAX_LENGHT_DATE);
  }

  event.target.value = dateNum;
});

//CARD CVV

const cardCvvInput = document.querySelector(".card-input__cvv");
const MAX_LENGHT_CVV = 3;

cardCvvInput.addEventListener("input", function (event) {
  let cvv = event.target.value;

  cvv = cvv.replace(/\D/g, "");

  if (cvv.length > MAX_LENGHT_CVV) {
    cvv = cvv.slice(0, 3);
  }

  event.target.value = cvv;
});

//CREDIT CARD backlight

function clearCreditCardAll() {
  let creditCards = document.querySelectorAll(".card");

  creditCards.forEach((card) => {
    if (card.classList.contains("card__radio_active"))
      card.classList.remove("card__radio_active");
  });
}

const creditCards = document.querySelectorAll(".card");

creditCards.forEach((card) => {
  card.addEventListener("click", function () {
    clearCreditCardAll();

    if (card.classList.contains("card__radio_active"))
      card.classList.remove("card__radio_active");
    else card.classList.add("card__radio_active");

    let inputCard = card.querySelector("input");

    inputCard.checked = true;
  });
});

//button Order plus and minus

function deleteProduct(element) {
  let cardProducts = document.querySelectorAll(".card-product");

  cardProducts.forEach((cardProduct) => {
    if (cardProduct.contains(element)) {
      cardProduct.remove();
    }
  });
}

function addCountProduct(element) {
  let cardProducts = document.querySelectorAll(".card-product");

  cardProducts.forEach((cardProduct) => {
    if (cardProduct.contains(element)) {
      var inputProductCount = cardProduct.querySelector(
        ".button-add-pop__input"
      );
      console.log(inputProductCount);

      inputProductCount.value++;
    }
  });
}

function erraseCountProduct(element) {
  let cardProducts = document.querySelectorAll(".card-product");

  cardProducts.forEach((cardProduct) => {
    if (cardProduct.contains(element)) {
      var inputProductCount = cardProduct.querySelector(
        ".button-add-pop__input"
      );
      console.log(inputProductCount);

      inputProductCount.value--;

      if (inputProductCount.value <= 0) deleteProduct(cardProduct);
    }
  });
}

const inputCountProducts = document.querySelectorAll(".button-add-pop__input");

inputCountProducts.forEach((input) => {
  input.addEventListener("input", function (event) {
    let count = event.target.value;

    count = count.replace(/\D/g, "");

    event.target.value = count;
  });
});
