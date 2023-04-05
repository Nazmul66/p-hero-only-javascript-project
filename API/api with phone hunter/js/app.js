

// phone api convert to object
const dataFile = async(urls, dataLimit) =>{
     const url = `https://openapi.programming-hero.com/api/phones?search=${urls}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        dataLoad(data.data, dataLimit);
    }
    catch(error){
        console.log(error);
    }
}

const dataLoad = (file, dataLimit) =>{
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";
    const btnShowAll = document.getElementById("btn-show-all");

    // show 10 phones only
    if(dataLimit && file.length > 9){
      file = file.slice(0,9);
      btnShowAll.classList.remove("d-none");
    } 
    else{
        btnShowAll.classList.add("d-none");  
    }

    // no phone available declare
    const noPhone = document.getElementById("no-phone");
    if(file.length === 0){
        noPhone.classList.remove("d-none");
    }
    else{
        noPhone.classList.add("d-none"); 
    }

    file.forEach(elements => {
        // console.log(elements);
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
        <div class="card px-3 pt-3">
            <img src="${elements.image}" class="card-img-top d-block mx-auto w-75" alt="...">
              <div class="card-body">
                <h5 class="card-title">${elements.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phoneContainer.appendChild(col);
    });
        // 1st method spinner
        //   const spinner = document.getElementById("spinner");
        //   spinner.classList.add("d-none")

        // 2nd method spinner
        spinnerCondition(false);
}


document.getElementById("btn-press").addEventListener("click", function(){
         //   1st method spinner
         //   const spinner = document.getElementById("spinner");
        //   spinner.classList.remove("d-none")

        // 2nd method spinner
        processLimit(9);
})


  // loading spinner
const spinnerCondition = (isLoading) =>{
    const spinner = document.getElementById("spinner");
     if(isLoading){
        spinner.classList.remove("d-none");
     }
     else{
        spinner.classList.add("d-none")
     }
}

document.getElementById("btn-show-all").addEventListener("click", function(){
       processLimit();
})

const processLimit = (dataLimit) =>{
    spinnerCondition(true);
    const inputText = document.getElementById("input-text");
    const inputTextValue = inputText.value;
    dataFile(inputTextValue, dataLimit);
}

// dataFile("apple");