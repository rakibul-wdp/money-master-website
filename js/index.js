// function for expenses
function expensesValue(expensesName) {
  const getExpenses = document.getElementById(expensesName + "-fee");
  const getExpensesValue = parseFloat(getExpenses.value);
  return getExpensesValue;
}
// sum of total fee
function sumTotalFee(foodFee, rentFee, clothFee) {
  if (foodFee >= 0 && rentFee >= 0 && clothFee >= 0) {
    const sumTotalFee = foodFee + rentFee + clothFee;
    return sumTotalFee;
  } else if (foodFee < 0 || rentFee < 0 || clothFee < 0) {
    alert("Please! Enter a positive Number or 0");
  } else {
    alert("Please! Enter a Number or 0");
  }
}
// catch some input value
function stringToNumber(stringInput) {
  const catchString = document.getElementById(stringInput);
  const inputValue = parseFloat(catchString.value);
  if (inputValue >= 0) {
    return inputValue;
  } else if (inputValue < 0) {
    alert("Please! Enter a positive Number or 0");
  } else {
    alert("Please! Enter a Number or 0");
  }
}
// change inner text and update amount
function catchAndUpdate(getId, given) {
  const getInnerText = document.getElementById(getId);
  const updateValue = (getInnerText.innerText = given);
  return updateValue;
}
// get calculate button
document.getElementById("calculate-button").addEventListener("click", function () {
  // get expenses input value
  const getFoodFee = expensesValue("food");
  const getRentFee = expensesValue("rent");
  const getClothesFee = expensesValue("clothes");
  // calculate total expenses fee
  const totalExpensesFee = sumTotalFee(getFoodFee, getRentFee, getClothesFee);
  // get income value and calculate for balance
  const getIncomeValue = stringToNumber("income");
  const calculateBalance = getIncomeValue - totalExpensesFee;
  // get total expenses, balance and calculate it by maintain condition
  if (typeof totalExpensesFee == "number") {
    if (getIncomeValue < totalExpensesFee) {
      alert("Your Income is less than Expenses...!!!");
    } else if (calculateBalance >= 0) {
      const updateBalance = catchAndUpdate("balance", calculateBalance);
      const getAndSetExpenses = catchAndUpdate("total-expenses", totalExpensesFee);
    }
  }
});
// get save button
document.getElementById("save-button").addEventListener("click", function () {
  // get income value
  const getIncomeValue = stringToNumber("income");
  // get save input value
  const getSavingValue = stringToNumber("save-input");
  // calculate percentage
  const calculatePercentage = (getSavingValue / 100) * getIncomeValue;
  // get again expenses input value and sum
  const getFoodFee = expensesValue("food");
  const getRentFee = expensesValue("rent");
  const getClothesFee = expensesValue("clothes");
  const totalExpensesFee = sumTotalFee(getFoodFee, getRentFee, getClothesFee);
  // get saving amount set value
  const catchIncomeValue = stringToNumber("income");
  const calculateBalance = catchIncomeValue - totalExpensesFee;
  if (calculatePercentage >= 0 && calculateBalance >= calculatePercentage) {
    const savingAmount = catchAndUpdate("saving-amount", calculatePercentage);
  } else if (calculateBalance <= calculatePercentage) {
    alert("Saving amount can' not bigger than Balance...!!!");
  }
  // again calculate for balance
  const againCalcBalance = getIncomeValue - totalExpensesFee;
  // calculate for remaining balance
  const remainingBalance = againCalcBalance - calculatePercentage;
  // get and update remaining balance
  if (remainingBalance >= 0) {
    const getRemainingBalance = catchAndUpdate("remaining-balance", remainingBalance);
  }
});
