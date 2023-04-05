
// get new items
function getElement(point){
    const item = document.getElementById(point);
    return item;
}

/// pin-generator value
document.getElementById("generate-pin").addEventListener("click", function(){
     const random = Math.round(Math.random()*10000);
     const randomString = random + "";
     const input = getElement("input-field");
     
     if(randomString.length === 4){
        input.value = random;
     }     
})

 document.getElementById("click-num").addEventListener("click", function(e){
       const number = e.target.innerText;
       const inputBox = getElement("input-box");
       const inputBoxValue = inputBox.value;
    //    inputBox.value = "";

       if(isNaN(number)){
           if(number === "C"){
            inputBox.value = "";
           }
           else if(number === "<"){
             const digit = inputBoxValue.split('');
             digit.pop();
             const digitJoin = digit.join("");
             inputBox.value = digitJoin;
           }
       }
       else{
           const previousTyped = inputBoxValue + number;
           inputBox.value = previousTyped;
       }
 })


 document.getElementById("btn-result").addEventListener("click", function(){
        const pinGenerate = getElement("input-field");
        const AllNumbers = getElement("input-box");

        const matchPin = getElement("match-pin");
        const errorPin = getElement("error-pin");

        if(pinGenerate.value == AllNumbers.value){
            matchPin.style.display = "block";
            errorPin.style.display = "none";
            pinGenerate.value = "";
            AllNumbers.value = "";
        }
        else{  
            matchPin.style.display = "none";
            errorPin.style.display = "block";
            pinGenerate.value = "";
            AllNumbers.value = "";
        }
 })


// console.log(typeof inputValue)