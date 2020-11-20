let addresbook = [];
window.addEventListener("DOMContentLoaded", (event) => {
  addresbook = getAddressbookFromLocalStorage();
  document.querySelector(".person-count").textContent = addresbook.length;
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Fullname</th><th>Address</th><th>State</th><th>City</th><th>Zip Code</th><th>Phone Number</th><th>Email</th><th></th></tr>";
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
              <img id=${contact._id} onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="Delete">
              <img id=${contact._id} onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="Edit">
            </td>
      </tr>
      `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

// populate addressbook
const getAddressbookFromLocalStorage = () => {
  return localStorage.getItem("Friends")
    ? JSON.parse(localStorage.getItem("Friends"))
    : [];
};

const createAddressbookJSON = () => {};

// remove contact
const remove = (node) => {
  let contactData = addresbook.find((contact) => contact._id == node.id);
  if (!contactData) return;
  const index = addresbook
    .map((contact) => contact._id)
    .indexOf(contactData._id);
  addresbook.splice(index, 1);
  localStorage.setItem("Friends", JSON.stringify(addresbook));
  document.querySelector(".person-count").textContent = addresbook.length;
  createInnerHtml();
};
