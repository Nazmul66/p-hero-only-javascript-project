
// get new elements findOut
function getElementById(element){
    const item = document.getElementById(element);
    return item;
}

//  This function calculate all InputField into Number
function onlyInputField(inputItem){
    const input = document.getElementById(inputItem);
    const inputValue = input.value;
    const inputValueConvert = parseFloat(inputValue);
    return inputValueConvert;
}

//  This function calculate all InnerText into Number
function getElementByIdNum(inputItem){
    const items = document.getElementById(inputItem);
    const itemsInner = items.innerText;
    const itemsInnerConvert = parseFloat(itemsInner);
    return itemsInnerConvert;
}

function subTotal(){
    const subTotal = getElementById("sub-total");
    // const subTotalNum = getElementByIdNum("sub-total");
    const activeInner = getElementById("price2").innerText;
    const activeInner2 = getElementById("price").innerText;
    const combineTotal = parseFloat(activeInner) + parseFloat(activeInner2);
    subTotal.innerText = combineTotal;
}

// This element to get tax
function tax(){
    const tax = getElementById("tax");
    // const taxInnerNum = getElementByIdNum("tax");
    const subTotal = getElementById("sub-total").innerText;

    const taxDept = parseFloat(subTotal) * (10/100);
    tax.innerText = taxDept.toFixed(1); 
}

function TotalAMount(){
    const Totals = getElementById("all");
    const TotalsNum = getElementByIdNum("all");
    const subTotals = getElementById("sub-total").innerText;
    const taxs = getElementById("tax").innerText;
    const amount = parseFloat(subTotals) +  parseFloat(taxs);
    Totals.innerText = amount;

}
 
// 1st row event click button increase
document.getElementById("btn-plus2").addEventListener("click", function(){
          const price = getElementById("price2");
          const inputValue = getElementById("input-field2");
          const inputValueNum = onlyInputField("input-field2");
          const PriceInner = getElementByIdNum("price2");

          const increaseItem = inputValueNum + 1;
          inputValue.value = increaseItem;

          const combinePlus = inputValue.value * 1219;
          price.innerText = combinePlus;
          subTotal();
          tax();
          TotalAMount();
})

// 1st row event click button decrease
document.getElementById("btn-minus2").addEventListener("click", function(){
    const price = getElementById("price2");
    const inputValue = getElementById("input-field2");
    const inputValueNum = onlyInputField("input-field2");
    const PriceInner = getElementByIdNum("price2");

    const increaseItem = inputValueNum - 1;
    inputValue.value = increaseItem;

    const combinePlus = inputValue.value * 1219;
    price.innerText = combinePlus;
    subTotal();
    tax();
    TotalAMount();
})


// 2nd row event click button increase
document.getElementById("btn-plus").addEventListener("click", function(){
    const price = getElementById("price");
    const inputValue = getElementById("input-field");
    const inputValueNum = onlyInputField("input-field");
    const PriceInner = getElementByIdNum("price");

    const increaseItem = inputValueNum + 1;
    inputValue.value = increaseItem;

    const combinePlus = inputValue.value * 59;
    price.innerText = combinePlus;
    subTotal();
    tax();
    TotalAMount();
})

// 2nd row event click button decrease
document.getElementById("btn-minus").addEventListener("click", function(){
    const price = getElementById("price");
    const inputValue = getElementById("input-field");
    const inputValueNum = onlyInputField("input-field");
    const PriceInner = getElementByIdNum("price");

    const increaseItem = inputValueNum - 1;
    inputValue.value = increaseItem;

    const combinePlus = inputValue.value * 59;
    price.innerText = combinePlus;
    subTotal();
    tax();
    TotalAMount();
})