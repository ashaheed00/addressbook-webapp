let isUpdate = false;
let contactObj = {};
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

  checkForUpdate();
});

// Methods to save on submit and reset
const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    setContactObject();
    createAndUpdateStorage();
    resetForm();
    window.location.href = site_properties.home_page;
  } catch (e) {
    alert(e);
    return;
  }
};

const createContact = () => {
  let contact = new Contact();
  contact.id = new Date().getTime();
  try {
    contact.name = getInputValueById("#name");
  } catch (e) {
    document.querySelector(".name-error").textContent = e;
    throw e;
  }
  try {
    contact.address = getInputValueById("#address");
  } catch (e) {
    document.querySelector(".address-error").textContent = e;
    throw e;
  }
  contact.state = getInputValueById("#state");
  contact.city = getInputValueById("#city");
  contact.zip = getInputValueById("#zip");
  try {
    contact.phoneNo = getInputValueById("#phone");
  } catch (e) {
    document.querySelector(".phone-error").textContent = e;
    throw e;
  }
  try {
    contact.email = getInputValueById("#email");
  } catch (e) {
    document.querySelector(".email-error").textContent = e;
    throw e;
  }
  alert(contact);
  return contact;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

// populate to addressbook
const createAndLoadToAddressBook = (contact) => {
  let addressbook = JSON.parse(localStorage.getItem("Friends"));
  if (addressbook != undefined) {
    addressbook.push(contact);
  } else {
    addressbook = [contact];
  }
  localStorage.setItem("Friends", JSON.stringify(addressbook));
};

// reset method
const resetForm = () => {
  setValue("#name", "");
  setValue("#address", "");
  setValue("#state", "");
  setValue("#city", "");
  setValue("#zip", "");
  setValue("#phone", "");
  setValue("#email", "");
  setTextValue(".name-error", "");
  setTextValue(".address-error", "");
  setTextValue(".phone-error", "");
  setTextValue(".email-error", "");
};

const setValue = (id, value) => {
  document.querySelector(id).value = value;
};

const setTextValue = (id, value) => {
  document.querySelector(id).textContent = value;
};

// update and save
const checkForUpdate = () => {
  const addressbookJson = localStorage.getItem("editContact");
  isUpdate = addressbookJson ? true : false;
  if (!isUpdate) return;
  contactObj = JSON.parse(addressbookJson);
  setForm();
};

const setForm = () => {
  setValue("#name", contactObj._name);
  setValue("#address", contactObj._address);
  setValue("#state", contactObj._state);
  setValue("#city", contactObj._city);
  setValue("#zip", contactObj._zip);
  setValue("#phone", contactObj._phoneNo);
  setValue("#email", contactObj._email);
};

const createAddressbookData = () => {
  let contact = new Contact();
  contact.id = new Date().getTime();
  setAddressbookData(contact);
  return contact;
};

const setAddressbookData = (contact) => {
  try {
    contact.name = contactObj._name;
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  contact.address = contactObj._address;
  contact.state = contactObj._state;
  contact.city = contactObj._city;
  contact.zip = contactObj._zip;
  contact.phoneNo = contactObj._phoneNo;
  try {
    contact.email = contactObj._email;
  } catch (e) {
    setTextValue(".email-error", e);
    throw e;
  }
  alert(contact.toString());
};

const createAndUpdateStorage = () => {
  let addressbook = JSON.parse(localStorage.getItem("Friends"));
  if (addressbook) {
    let contactData = addressbook.find(
      (contact) => contact._id == contactObj._id
    );
    if (!contactData) addressbook.push(createAddressbookData());
    else {
      const index = addressbook
        .map((contact) => contact._id)
        .indexOf(contactData._id);
      addressbook.splice(index, 1, createAddressbookData(contactData._id));
    }
  } else {
    addressbook = [createAddressbookData()];
  }
  localStorage.setItem("Friends", JSON.stringify(addressbook));
};

const setContactObject = () => {
  contactObj._name = getInputValueById("#name");
  contactObj._address = getInputValueById("#address");
  contactObj._state = getInputValueById("#state");
  contactObj._city = getInputValueById("#city");
  contactObj._zip = getInputValueById("#zip");
  contactObj._phoneNo = getInputValueById("#phone");
  contactObj._email = getInputValueById("#email");
};
