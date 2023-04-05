
const menuFile = (network) =>{
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${network}`)
.then(res => res.json())
.then(data => menuData(data.meals));
}

const menuData = (menu) => {
   const body = document.getElementById("body");
   body.innerHTML = "";
   for(let del of menu){
      // console.log(del);
      const create = document.createElement("div");
      create.innerHTML = `
      <div class="col">
         <div class="card h-100">
               <img src="${del.strMealThumb}" class="card-img-top" alt="">
               <div class="card-body">
                  <h5 class="card-title">${del.strMeal}</h5>
                  <p class="card-text">${del.strYoutube}</p>
                  <button onclick="mealFind2(${del.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealId">details</button>
               </div>
         </div>
      </div>
      `;
      body.appendChild(create);
   }
}

// search area
const searchArea = () =>{
   const input = document.getElementById("inputs");
   const inputValue = input.value;
   input.value = "";
   menuFile(inputValue);
}

// const mealFind = (target) =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${target}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => findAllData(data.meals[0]))
// }

const mealFind2 = async(target2) =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${target2}`;
   try{
      const res = await fetch(url);
      const data = await res.json();
      findAllData(data.meals[0]);
   }
   catch(error){
      console.log(error);
   }
}

const findAllData = (some) =>{
   console.log(some);
   document.getElementById("mealDetailsLabel").innerText = some.strMeal;
   const modalBody = document.getElementById("petu-bhai");
   modalBody.innerHTML = `
        <img src="${some.strMealThumb}" alt="" class="img-fluid">
        <p>${some.strYoutube}</p>
   `;
}

menuFile("chicken");


