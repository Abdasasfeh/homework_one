const kmInput = document.getElementById("km");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const km = kmInput.value.trim();

  if (km === "" || isNaN(km)) {
    result.textContent = "Please enter a valid number.";
    result.style.color = "red";
    return;
  }

  const miles = km * 0.621371;
  result.style.color = "black";
  result.textContent = km + " km = " + miles.toFixed(3) + " miles";
});
clearBtn.addEventListener("click", () => {
  kmInput.value = "";
  result.textContent = "";
});

