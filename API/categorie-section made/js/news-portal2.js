
const loaded = () =>{
fetch(`https://openapi.programming-hero.com/api/news/categories`)
.then(res => res.json())
.then(data => categories(data.data));
}

const categories = (data) =>{
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(elements => {
     const linkContainer = document.createElement("p"); 
     linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="categoriesClick('${elements.category_id}', '${elements.category_name}')">${elements.category_name}</a>`;
     categoriesContainer.appendChild(linkContainer);
    });
}
// get data on array
let fetchData = [];

const categoriesClick = (items, category_name) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${items}`;
    fetch(url).then(res => res.json())
    .then(data =>{
        // here is the array carrying data
        fetchData = data.data;
        cleanData(data.data, category_name);
    });   
}

const cleanData = (dataInfo, category_name) =>{
    const allNews = document.getElementById("all-news");
    allNews.innerHTML = '';
    document.getElementById("news-count").innerText = dataInfo.length;
    document.getElementById("category-name").innerText = category_name;

    dataInfo.forEach(everyNews =>{
        const {image_url, title, details, total_view, author, rating, _id} = everyNews;
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `<div class="row g-0">
        <div class="col-md-4">
            <img src="${image_url}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text"> ${details.slice(0, 300) + " ..."}</p>
            </div>

            <div class="card-footer border-0 bg-body d-flex justify-content-between">
              <div class="d-flex gap-2">
                <img src="${author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
              <div>
                <p class="m-0 p-0">${author.name ? author.name : "no name here"}</p>
                <p class="m-0 p-0">${author.published_date ? author.published_date : "major error problem"}</p>
              </div>
            
            </div>
            <div class="d-flex align-items-center">
            <i class="fas fa-eye"></i>
            
            <p class="m-0 p-0">${total_view}</p>
            </div>
            <div class="d-flex gap-2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>
            
            <p>${rating.number}</p>
            </div>
            <div>
            
            <i class="fas fa-arrow-right" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onclick="openModal('${_id}')"></i>
            </div>
            </div>
         </div>
        </div>`;
        allNews.appendChild(card);
    });
}

const openModal = (clickFile) =>{
    fetch(`https://openapi.programming-hero.com/api/news/${clickFile}`)
    .then(res => res.json())
    .then(data => modalDiv(data.data[0]));
}

const modalDiv = modalData =>{
    console.log(modalData);
    const {author, details, image_url, total_view, title, others_info} = modalData;
    document.getElementById("modal-body").innerHTML = `
    <div class= "card mb-3">

    <div class="row g-0">
      <div class="col-md-12">
        <img src="${image_url}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-12 d-flex flex-column">
        <div class="card-body">
          <h5 class="card-title">${title}<span class="badge text-bg-warning">
          ${others_info.is_trending ? "Trending" : "No trending"}</span></h5>
          <p class="card-text"> ${details ? details.slice(0, 350) + " ..." : "no bio here"}</p>
          
        </div>
        <div class="card-footer border-0 bg-body d-flex justify-content-between">
          <div class="d-flex gap-2">
          <img src="${author.img}" class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
          <div>
          <p class="m-0 p-0">${author.name}</p>
          <p class="m-0 p-0">${author.published_date}</p>
          </div>
          
          </div>
          <div class="d-flex align-items-center">
              <i class="fas fa-eye"></i>       
              <p class="m-0 p-0">${total_view}</p>
          </div>
          <div>
              <i class="fas fa-star"></i>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    `;
}

// critical to know, practice more and more
const trendy = ()=>{
    const mainData = fetchData.filter(apiData => apiData.others_info.is_trending === true);
    const categoryName = document.getElementById("category-name").innerText;
    cleanData(mainData, categoryName);
}