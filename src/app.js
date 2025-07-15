// import "bootstrap";
// import "./style.css";

window.onload = function () {
  document.getElementById("sendForm").addEventListener("click", function () {
    // === Card Number ===
    const cardInput = document.getElementById("cardNumber");
    const cardValue = cardInput.value.trim();
    const cardFeedback = cardInput.nextElementSibling;
    const isValidCard = /^\d{16}$/.test(cardValue);

    if (!isValidCard) {
      cardInput.classList.add("is-invalid");
      cardInput.classList.remove("is-valid");
      cardFeedback.textContent = "Card number must be exactly 16 digits.";
    } else {
      cardInput.classList.remove("is-invalid");
      cardInput.classList.add("is-valid");
    }

    // === CVV ===
    const cvvInput = document.getElementById("cvv");
    const cvvValue = cvvInput.value.trim();
    const cvvFeedback = cvvInput.nextElementSibling;
    const isValidCVV = /^\d{3,4}$/.test(cvvValue);

    if (!isValidCVV) {
      cvvInput.classList.add("is-invalid");
      cvvInput.classList.remove("is-valid");
      cvvFeedback.textContent = "CVV must be 3 or 4 digits.";
    } else {
      cvvInput.classList.remove("is-invalid");
      cvvInput.classList.add("is-valid");
    }

    // === Amount ===
    const amountInput = document.getElementById("amount");
    const amountValue = amountInput.value.trim();
    const amountFeedback = amountInput.closest('.form-group').querySelector('.invalid-feedback');
    const isValidAmount = !isNaN(amountValue) && parseFloat(amountValue) > 0;

    if (!isValidAmount) {
      amountInput.classList.add("is-invalid");
      amountInput.classList.remove("is-valid");
      amountFeedback.textContent = "Amount must be greater than 0.";
    } else {
      amountInput.classList.remove("is-invalid");
      amountInput.classList.add("is-valid");
    }

    // === First Name ===
    const firstNameInput = document.getElementById("firstName");
    const firstNameValue = firstNameInput.value.trim();
    const firstNameFeedback = firstNameInput.nextElementSibling;
    const isValidFirstName = /^[A-Za-z]+$/.test(firstNameValue);

    if (!isValidFirstName) {
      firstNameInput.classList.add("is-invalid");
      firstNameInput.classList.remove("is-valid");
      firstNameFeedback.textContent = "Please enter a valid first name (letters only).";
    } else {
      firstNameInput.classList.remove("is-invalid");
      firstNameInput.classList.add("is-valid");
    }

    // === Last Name ===
    const lastNameInput = document.getElementById("lastName");
    const lastNameValue = lastNameInput.value.trim();
    const lastNameFeedback = lastNameInput.nextElementSibling;
    const isValidLastName = /^[A-Za-z]+$/.test(lastNameValue);

    if (!isValidLastName) {
      lastNameInput.classList.add("is-invalid");
      lastNameInput.classList.remove("is-valid");
      lastNameFeedback.textContent = "Please enter a valid last name (letters only).";
    } else {
      lastNameInput.classList.remove("is-invalid");
      lastNameInput.classList.add("is-valid");
    }

    // === City ===
    const cityInput = document.getElementById("city");
    const cityValue = cityInput.value.trim();
    const cityFeedback = cityInput.nextElementSibling;
    const isValidCity = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/.test(cityValue);

    if (!isValidCity) {
      cityInput.classList.add("is-invalid");
      cityInput.classList.remove("is-valid");
      cityFeedback.textContent = "Please enter a valid city name (letters only).";
    } else {
      cityInput.classList.remove("is-invalid");
      cityInput.classList.add("is-valid");
    }

    // === State ===
    const stateInput = document.getElementById("state");
    const stateValue = stateInput.value;
    const stateFeedback = stateInput.nextElementSibling;

    if (!stateValue) {
      stateInput.classList.add("is-invalid");
      stateInput.classList.remove("is-valid");
      stateFeedback.textContent = "Please select a state.";
    } else {
      stateInput.classList.remove("is-invalid");
      stateInput.classList.add("is-valid");
    }

    // === Postal Code ===
    const postalInput = document.getElementById("postalCode");
    const postalValue = postalInput.value.trim();
    const postalFeedback = postalInput.nextElementSibling;
    const isValidPostal = /^\d{5}$/.test(postalValue);

    if (!isValidPostal) {
      postalInput.classList.add("is-invalid");
      postalInput.classList.remove("is-valid");
      postalFeedback.textContent = "Postal code must be 5 digits.";
    } else {
      postalInput.classList.remove("is-invalid");
      postalInput.classList.add("is-valid");
    }
  });
};