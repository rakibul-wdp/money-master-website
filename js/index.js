// for expenses
function calculateExpenses(fee) {
  let feeNumber = document.getElementById(fee + '-fee');
  const feeValue = parseFloat(feeNumber.value);
  return feeValue;
}

// text to value 
function textToValue(identity) {
  const getSomeId = document.getElementById(identity);
  const textToNumber = parseFloat(getSomeId.value);
  return textToNumber;
}

// calculate button work
document.getElementById('calculate-button').addEventListener('click', function () {
  const foodFee = calculateExpenses('food');
  const rentFee = calculateExpenses('rent');
  const clothesFee = calculateExpenses('clothes');

  const totalFee = foodFee + rentFee + clothesFee;

  // total expenses
  const totalExpensesGet = document.getElementById("total-expenses");
  const changeExpenses = totalExpensesGet.innerText = totalFee;

  // get income
  const getIncomeValue = textToValue('income');
  const forBalance = getIncomeValue - totalFee;

  // update balance
  const getBalance = document.getElementById("balance");
  const updateBalance = getBalance.innerText = forBalance;
})

// save button work
document.getElementById('save-button').addEventListener('click', function () {
  // get income
  const incomeText = textToValue('income');

  // get save input
  const saveInputValue = textToValue('save-input');
  
  // calculate percentage
  const calculatePercentage = (saveInputValue / 100) * incomeText;

  // get saving amount
  const getSavingAmount = document.getElementById('saving-amount');
  const savingAmount = getSavingAmount.innerText = calculatePercentage;

  //
  const foodFee = calculateExpenses("food");
  const rentFee = calculateExpenses("rent");
  const clothesFee = calculateExpenses("clothes");

  const totalFee = foodFee + rentFee + clothesFee;
  const forBalance = incomeText - totalFee;

  const lastMoney = forBalance - calculatePercentage;

  // update remaining balance
  const getRemainingBalance = document.getElementById('remaining-balance');
  getRemainingBalance.innerText = lastMoney;
})