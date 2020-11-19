window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      new Contact().name = name.value;
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });
  const address = document.querySelector("#address");
  const addressError = document.querySelector(".address-error");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      addressError.textContent = "";
      return;
    }
    try {
      new Contact().address = address.value;
      addressError.textContent = "";
    } catch (error) {
      addressError.textContent = error;
    }
  });
  addressError.textContent = "";
  const phoneNo = document.querySelector("#phone");
  const phoneError = document.querySelector(".phone-error");
  phoneNo.addEventListener("input", function () {
    if (phone.value.length == 0) {
      phoneError.textContent = "";
      return;
    }
    try {
      new Contact().phoneNo = phoneNo.value;
      phoneError.textContent = "";
    } catch (error) {
      phoneError.textContent = error;
    }
  });
  const email = document.querySelector("#email");
  const emailError = document.querySelector(".email-error");
  email.addEventListener("input", function () {
    if (email.value.length == 0) {
      emailError.textContent = "";
      return;
    }
    try {
      new Contact().email = email.value;
      emailError.textContent = "";
    } catch (error) {
      emailError.textContent = error;
    }
  });
});
