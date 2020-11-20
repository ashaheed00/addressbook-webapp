class Contact {
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    const nameRegex = RegExp(
      "^[A-Z]{1}[a-z]{2,}\\s?([A-Z]{1}[a-z]{1,}\\s?){0,2}$"
    );
    if (nameRegex.test(name)) this._name = name;
    else throw "Given name is in wrong format. Eg. John Smith";
  }

  get address() {
    return this._address;
  }
  set address(address) {
    const addressRegex = RegExp("^\\w[\\w\\s/,-]{3,}$");
    if (addressRegex.test(address)) this._address = address;
    else
      throw "Min. 4 characters needed and only -/, allowed as special characters";
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
    const phoneNoRegex = RegExp("^(\\+?91)?\\s?[0-9]{5}\\s?[0-9]{5}$");
    if (phoneNoRegex.test(phoneNo)) this._phoneNo = phoneNo;
    else
      throw "Wrong Phone Number Format. Eg. 9009009001, 919009009001, +919009009001, +91 9009009001";
  }

  get email() {
    return this._email;
  }
  set email(email) {
    const emailRegex = RegExp(
      "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Wrong email format is given. Eg. abc.def@email.co.in";
  }

  toString() {
    return (
      "id: " +
      this.id +
      ", name: " +
      this.name +
      ", address: " +
      this.address +
      ", state: " +
      this.state +
      ", city: " +
      this.city +
      ", zip: " +
      this.zip +
      ", phoneNo: " +
      this.phoneNo +
      ", email = " +
      this.email
    );
  }
}
