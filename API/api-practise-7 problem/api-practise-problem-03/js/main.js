

// const selector = document.getElementById("selector");
// const val = document.getElementsByClassName("val");
// for(const value of val){
//   console.log(value)
//     value.addEventListener("click", function(e){
//         console.log(e.target,"hello");
//     })
// }

const apiFile = async(link) =>{
     const url = `https://restcountries.com/v3.1/region/europe`;
     const res = await fetch(url);
     const data = await res.json();
     fileData(data);
}

const fileData = (file) =>{
    // console.log(file);
    const cards = document.getElementById("cards");
     file.forEach(element => {
        console.log(element);  
        const createDiv = document.createElement("div");
        createDiv.classList.add("col-lg-4","mb-2");
        createDiv.innerHTML = `
        <div class="card px-3 pt-3">
            <img src="${element.flags.png}" class="d-block mx-auto image-size" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name.common}</h5>
                <p class="card-text">capital: ${element.capital[0]}</p>
                <p>region: ${element.region}</p>
                <p>weekStart: ${element.startOfWeek}</p>
                <p>population: ${element.population}</p>
            </div>
        </div>
        `;
        cards.appendChild(createDiv);
    });
}

apiFile();