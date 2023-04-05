


//  get all new values 
function getElementById(element){
    const item = document.getElementById(element);
    return item;
}

// get all HTML innerTexts
function getElementByIdNum(elements){
    const items = document.getElementById(elements);
    const itemsInner = items.innerText;
    const itemsInnerConvert = parseFloat(itemsInner);
    return itemsInnerConvert;
}

// get all input values
function inputFieldValue(values){
    const input = document.getElementById(values);
    const inputValue = input.value;
    const inputValueConvert = parseFloat(inputValue);
    return inputValueConvert;
}

// create new elements HTML
function createElements(count, name, price, quantity, total){ 
    const tableBody = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
         <td>${count}</td>
         <td>${name}</td>
         <td>${price}</td>
         <td>${quantity}</td>
         <td class="totally">${total}</td>
    `; 
    tableBody.appendChild(tr); 
 
     /// solved here
    const all = document.getElementById("all");
    const totally = document.getElementsByClassName("totally");

    let sum = 0;
    for(let totals of totally){
        const amount = parseInt(totals.innerText); 
        sum = sum + amount;
    }
    all.innerText = sum;
}

 
let count = 0;

// first card
document.getElementById("first-card").addEventListener("click", function(){
     count = count + 1;
     const name = document.getElementById("first-name").innerText; 
     const price = getElementByIdNum("first-price");
     const quantity = getElementByIdNum("first-quantity");

     const total = price * quantity;
     createElements(count, name, price, quantity, total);
})
 

// second card
document.getElementById("second-card").addEventListener("click", function(){
    count = count + 1;
    const name = document.getElementById("second-name").innerText; 
    const price = getElementByIdNum("second-price");
    const quantity = getElementByIdNum("second-quantity");

    const total = price * quantity;
    createElements(count, name, price, quantity, total);
})


// third card
document.getElementById("third-card").addEventListener("click", function(){
    count = count + 1;
    const name = document.getElementById("third-name").innerText; 
    const price = getElementByIdNum("third-price");
    const quantity = getElementByIdNum("third-quantity");

    const total = price * quantity;
    createElements(count, name, price, quantity, total);
})


// forth card
document.getElementById("forth-card").addEventListener("click", function(){
    count = count + 1;
    const name = document.getElementById("forth-name").innerText; 
    const price = getElementByIdNum("forth-price");
    const quantity = getElementByIdNum("forth-quantity");

    const total = price * quantity;
    createElements(count, name, price, quantity, total);
})


// last card
document.getElementById("last-card").addEventListener("click", function(){
    count = count + 1;
    const name = document.getElementById("last-name").innerText; 
    const price = inputFieldValue("last-price");
    const quantity = inputFieldValue("last-quantity");
    getElementById("last-price").value = "";
    getElementById("last-quantity").value = "";

    if(price < 0 || quantity < 0){
      alert("Negative can't be access");
      count = count - 1;
      return;
    }
    else if(isNaN(price) || isNaN(quantity)){
        alert("Please fill your input field");
        count = count - 1;
        return;
    }
    
    const total = price * quantity;
    createElements(count, name, price, quantity, total);
})




