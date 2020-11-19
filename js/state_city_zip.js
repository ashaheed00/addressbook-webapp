const stateCityZip = {
  "West Bengal": {
    Kolkata: ["700001", "700002", "700003"],
    Berhampore: ["742101", "742102", "742103"],
  },
  Kerala: {
    Kozhikode: ["678000", "678001", "678003"],
    Ernakulam: ["689001", "689002"],
  },
};

window.onload = function () {
  let state = document.getElementById("state");
  let city = document.getElementById("city");
  let zip = document.getElementById("zip");

  for (let x in stateCityZip) {
    state.options[state.options.length] = new Option(x, x);
  }
  state.onchange = function () {
    for (let y in stateCityZip[this.value]) {
      city.options[city.options.length] = new Option(y, y);
    }
  };
  city.onchange = function () {
    var z = stateCityZip[state.value][this.value];
    for (var i = 0; i < z.length; i++) {
      zip.options[zip.options.length] = new Option(z[i], z[i]);
    }
  };
};
