
const clickable = (name) =>{
    const search = document.getElementById("search-value");
    document.getElementById("single-player-details").innerHTML = "";
    document.getElementById("male").classList.add("d-none");
    document.getElementById("female").classList.add("d-none");
    const searchValue = search.value;
    search.value = "";
    document.getElementById("spinner").classList.remove("d-none");
    const searchId = name || searchValue;

    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchId}`)
    .then(res => res.json())
    .then(data => dataFile(data.player));
}

const dataFile = (file) =>{
    const playerInfo = document.getElementById("player-info");
    playerInfo.innerHTML = "";
    file.forEach(players =>{
        const {strThumb, strPlayer, strNationality, idPlayer} = players;
        const createDiv = document.createElement("div");
        createDiv.classList.add("col");
        createDiv.innerHTML = `
        <div class="card">
          <img src="${strThumb ? strThumb : "no data here"} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${strPlayer}</h5>
              <p class="card-text">Nationality: ${strNationality}</p>
           </div>
          <div class="my-5 mx-3">
             <button type="button" onclick="btnDetails('${idPlayer}')" class="btn btn-danger">Details</button>
             <button type="button" class="btn btn-primary">Delete</button>
          </div>
        </div>
        `;
        playerInfo.appendChild(createDiv);
        document.getElementById("spinner").classList.add("d-none");
    });
}

const btnDetails = (details) =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${details}`)
    .then(res => res.json())
    .then(data => callData(data.players[0]));
}

const callData = (file) =>{
   console.log(file); 
   const { strPlayer, strThumb, strDescriptionEN, strGender } = file;
   if(strGender === "Male"){
     document.getElementById("male").classList.remove("d-none");
     document.getElementById("female").classList.add("d-none");
   }
   else{
    document.getElementById("female").classList.remove("d-none");
    document.getElementById("male").classList.add("d-none");
   }
   const container = document.getElementById("single-player-details");
   container.innerHTML = "";
   const div = document.createElement("div");
   div.innerHTML = `
    <div class="card mb-3 w-100 h-100">
      <div class="row g-0">
       <div class="col-md-4">
         <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
         </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <p class="card-text">${strDescriptionEN ? strDescriptionEN.slice(0,100) + " ..." : "no bio here"}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
       </div>
    </div>
   `;
   container.appendChild(div);
}


document.getElementById("search-value").addEventListener("keypress", function(e){
    const search = document.getElementById("search-value");
    const searchVal = search.value;
         if(e.key === "Enter"){
            clickable(searchVal);
         }
}) 



clickable("messi");