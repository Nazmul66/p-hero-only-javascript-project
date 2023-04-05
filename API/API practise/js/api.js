


fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => allData(data));

const allData = (data) => {
    const call = document.getElementById("property");
    for(let datas of data){
      // console.log(datas);
     const div = document.createElement("div");
     div.classList.add("active");
     div.innerHTML = `
         <h3>capital: ${datas.altSpellings[1]}</h3>
         <p>title: ${datas.cca2}</p>
         <button onclick="clickable('${datas.cca2}')">Click me</button>
     `
     call.appendChild(div);
    }
}

const clickable = (click) => {
   const url = `https://restcountries.com/v3.1/alpha/${click}`;
   fetch(url)
   .then(res => res.json())
   .then(data => loadData(data))
} 

const loadData = (date) => {
   console.log(date[0] );
   const val = document.getElementById("value");
   val.innerHTML = `
       <h3>title: ${date[0].continents[0]}</h3>
       <img src="${date[0].flags.png}" alt="">
   `
}