class Contact {
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNo = params[6];
    this.email = params[7];
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(firstName)) this._firstName = firstName;
    else throw "Given first name is in wrong format";
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(lastName)) this._lastName = lastName;
    else throw "Givenl ast name is in wrong format";
  }

  get address() {
    return this._address;
  }
  set address(address) {
    const nameRegex = RegExp("^[\\w/,\\s]{4,}$");
    if (nameRegex.test(address)) this._address = address;
    else throw "Given address is in wrong format";
  }

  get city() {
    return this._city;
  }
  set city(city) {
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (nameRegex.test(city)) this._city = city;
    else throw "Given city is in wrong format";
  }

  get state() {
    return this._state;
  }
  set state(state) {
    const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
    if (nameRegex.test(state)) this._state = state;
    else throw "Given state is in wrong format";
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    const zipRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");
    if (zipRegex.test(zip)) this._zip = zip;
    else throw "Given zip is in wrong format";
  }

  get phoneNo() {
    return this._phoneNo;
  }
  set phoneNo(phoneNo) {
    const phoneNoRegex = RegExp("^[0-9]{5}\\s?[0-9]{5}$");
    if (phoneNoRegex.test(phoneNo)) this._phoneNo = phoneNo;
    else throw "Given zip is in wrong format";
  }

  get email() {
    return this._email;
  }
  set email(email) {
    const emailRegex = RegExp(
      "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Given email is in wrong format";
  }
}

let addressBook = [
  new Contact(
    "Akram",
    "Shaheed",
    "Berhampore",
    "Kolkata",
    "West Bengal",
    "740000",
    "9815063455",
    "akram@gmail.com"
  ),
];

addressBook.push(
  new Contact(
    "Aditi",
    "Sharma",
    "56/A Mannat Complex",
    "Pune",
    "Maharashtra",
    "412000",
    "8282828282",
    "aditi@gmail.com"
  )
);
console.log("After adding new contact:");
console.log(addressBook);

addressBook.find((contact) => contact.firstName === "Akram").firstName =
  "Aakash";
console.log("After editing name:");
console.log(addressBook);

function counter(count) {
  return ++count;
}
numbersOfContact = addressBook.reduce(counter, 0);
console.log("Number of contacts: " + numbersOfContact);

function addNewContact(addressBook, newContact) {
  if (
    addressBook.find(
      (contact) =>
        contact.firstName === newContact.firstName &&
        contact.lastName === newContact.lastName
    ) === undefined
  )
    addressBook.push(newContact);
  else throw "Contact with same name already exists";
}

let newContact = new Contact(
  "Aditi",
  "Sharma",
  "Kolapur",
  "Mumbai",
  "Maharashtra",
  "401401",
  "9595959595",
  "adi@gmail.com"
);
try {
  addNewContact(addressBook, newContact);
} catch (e) {
  console.error(e);
}

newContact = new Contact(
  "Abir",
  "Sharma",
  "Kolapur",
  "Mumbai",
  "Maharashtra",
  "401401",
  "9595959595",
  "adi@gmail.com"
);
try {
  addNewContact(addressBook, newContact);
} catch (e) {
  console.error(e);
}
newContact = new Contact(
  "Abir",
  "Roy",
  "Kolapur",
  "Mumbai",
  "Maharashtra",
  "401401",
  "9595959595",
  "adi@gmail.com"
);
try {
  addNewContact(addressBook, newContact);
} catch (e) {
  console.error(e);
}

function searchByCity(addressBook, city) {
  return addressBook.filter((contact) => contact.city === city);
}

function searchByState(addressBook, state) {
  return addressBook.filter((contact) => contact.state === state);
}

console.log(searchByCity(addressBook, "Pune"));
console.log(searchByState(addressBook, "West Bengal"));

function viewByCity(addressBook) {
  let contactsByCity = new Map();
  addressBook.filter((contact) =>
    contactsByCity.set(contact.city, searchByCity(addressBook, contact.city))
  );
  return contactsByCity;
}
function viewByState(addressBook) {
  let contactsByState = new Map();
  addressBook.filter((contact) =>
    contactsByState.set(
      contact.state,
      searchByState(addressBook, contact.state)
    )
  );
  return contactsByState;
}
console.log(viewByCity(addressBook));
console.log(viewByState(addressBook));

let countByCity = new Map();
viewByCity(addressBook).forEach((value, key) =>
  countByCity.set(key, value.length)
);
console.log(countByCity);

let countByState = new Map();
viewByState(addressBook).forEach((value, key) =>
  countByState.set(key, value.length)
);
console.log(countByState);

function sortAddressBook(addressBook, field) {
  switch (field.toLowerCase()) {
    case "name":
      return addressBook.sort((a, b) =>
        (a.firstName + " " + a.lastName).localeCompare(
          b.firstName + " " + b.lastName
        )
      );
      break;
    case "city":
      return addressBook.sort((a, b) => a.city.localeCompare(b.city));
      break;
    case "state":
      return addressBook.sort((a, b) => a.state.localeCompare(b.state));
      break;
    case "zip":
      return addressBook.sort((a, b) => a.zip.localeCompare(b.zip));
      break;
    default:
      return null;
  }
}

console.log("\nSorted By Name: ");
console.log(sortAddressBook(addressBook, "name"));
console.log("\nSorted By City: ");
console.log(sortAddressBook(addressBook, "city"));
console.log("\nSorted By State: ");
console.log(sortAddressBook(addressBook, "state"));
console.log("\nSorted By Zip: ");
console.log(sortAddressBook(addressBook, "zip"));
