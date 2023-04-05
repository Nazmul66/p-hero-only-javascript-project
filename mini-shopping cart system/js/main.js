
//   1st method to press apply then get discount

//  document.getElementById("apply").addEventListener("click", function(){
//     const price = document.getElementById("main-price");
//     const priceValue = price.innerText;
//     const priceConvert = parseFloat(priceValue);

//     const total = document.getElementById("total");
//     const totalValue = total.innerText;
//     const totalConvert = parseFloat(totalValue);

//     const totalDiscount = (priceConvert * 30) / 100;
//     const totalAmount = priceConvert - totalDiscount;
//     total.innerText = totalAmount;
//  })



//    2nd method to press apply then get discount or else regular price
 document.getElementById("apply").addEventListener("click", function(){
    const price = document.getElementById("main-price");
    const priceValue = price.innerText;
    const priceConvert = parseFloat(priceValue);

    const total = document.getElementById("total");
    const totalValue = total.innerText;
    const totalConvert = parseFloat(totalValue);

    let couponField = document.getElementById("coupon-field");
    let couponFieldValue = couponField.value;
    couponField.value = "";

    if(couponFieldValue === "DISC30"){
      const totalDiscount = (priceConvert * 30) / 100;
      const totalAmount = priceConvert - totalDiscount;
      total.innerText = totalAmount;
    }
    else{
        alert("Your coupon code are not insert or your coupon code is wrong!!");
        total.innerText = priceConvert;
    }

 })