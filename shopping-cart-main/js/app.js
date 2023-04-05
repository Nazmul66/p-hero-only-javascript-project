// // 
// function getInputType(condition){
//     const inputField = document.getElementById("input-field");
//     const inputFieldValue = inputField.value;
//     const inputFieldValueConvert = parseInt(inputFieldValue);

//     let inputFieldNumberValue;
//     if(condition === true){
//         inputFieldNumberValue = inputFieldValueConvert + 1;
//     }
//     else{
//         inputFieldNumberValue = inputFieldValueConvert - 1;
//     }
//     inputField.value = inputFieldNumberValue; 
//     return inputFieldNumberValue;
// }

// function getInputType2(condition){
//     const inputField = document.getElementById("input-field2");
//     const inputFieldValue = inputField.value;
//     const inputFieldValueConvert = parseInt(inputFieldValue);

//     let inputFieldNumberValue;
//     if(condition === true){
//         inputFieldNumberValue = inputFieldValueConvert + 1;
//     }
//     else{
//         inputFieldNumberValue = inputFieldValueConvert - 1;
//     }
//     inputField.value = inputFieldNumberValue; 
//     return inputFieldNumberValue;
// }


// // increase item value item for $59
// document.getElementById("btn-plus").addEventListener("click", function(){
//      const increaseNum = getInputType(true);
      
//      const price = document.getElementById("price");
//      const priceInner = price.innerText;
//      const priceInnerValue = parseInt(priceInner);

//      const priceQual = increaseNum * 59;
//      price.innerText = priceQual;
     
//     const priceVal = document.getElementById("price").innerText;
//     const priceVal2 = document.getElementById("price2").innerText;
//     const TotalPrice = parseInt(priceVal)  + parseInt(priceVal2);

//     const subTotal = document.getElementById("sub-total");
//     subTotal.innerText = TotalPrice;

//     const taxAmount = TotalPrice * 0.1;
//     const taxTotal = document.getElementById("tax");
//     taxTotal.innerText = taxAmount;

//     const mustTotal = TotalPrice - taxAmount;
//     const all = document.getElementById("all");
//     all.innerText = mustTotal;
// })

// // decrease item value item for $59
// document.getElementById("btn-minus").addEventListener("click", function(){
//      const decreaseNum = getInputType(false);

//      const price = document.getElementById("price");
//      const priceInner = price.innerText;
//      const priceInnerValue = parseInt(priceInner);

//      const priceQual = decreaseNum * 59;
//      price.innerText = priceQual; 
     
//      const priceVal = document.getElementById("price").innerText;
//     const priceVal2 = document.getElementById("price2").innerText;
//     const TotalPrice = parseInt(priceVal)  + parseInt(priceVal2);

//     const subTotal = document.getElementById("sub-total");
//     subTotal.innerText = TotalPrice;

//     const taxAmount = TotalPrice * 0.1;
//     const taxTotal = document.getElementById("tax");
//     taxTotal.innerText = taxAmount;

//     const mustTotal = TotalPrice - taxAmount;
//     const all = document.getElementById("all");
//     all.innerText = mustTotal;
// })



// // increase item value item for $1219
// document.getElementById("btn-plus2").addEventListener("click", function(){
//     const increaseNum = getInputType2(true);
     
//     const price = document.getElementById("price2");
//     const priceInner = price.innerText;
//     const priceInnerValue = parseInt(priceInner);

//     const priceQual = increaseNum * 1219;
//     price.innerText = priceQual;

//     const priceVal = document.getElementById("price").innerText;
//     const priceVal2 = document.getElementById("price2").innerText;
//     const TotalPrice = parseInt(priceVal)  + parseInt(priceVal2);

//     const subTotal = document.getElementById("sub-total");
//     subTotal.innerText = TotalPrice;

//     const taxAmount = TotalPrice * 0.1;
//     const taxTotal = document.getElementById("tax");
//     taxTotal.innerText = taxAmount;


//     const mustTotal = TotalPrice - taxAmount;
//     const all = document.getElementById("all");
//     all.innerText = mustTotal;
// })

// // decrease item value item for $1219
// document.getElementById("btn-minus2").addEventListener("click", function(){
//     const decreaseNum = getInputType2(false);

//     const price = document.getElementById("price2");
//     const priceInner = price.innerText;
//     const priceInnerValue = parseInt(priceInner);

//     const priceQual = decreaseNum * 1219;
//     price.innerText = priceQual;   

//     const priceVal = document.getElementById("price").innerText;
//     const priceVal2 = document.getElementById("price2").innerText;
//     const TotalPrice = parseInt(priceVal) + parseInt(priceVal2);

//     const subTotal = document.getElementById("sub-total");
//     subTotal.innerText = TotalPrice;

//     const taxAmount = TotalPrice * 0.1;
//     const taxTotal = document.getElementById("tax");
//     taxTotal.innerText = taxAmount;

//     const mustTotal = TotalPrice - taxAmount;
//     const all = document.getElementById("all");
//     all.innerText = mustTotal;
// })

