// DOM elements
const loanAmountInput = document.getElementById('loan-amount');
const annualInterestRateInput = document.getElementById('annual-interest-rate');
const tenureInput = document.getElementById('tenure');
const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');

// Calculate EMI function
function calculateEMI() {
  const loanAmount = Number(loanAmountInput.value);
  const annualInterestRate = Number(annualInterestRateInput.value);
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const tenure = Number(tenureInput.value);
  const emi =
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) /
    (Math.pow(1 + monthlyInterestRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;
  resultDiv.innerHTML = `
    <label>Total Interest to be Paid:</label>
    <span>${totalInterest.toFixed(2)}</span>
    <br />
    <label>Total Payment:</label>
    <span>${totalPayment.toFixed(2)}</span>
    <br />
    <label>EMI per Month:</label>
    <span>${emi.toFixed(2)}</span>
  `;
}

// Event listener for calculate button click
calculateButton.addEventListener('click', calculateEMI);
