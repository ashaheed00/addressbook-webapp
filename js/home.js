window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Fullname</th><th>Address</th><th>State</th><th>City</th><th>Zip Code</th><th>Phone Number</th><th>Email</th><th></th></tr>";
  let addresbook = createAddressbookJSON();
  let innerHtml = `${headerHtml}`;
  for (let contact of addresbook) {
    innerHtml = `
      ${innerHtml}  
      <tr>
            <td></td>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._state}</td>
            <td>${contact._city}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNo}</td>
            <td>${contact._email}</td>
            <td>
              <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="Delete">
              <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="Edit">
            </td>
      </tr>
      `;
  }
  console.log(innerHtml);
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const createAddressbookJSON = () => {
  let addresbook = [
    {
      _name: "Kabir",
      _address: "C BLOCK, ROOM NO - C21, PRINCE ANWAR SHAH ROAD",
      _state: "West Bengal",
      _city: "Kolkata",
      _zip: "700001",
      _phoneNo: "9851604355",
      _email: "ashaheed00@gmail.com",
    },
    {
      _name: "Gautham Menon",
      _address: "Prince Anwar Shah Road, Poddar Nagar, Jadavpur",
      _state: "Kerala",
      _city: "Ernakulam",
      _zip: "689002",
      _phoneNo: "8016426257",
      _email: "ukil94jubeng@gmail.com",
    },
    {
      _name: "Jose",
      _address: "C BLOCK, PRINCE ANWAR SHAH ROAD",
      _state: "West Bengal",
      _city: "Kolkata",
      _zip: "700002",
      _phoneNo: "9851604355",
      _email: "ashaheed00@gmail.com",
    },
  ];

  return addresbook;
};
