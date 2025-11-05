// // // Get references to DOM elements
// const form = document.getElementById('converter');
// const kmInput = document.getElementById('km');
// const resultDiv = document.getElementById('result');
// const clearBtn = document.getElementById('clear');

// // Conversion factor
// const KM_TO_MILES = 0.621371;

// // Function to format numbers nicely
// function formatNumber(n) {
//   return Number(n).toLocaleString(undefined, { maximumFractionDigits: 5 });
// }

// // Event listener for form submission (Convert button or Enter)
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const value = kmInput.value.trim();

//   // Input validation
//   if (value === '') {
//     resultDiv.textContent = 'Please enter a value in kilometers.';
//     resultDiv.style.color = 'crimson';
//     kmInput.focus();
//     return;
//   }

//   const km = Number(value);
//   if (Number.isNaN(km)) {
//     resultDiv.textContent = 'Invalid value — please enter a number.';
//     resultDiv.style.color = 'crimson';
//     kmInput.focus();
//     return;
//   }

//   if (!isFinite(km)) {
//     resultDiv.textContent = 'Value must be finite and defined.';
//     resultDiv.style.color = 'crimson';
//     return;
//   }

//   if (km < 0) {
//     resultDiv.textContent = 'Value must be zero or positive.';
//     resultDiv.style.color = 'crimson';
//     kmInput.focus();
//     return;
//   }

//   // Perform conversion
//   const miles = km * KM_TO_MILES;

//   // Display result
//   resultDiv.style.color = '';
//   resultDiv.innerHTML = `<strong>${formatNumber(km)}</strong> km = <strong>${formatNumber(miles)}</strong> miles`;
// });

// // Clear button functionality
// clearBtn.addEventListener('click', () => {
//   kmInput.value = '';
//   resultDiv.textContent = '';
//   kmInput.focus();
// });
// const kmInput = document.getElementById("km");
// const convertBtn = document.getElementById("convert");
// const clearBtn = document.getElementById("clear");
// const result = document.getElementById("result");

// convertBtn.addEventListener("click", () => {
//   const km = kmInput.value.trim();

//   if (km === "" || isNaN(km)) {
//     result.textContent = "Please enter a valid number.";
//     result.style.color = "red";
//     return;
//   }

//   const miles = km * 0.621371;
//   result.style.color = "black";
//   result.textContent = `${km} km = ${miles.toFixed(3)} miles`;
// });

// clearBtn.addEventListener("click", () => {
//   kmInput.value = "";
//   result.textContent = "";
// });
// الحصول على العناصر
const kmInput = document.getElementById("km");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

// زر التحويل
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

// زر المسح
clearBtn.addEventListener("click", () => {
  kmInput.value = "";
  result.textContent = "";
});

