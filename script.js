// Years slider
const yearsInput = document.getElementById("years");
const yearsValue = document.getElementById("years-value");

// Set initial value
yearsValue.textContent = yearsInput.value;

// Update value as slider moves
yearsInput.addEventListener("input", () => {
  yearsValue.textContent = yearsInput.value;
});

// Grab inputs
const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest"); // fixed id
const timesInput = document.getElementById("times");

// Grab outputs
const earnedSpan = document.getElementById("earned");
const totalSpan = document.getElementById("total");

// Hook up the calculate button
const button = document.getElementById("calculate-btn"); // target by id

button.addEventListener("click", () => {
  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(interestInput.value) / 100; // fixed variable name
  const times = parseInt(timesInput.value);
  const years = parseInt(yearsInput.value);

  // Compound Interest Formula
  const total = principal * Math.pow(1 + rate / times, times * years);
  const earned = total - principal;

  // Display results
  earnedSpan.textContent = earned.toFixed(2);
  totalSpan.textContent = total.toFixed(2);
});
