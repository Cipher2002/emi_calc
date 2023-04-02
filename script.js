const loanAmount = document.getElementById('loan-amount');
const annualInterestRate = document.getElementById('annual-interest-rate');
const tenure = document.getElementById('tenure');
const totalInterest = document.getElementById('total-interest');
const totalPayment = document.getElementById('total-payment');
const emi = document.getElementById('emi');
const submitBtn = document.getElementById('submit-btn');

function calculateEmi() {
  const p = parseFloat(loanAmount.value);
  const r = parseFloat(annualInterestRate.value) / 100 / 12;
  const n = parseFloat(tenure.value);
  const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  if (isFinite(emiValue)) {
    emi.innerHTML = emiValue.toFixed(2);
    totalPayment.innerHTML = (emiValue * n).toFixed(2);
    totalInterest.innerHTML = ((emiValue * n) - p).toFixed(2);
  } else {
    emi.innerHTML = '';
    totalPayment.innerHTML = '';
    totalInterest.innerHTML = '';
  }
}

submitBtn.addEventListener('mouseover', function() {
  this.style.backgroundColor = "#FDB813";
  this.style.color = "#fff";
  this.style.border = "none";
});

submitBtn.addEventListener('mouseout', function() {
  this.style.backgroundColor = "#fff";
  this.style.color = "#000";
  this.style.border = "2px solid #000";
});

submitBtn.addEventListener('click', calculateEmi);
