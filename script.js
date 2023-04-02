// Get references to the input fields and output elements
const loanAmountInput = document.getElementById("loanAmount");
const annualInterestRateInput = document.getElementById("annualInterestRate");
const tenureInput = document.getElementById("tenure");
const calculateButton = document.getElementById("calculate-button");
const totalInterestOutput = document.getElementById("totalInterest");
const totalPaymentOutput = document.getElementById("totalPayment");
const monthlyEMIOutput = document.getElementById("monthlyEMI");

// Add event listener to the Calculate button
calculateButton.addEventListener("click", calculateEMI);

// Define the calculateEMI function
function calculateEMI() {
  // Get the input values from the user
  const loanAmount = parseFloat(loanAmountInput.value);
  const annualInterestRate = parseFloat(annualInterestRateInput.value);
  const tenure = parseFloat(tenureInput.value);

  // Calculate the EMI
  const monthlyInterestRate = annualInterestRate / (12 * 100);
  const numberOfPayments = tenure;
  const EMI = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Calculate the total payment and total interest to be paid
  const totalPayment = EMI * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  // Display the results in the output fields
  totalInterestOutput.innerHTML = totalInterest.toFixed(2);
  totalPaymentOutput.innerHTML = totalPayment.toFixed(2);
  monthlyEMIOutput.innerHTML = EMI.toFixed(2);
}
