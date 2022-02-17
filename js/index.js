// function for expenses
function expensesValue(expensesName) {
  const getExpenses = document.getElementById(expensesName + "-fee");
  const getExpensesValue = parseFloat(getExpenses.value);
  return getExpensesValue;
}
// sum of total fee
function sumTotalFee(foodFee, rentFee, clothFee) {
  const sumTotalFee = foodFee + rentFee + clothFee;
  return sumTotalFee;
}
// catch some input value 
function stringToNumber(stringInput) {
  const catchString = document.getElementById(stringInput);
  const inputValue = parseFloat(catchString.value);
  return inputValue;
}
// change inner text and update amount
function catchAndUpdate(getId, given) {
  const getInnerText = document.getElementById(getId);
  const updateValue = getInnerText.innerText = given;
  return updateValue;
}

// get calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
  // get expenses input value
  const getFoodFee = expensesValue('food');
  const getRentFee = expensesValue('rent');
  const getClothesFee = expensesValue('clothes');
  // calculate total expenses fee
  const totalExpensesFee = sumTotalFee(getFoodFee, getRentFee, getClothesFee);
  // get total expenses and set value
  const getAndSetExpenses = catchAndUpdate('total-expenses', totalExpensesFee);
  // get income value and calculate for balance
  const getIncomeValue = stringToNumber('income');
  const calculateBalance = getIncomeValue - totalExpensesFee;
  // get balance and calculate
  const updateBalance = catchAndUpdate('balance', calculateBalance);
})
// get save button
document.getElementById('save-button').addEventListener('click', function () {
  // get income value
  const getIncomeValue = stringToNumber('income');
  // get save input value
  const getSavingValue = stringToNumber('save-input');
  // calculate percentage
  const calculatePercentage = (getSavingValue / 100) * getIncomeValue;
  // get saving amount set value
  const savingAmount = catchAndUpdate('saving-amount', calculatePercentage);
  // get again expenses input value and sum 
  const getFoodFee = expensesValue("food");
  const getRentFee = expensesValue("rent");
  const getClothesFee = expensesValue("clothes");
  const totalExpensesFee = sumTotalFee(getFoodFee, getRentFee, getClothesFee);
  // again calculate for balance
  const againCalcBalance = getIncomeValue - totalExpensesFee;
  // calculate for remaining balance
  const remainingBalance = againCalcBalance - calculatePercentage;
  // get and update remaining balance
  const getRemainingBalance = catchAndUpdate('remaining-balance', remainingBalance);
})