

document.getElementById("deposit-money").addEventListener("click", function(){
     const inputDepo = getInputField("input-deposit");
     if(isNaN(inputDepo)){
        alert("Please Input some value");
        return;
     }
     const totalDepo = getDepositById("deposit-total");
    
     const totalAmountOfDeposit = totalDepo + inputDepo;
     CalculateAllDeposit("deposit-total", totalAmountOfDeposit);

     const total1 = TotalBalanceContent("total");
     const TotalAmount = total1 + inputDepo;
     TotalBalanceAmount("total", TotalAmount);
});


document.getElementById("withdraw-money").addEventListener("click", function(){
     const inputWithdraw = getInputField("input-withdraw");
     if(isNaN(inputWithdraw)){
          alert("Bhai input value te number lekh");
          return;
     }
     const TotalWithdraw = getDepositById("withdraw");
     
     const totalAmountWithdraw = TotalWithdraw + inputWithdraw; 

     const bankAmount = TotalBalanceContent("total");
     if(inputWithdraw > bankAmount){
          alert("It's way high too dispute amount");
          return;
        }
     CalculateAllDeposit("withdraw", totalAmountWithdraw);
     const TotalBankBalance = bankAmount - inputWithdraw;
     TotalBalanceAmount("total", TotalBankBalance);
});




