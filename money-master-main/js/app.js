
// 
function getElementById(element){
    const item = document.getElementById(element);
    return item; 
}

function getElementByIdNum(elementInner){
    const elements = document.getElementById(elementInner);
    const elementsInner = elements.innerText;
    const elementsInnerConvert = parseFloat(elementsInner);
    return elementsInnerConvert;
}

//
function getInputField(values){
    const input = document.getElementById(values);
    const inputValue = input.value;
    const inputValueConvert = parseFloat(inputValue);
    return inputValueConvert;
}

// calculate total balance about how much i expense money
document.getElementById("btn-calculate").addEventListener("click", function(){
      const foodInput = getElementById("food-input");
      const rentInput = getElementById("rent-input");
      const clothInput = getElementById("clothes-input"); 

      const totalExp = getElementById("expenses");
      const totalBal = getElementById("balance");
      const foodInputValue = getInputField("food-input");
      const rentInputValue = getInputField("rent-input");
      const clothInputValue = getInputField("clothes-input");
      foodInput.value = "";
      rentInput.value = "";
      clothInput.value = "";

      if(isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothInputValue)){
            alert('please input all of those input field');
            return;
      }
      const total = foodInputValue + rentInputValue + clothInputValue;
      totalExp.innerText = total; 
     
      const totalExpCon = getElementByIdNum("expenses");
      const incomeInputCon = getInputField("income-input");
      if(totalExpCon > incomeInputCon){
         alert("you can't expense more then your profit");
         totalExp.innerText = 0;
         return;
      }
      const BalanceMinus = incomeInputCon - totalExpCon;
      totalBal.innerText = BalanceMinus;
})

//
document.getElementById("save-btn").addEventListener("click", function(){
    const remain = getElementById("remainsAll");
    const saveAmount = getElementById("save-amount");
    const saveMoney = getElementById("discount-input").value;
    const TotalBalanced = getElementByIdNum("balance");
    const incomeValue = getInputField("income-input");
    const remainConvert = getElementByIdNum("remainsAll");
    const saveAmountInner = getElementByIdNum("save-amount"); 
    

    const divided = incomeValue * (saveMoney / 100);
    saveAmount.innerText = divided; 
        if(divided > TotalBalanced){
           alert("This saving can't be saved");
           saveAmount.innerText = 0;
            return;
        }
    console.log(divided, TotalBalanced);
    const remainBalance = TotalBalanced - divided;
    remain.innerText = remainBalance;
    
})








    //   console.log(incomeInputCon, BalanceMinus)
