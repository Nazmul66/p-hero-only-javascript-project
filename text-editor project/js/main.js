 // This is textarea input field
 function textAreas(){
    const textArea = document.getElementById("main-text-field");
    return textArea;
 }
 
  const bold =  document.getElementById("bold");
    bold.addEventListener("click", function(){
    const inputValue = textAreas();
    bold.classList.toggle("bolder");
    inputValue.classList.toggle("bolders");
 });

  const italic =  document.getElementById("italic");
     italic.addEventListener("click", function(){
     const inputValue = textAreas();
     italic.classList.toggle("em");
  inputValue.classList.toggle("ems");
  });

  const underline =  document.getElementById("underline");
     underline.addEventListener("click", function(){
     const inputValue = textAreas();
     underline.classList.toggle("under");
  inputValue.classList.toggle("unders");
  });

// if(left === true || center === true || right === true || justify === true){
     
// }

// const left =  document.getElementById("left");
  document.getElementById("left").addEventListener("click", function(){
    const inputValue = textAreas();
    inputValue.classList.add("leftValue");
    inputValue.classList.remove("centerValue");
    inputValue.classList.remove("rightValue");
    inputValue.classList.remove("justifyValue");
  });

// const center =  document.getElementById("center");
  document.getElementById("center").addEventListener("click", function(){
    const inputValue = textAreas();
    inputValue.classList.remove("leftValue");
    inputValue.classList.add("centerValue");
    inputValue.classList.remove("rightValue");
    inputValue.classList.remove("justifyValue");
  });

  // const right =  document.getElementById("right");
     document.getElementById("right").addEventListener("click", function(){
     const inputValue = textAreas();
     inputValue.classList.remove("leftValue");
     inputValue.classList.remove("centerValue");
     inputValue.classList.add("rightValue");
     inputValue.classList.remove("justifyValue");
  });

  // const justify =  document.getElementById("justify");
     document.getElementById("justify").addEventListener("click", function(){
     const inputValue = textAreas();
     inputValue.classList.remove("leftValue");
     inputValue.classList.remove("centerValue");
     inputValue.classList.remove("rightValue");
     inputValue.classList.add("justifyValue");
  });


// font size input
  const inputNumber = document.getElementById("number-input");
  inputNumber.addEventListener("input", function(){
    const inputValue = textAreas();
    inputValue.style.fontSize = inputNumber.value + "px" ;
  })

 // color input
  const colorInput = document.getElementById("color-input");
    colorInput.addEventListener("input", function(){
    const inputValue = textAreas();
    inputValue.style.color = colorInput.value ;
  })


