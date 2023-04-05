// example-1 to testing it

// const btn = document.getElementById("btn-click");
//    btn.addEventListener("click", function(){
//     const inputBox = document.getElementById("input-box");
//     const inputValue = inputBox.value;

//     const section = document.getElementById("section");
//     const myPara = document.createElement("p");
//     myPara.innerText = inputValue;
//     section.appendChild(myPara);
//     inputBox.value = "";
// });



// example-2 for simple github repo delete function made

// let inputText = document.querySelector("#text-input");
// inputText.addEventListener("keyup", function(e){
//   const text = e.target.value;

//   if(text === "delete"){
//       btn.removeAttribute("disabled");
//   }
//   else{
//       btn.setAttribute("disabled", true);
//   }
// });

// let btn = document.querySelector("#btn-press");
// btn.addEventListener("click", function(){
//   let head = document.querySelector("#h1");
//  head.style.display = "none";
//  inputText.value = "";
// });


// example-3 for remove some components and also addingElements remove
//   document.getElementById("list-container").addEventListener("click", function(event){
//             event.target.parentNode.removeChild(event.target);
//   })

//   document.getElementById("add-btn").addEventListener("click", function(){
//        const listContainer = document.getElementById("list-container");
//        const li = document.createElement('li');
//        li.innerText = 'Brand new text';
//        li.classList.add("all-items");
//        listContainer.appendChild(li);
//   });


// increment & decrement function

//    const point = document.getElementById("point");  
//    let count = 0; 

//     document.getElementById("increment").addEventListener("click", function(){
//     count = count + 1;
//     point.innerText = count;
//     changeIt();
//    });

//    document.getElementById("decrement").addEventListener("click", function(){
//     count = count - 1;
//     point.innerText = count;
//     changeIt();
//    });

//    function changeIt(){
//      if(count < 0){
//         point.classList.add("negative");
//      }
//      else if(count > 0){
//         point.classList.add("positive");
//      }
//      else{
//         point.classList.remove("positive");
//         point.classList.remove("negative");
//      }
//    }