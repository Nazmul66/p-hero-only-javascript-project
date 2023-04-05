
const apiData = async(urls, del) =>{
   const url = `https://openapi.programming-hero.com/api/phones?search=${urls}`;
   console.log
    try{
       const res = await fetch(url);
       const data = await res.json();
       getData(data.data, del); 
    }
    catch(error){
      console.log(error);
    }
}

 const getData = (data,del) =>{
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";

    const btnShowAll = document.getElementById("btn-show-all");
    if(del && data.length > 10){
        data = data.slice(0, 9);
        btnShowAll.classList.remove("d-none");
    }
    else{
        btnShowAll.classList.add("d-none");
    }
    
    data.forEach(element => {
        // console.log(element);
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
         <div class="card px-3 pt-3">
            <img src="${element.image}" class="card-img-top d-block mx-auto w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button type="button" onclick="getDetails('${element.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPopup">
                    Details</button>
                </div>
         </div>
        `;
        phoneContainer.appendChild(col);
    });
    // 1st ways declare spinner load
    // const spinners = document.getElementById("spinner");
    // spinners.classList.add("d-none");

    // 2nd ways declare spinner load
    spinnerProgress(false);
 } 

 document.getElementById("btn-press").addEventListener("click", function(){
        // 1st ways declare spinner load
    // const spinners = document.getElementById("spinner");
    // spinners.classList.remove("d-none");

    // 2nd ways declare spinner load
        copyData(10);
})


const spinnerProgress = (isLoading) =>{
    const spinners = document.getElementById("spinner");
    if(isLoading){
        spinners.classList.remove("d-none");
    }
    else{
        spinners.classList.add("d-none");
    }
}

const getDetails = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        phoneDetails(data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById("btn-show-all").addEventListener("click", function(){
    copyData();
})

const phoneDetails = (access) =>{
//    console.log(access.data);
   document.getElementById("modalPopupLabel").innerText = access.data.name;
   const modalBody = document.getElementById("modalBody");
   modalBody.innerHTML = `
     <img src="${access.data.image}" alt="">
     <p>processor: ${access.data.mainFeatures.chipSet}</p>
     <p>memory:${access.data.mainFeatures.memory} </p>
     <p>sensor:${access.data.mainFeatures.sensors[0] + ', ' + access.data.mainFeatures.sensors[1]}</p>
     <p>storage:${access.data.mainFeatures.storage}</p>
   `
}

const copyData = (del) =>{
    spinnerProgress(true); 
    const inputs = document.getElementById("input-text");
    const inputValue = inputs.value;
    inputs.value = "";
    apiData(inputValue, del);
}

document.getElementById("input-text").addEventListener("keypress", function(e){
    const inputs = document.getElementById("input-text");
    const inputValue = inputs.value;
    if(e.key === "Enter"){
        apiData(inputValue);
        inputs.value= "";
    }
})

apiData("apple");
