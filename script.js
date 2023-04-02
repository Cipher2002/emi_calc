function calculateEMI() {
  const loanAmount = document.getElementById("loan-amount").value;
  const annualInterestRate = document.getElementById("annual-interest-rate").value;
  const tenure = document.getElementById("tenure").value;

  const monthlyInterestRate = (annualInterestRate / 12) / 100;
  const numberOfPayments = tenure;
  
  const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  const totalPayment = emi * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  document.getElementById("emi").innerHTML = emi.toFixed(2);
  document.getElementById("total-payment").innerHTML = totalPayment.toFixed(2);
  document.getElementById("total-interest").innerHTML = totalInterest.toFixed(2);
}

document.getElementById("loan-amount").addEventListener("change", calculateEMI);
document.getElementById("annual-interest-rate").addEventListener("change", calculateEMI);
document.getElementById("tenure").addEventListener("change", calculateEMI);
