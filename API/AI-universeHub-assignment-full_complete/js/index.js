const btnShow = document.getElementById("btn-show");
let getData = [];
let allData = [];

// fetch api loaded
const load = () =>{
    // spinner added
    document.getElementById("spinner").classList.remove("d-none");
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(res => res.json())
    .then(data => { 
      // dataFile(data.data.tools)
      allData = data.data.tools
      dataFile(allData)
      getData.push(data.data.tools)
   });
}

// create dynamic card section
const dataFile = (file) =>{
   const container = document.getElementById("main-div");
   container.innerHTML = "";
     let files = file.slice(0, 6);
      btnShow.classList.remove("d-none");

      files.forEach(elements => {
      const {image, features, name, published_in, id} = elements;
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-lg-4", "mb-4");
      createDiv.innerHTML = `
        <div class="card-div p-3">
          <img src="${image}" alt="" class="img-all">
            <div class="img-details">
               <h2>Features</h2>
               <ol>${featuresAlls(features)}</ol>
              </div>
            <hr>

          <div class="down-section-card d-flex justify-content-between align-items-center">
            <div class="left-card">
              <h2>${name}</h2>
                <div class="flex align-items-center">
                    <img src="images/date.png" alt="">
                    <span>${published_in}</span>
                </div>
            </div>

            <div class="right-card">
                <button class="border-0 rounded-circle" onclick="arrowClick('${id}')">
                    <img src="images/arrow.png" alt="">
                </button>
            </div>
         </div>
        </div>
      `;
      container.appendChild(createDiv);
      // spinner remove
      document.getElementById("spinner").classList.add("d-none");
   });
}


// cards feature feedBack
const featuresAlls = (all) =>{
   let li = "";
   if(all){
      all.slice(0,3).forEach(item =>{
         // console.log(item);
         li += `<li>${item ? item : "no data"}</li>`
      });
   }
   else{
      li += "No Data Found";
   }
   return li;
}

// sorting function method applied
document.getElementById('sortByDateBtn').addEventListener('click', function(){
    // console.log(allData);
    // ascending order
    allData.sort((a,b) =>  new Date(a.published_in) - new Date(b.published_in));
    // descending order
    // allData.sort((a,b) =>  new Date(b.published_in) - new Date(a.published_in));
    dataFile(allData);
})

// get data for modals api
const arrowClick = async(dataReceived) =>{
     try{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${dataReceived}`)
        .then(res => res.json())
        .then(data => modalFile(data.data));
     }
     catch(error){
        console.log(error);
     }
}

// get modal just click it
const modalFile = (modalData) =>{
   //  console.log(modalData);
    const {accuracy, description, pricing, integrations, features, image_link, input_output_examples
    } = modalData;
    const modalContainer = document.getElementById("modal-section");
    modalContainer.classList.remove("d-none");
    modalContainer.innerHTML = `
    <div class="main-container">
            <img onclick="crossBtn()" src="images/cross.png" alt="" class="delete-div"> 
       <div class="modal-container"> 

            <div class="leftSide-div">
               <p>${description ? description : "NO Bio found"}</p>
               <div class="three-card-div">
                  <div class="all-card">
                     <h3><span class="d-block">${pricing ? pricing[0].price : "free of cost/" }</span><span class="d-block">${pricing ? pricing[0].plan : "Basic"}</span></h3>
                  </div>
                  <div class="all-card">
                     <h3 style="color: #F28927"><span class="d-block">${pricing ? pricing[1].price : "free of cost/"}</span><span class="d-block">${pricing? pricing[1].plan : "Pro"}</span></h3>
                  </div>
                  <div class="all-card">
                     <h3 style="color: #EB5757"><span class="d-block">${pricing ? pricing[2].price : "free of cost/"}</span><span class="d-block">${pricing ? pricing[2].plan : "Enterprise"}</span></h3>
                  </div>
               </div>

               <div class="details-div">
                  <div class="features-div">
                     <h2>Features</h2>
                     <ul>
                        <li>${features[1].feature_name ? features[1].feature_name : "No data Found" }</li>
                        <li>${features[2].feature_name ? features[2].feature_name : "No data Found" }</li>
                        <li>${features[3].feature_name ? features[3].feature_name : "No data Found" }</li>
                     </ul>
                  </div>

                  <div class="Integrations-div">
                     <h2>Integrations</h2>
                     <ul>${IntegrationsALL(integrations)}</ul>
                  </div>
               </div>
            </div>

            <div class="rightSide-div">
              <div class="img-div">
                  <img src="${image_link[0]}" alt="" class="all-img">
                  <span style="font-weight: 500" class="badge text-bg-danger ${accuracy.score === null ? "d-none" : ""}"><span>${accuracy.score * 100}</span>% accuracy</span>
               </div>
               <h1 id="tiles"> ${h1Title(input_output_examples)}</h1>
               <p>${input_output_examples ? input_output_examples[1].output.slice(0,150) + " ..." : "No! Not Yet! Take a break!!!"}</p>
            </div>
          </div>
       </div>
    `;
}


// get all integrations features 
const IntegrationsALL = (integrate) =>{
   // console.log(integra);
      let li = '';
      if(integrate){
         integrate.forEach(items =>{
            li += `<li>${items}</li>`
         });
      }
      else{
         li += "No Data Found";
      }
    return li;
}

// disappear H1 title, if said null
const h1Title = (title) =>{
   let dataFile = "";
   if(title){
      title.slice(0,1).forEach(file =>{
         // console.log(file.input);
         dataFile += `${file.input}`;
      });
   }
   else{
      dataFile += "" ;
   }
   return dataFile;
}


// remove modal remove it
const crossBtn = () =>{
    document.getElementById("modal-section").classList.add("d-none");
}

// show all click button
btnShow.addEventListener("click", function(){
      document.getElementById("spinner").classList.remove("d-none");
      document.getElementById("main-div").innerHTML = "";
      btnShow.classList.add("d-none");
      // showAllData(getData);
      showAllData(getData[0]);
});

const showAllData = (shows) =>{
   //  console.log(shows);
    const container = document.getElementById("main-div");
    shows.forEach(elements => {
      const {image, features, name, published_in, id} = elements;
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-lg-4", "mb-4");
      createDiv.innerHTML = `
        <div class="card-div p-3">
          <img src="${image}" alt="" class="img-all">
            <div class="img-details">
               <h2>Features</h2>
               <ol>${featuresAllSet(features)}</ol>
              </div>
            <hr>

          <div class="down-section-card d-flex justify-content-between align-items-center">
            <div class="left-card">
              <h2>${name}</h2>
                <div class="flex align-items-center">
                    <img src="images/date.png" alt="">
                    <span>${published_in}</span>
                </div>
            </div>

            <div class="right-card">
                <button class="border-0 rounded-circle" onclick="arrowClick('${id}')">
                    <img src="images/arrow.png" alt="">
                </button>
            </div>
         </div>
        </div>
      `;
      container.appendChild(createDiv);
      // spinner remove
      document.getElementById("spinner").classList.add("d-none");
   }); 
}

// cards feature feedBack
const featuresAllSet = (all) =>{
   let li = "";
   if(all){
      all.slice(0,3).forEach(item =>{
         // console.log(item);
         li += `<li>${item}</li>`
      });
   }
   else{
      li += "No Data Found";
   }
   return li;
}

