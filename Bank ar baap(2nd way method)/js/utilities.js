
// This function is for input tag to collect all amounts
function getInputField(inputElement){
   const inputDeposit = document.getElementById(inputElement);
   const inputDepositValue = inputDeposit.value;
   const inputDepositConvert = parseFloat(inputDepositValue);
   inputDeposit.value = "";
   return inputDepositConvert;
}

// This function is for span tags Amount holders
function getDepositById(onlyElements){
   const totalDeposit = document.getElementById(onlyElements); 
   const totalDepositText = totalDeposit.innerText;
   const totalDepositConvert = parseFloat(totalDepositText);
   return totalDepositConvert;
}

// This function is total calculation about deposit amount
function CalculateAllDeposit(sampleDeposit, inputDepo){
    const innerAmountDeposit = document.getElementById(sampleDeposit);
    innerAmountDeposit.innerText = inputDepo;
}

// This function is total bank balance money found data
function TotalBalanceContent(balanceData){
    const TotalBalance = document.getElementById(balanceData); 
    const TotalBalanceText = TotalBalance.innerText;
    const TotalBalanceConvert = parseFloat(TotalBalanceText);
    return TotalBalanceConvert;
}

// This function is overall calculate the main total amount of banks
function TotalBalanceAmount(mainBalance, amountValue){
   const BankBalance = document.getElementById(mainBalance);
   BankBalance.innerText = amountValue;
}