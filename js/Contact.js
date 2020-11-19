class Contact {
  //   constructor(...params) {
  //     this.firstName = params[0];
  //     this.lastName = params[1];
  //     this.address = params[2];
  //     this.city = params[3];
  //     this.state = params[4];
  //     this.zip = params[5];
  //     this.phoneNo = params[6];
  //     this.email = params[7];
  //   }

  get name() {
    return this._name;
  }
  set name(name) {
    const nameRegex = RegExp(
      "^[A-Z]{1}[a-z]{2,}\\s?([A-Z]{1}[a-z]{1,}\\s?){0,2}$"
    );
    if (nameRegex.test(name)) this._name = name;
    else throw "Given name is in wrong format";
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
