// bank.html javascript function


const depositBtn = document.getElementById("deposit-money");
    depositBtn.addEventListener("click", function(){
    const inputDeposit = document.getElementById("input-deposit");
    const inputDepositString = inputDeposit.value;
    const inputDepositConvert = parseFloat(inputDepositString);

    const depositPara = document.getElementById("deposit-total");
    const depositValue = depositPara.innerText;
    const depositValueConvert = parseFloat(depositValue);
    inputDeposit.value = "";
 
    const totalDeposit =  depositValueConvert + inputDepositConvert;
    depositPara.innerText = totalDeposit;

    const total = document.getElementById("total");
    const totalString = total.innerText;
    const totalMoneyConvert = parseFloat(totalString);

    const totalBalance =  totalMoneyConvert + inputDepositConvert;
    total.innerText = totalBalance;


});