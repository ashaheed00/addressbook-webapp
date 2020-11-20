window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Fullname</th><th>Address</th><th>State</th><th>City</th><th>Zip Code</th><th>Phone Number</th><th>Email</th><th></th></tr>";
  let addresbook = getAddressbookFromLocalStorage();
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
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const getAddressbookFromLocalStorage = () => {
  return localStorage.getItem("Friends")
    ? JSON.parse(localStorage.getItem("Friends"))
    : [];
};

const createAddressbookJSON = () => {};
