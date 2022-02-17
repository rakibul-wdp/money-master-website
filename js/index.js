// for expenses
function calculateExpenses(fee) {
  const feeNumber = document.getElementById(fee + '-fee');
  const feeValue = parseFloat(feeNumber.value);
  return feeValue;
}

// text to value 
function textToValue(identity) {
  const getSomeId = document.getElementById(identity);
  const textToNumber = parseFloat(getSomeId.value);
  return textToNumber;
}

// change inner text
function changeInnerText(update, given) {
  const getInnerText = document.getElementById(update);
  const changeText = getInnerText.innerText = given;
  return changeText;
}

// calculate button work
document.getElementById('calculate-button').addEventListener('click', function () {
  const foodFee = calculateExpenses('food');
  const rentFee = calculateExpenses('rent');
  const clothesFee = calculateExpenses('clothes');

  const totalFee = foodFee + rentFee + clothesFee;

  // total expenses
  const totalExpensesGet = changeInnerText('total-expenses', totalFee);

  // get income
  const getIncomeValue = textToValue('income');
  const forBalance = getIncomeValue - totalFee;

  // update balance
  const updateBalance = changeInnerText('balance', forBalance);
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
  const savingAmount = changeInnerText('saving-amount', calculatePercentage);

  //
  const foodFee = calculateExpenses("food");
  const rentFee = calculateExpenses("rent");
  const clothesFee = calculateExpenses("clothes");

  const totalFee = foodFee + rentFee + clothesFee;
  const forBalance = incomeText - totalFee;

  const lastMoney = forBalance - calculatePercentage;

  // update remaining balance
  const getRemainingBalance = changeInnerText('remaining-balance', lastMoney);
})