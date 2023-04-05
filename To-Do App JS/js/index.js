
  let count = 0;
 document.getElementById("btn-hash").addEventListener("click", function(){
        count += 1;
      const inputValue = document.getElementById("input-field").value;
      document.getElementById("input-field").value = "";

      const body = document.getElementById("body-part");
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${count}</td>
        <td>${inputValue}</td>
        <td>
        <button class="delete-btn bg-violet-600 px-3 py-2 rounded text-white">Delete</button>
        <button class="bg-fuchsia-500 px-3 py-2 rounded text-white">Done</button>
        </td>
      `;
      body.appendChild(tr);
      
     const bill = document.querySelectorAll(".delete-btn");
      for(let del of bill){
         del.addEventListener("click", function(event){
           console.log(event.target.parentNode.parentNode.style.display = "none");
            //  console.log(event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode));
         }); 
      }
 
 });












//  console.log("hi");