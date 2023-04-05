

document.getElementById("Withdraw-money").addEventListener("click", function(){
    const inputWithdraw = document.getElementById("input-withdraw");
    const inputWithdrawValue = inputWithdraw.value;
    const inputWithdrawConvert = parseFloat(inputWithdrawValue);

    const withdraw = document.getElementById("withdraw");
    const withdrawString = withdraw.innerText;
    const withdrawStringConvert = parseFloat(withdrawString);
    inputWithdraw.value = "";

    let totalWithdraw = withdrawStringConvert +  inputWithdrawConvert;
    withdraw.innerText = totalWithdraw;

    const total = document.getElementById("total");
    const totalString = total.innerText;
    const totalMoneyConvert = parseFloat(totalString);

    const totalBalance = totalMoneyConvert - inputWithdrawConvert;
    total.innerText = totalBalance;
})