window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  let cInput = document.getElementById("cInput");
  let fInput = document.getElementById("fInput");
  let img = document.getElementById("weatherImage");
  let convertButton = document.getElementById("convertButton");

  convertButton.addEventListener("click", () => {
    let input = fInput.value;
    if (cInput.value) {
      input = cInput.value;
    }

    let t = parseFloat(input);
    if (isNaN(t)) {
      document.getElementById("errorMessage").innerHTML =
        input + " is not a number";
    } else {
      document.getElementById("errorMessage").innerHTML = "";
    }

    if (cInput.value) {
      fInput.value = convertCtoF(t);
    } else {
      cInput.value = convertFtoC(t);
    }

    if (fInput.value < 32) {
      img.src = "cold.png";
    } else if (fInput.value > 50) {
      img.src = "warm.png";
    } else {
      img.src = "cool.png";
    }
  });

  cInput.addEventListener("input", () => {
    fInput.value = "";
  });
  fInput.addEventListener("input", () => {
    cInput.value = "";
  });
}

function convertCtoF(c) {
  return (c * 9) / 5 + 32;
}

function convertFtoC(f) {
  return ((f - 32) * 5) / 9;
}
