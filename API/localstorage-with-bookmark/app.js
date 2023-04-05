const loadProduct = () => {
     fetch("./product.json")
    .then((response) => response.json())
    .then((data) => displayProduct(data));
};

const displayProduct = (data) => {
  const cards = document.getElementById("cards");
  // new added
  cards.innerHTML = "";
  data.forEach((product) => {
    // console.log(product)

    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    const isBooked = bookmarkCheck(product.id);
    // console.log(isBooked);

    card.innerHTML = `
          <div class="bookmark-icon"> 

         
          ${isBooked ?  `<i onclick="removeStorageItem(${product.id})" class="fa-solid fa-bookmark"></i>` : `<i onclick="localStorageItem(${product.id},'${product.name}', '${product.category}', '${product.price}')" class="fa-regular fa-bookmark"></i>`}

        </div>

        <div class="product-img-container">
          <img
            class="product-img"
            src=${product.image}
            alt=""
          />
        </div>
        <h3>${product.name}</h3>
        <p>The Widget 3000 is the latest and greatest in widget</p>
        <div class="priceAndButtons">
          <h2 class="text-primary">$${product.price}</h2>
          <button class="btn btn-primary">Buy Now</button>
        </div>
          `;
    cards.appendChild(card);
  });
};


function localStorageItem(id , name, category, price){
    const getPreviousItem = JSON.parse(localStorage.getItem("bookmark"));

    const product = {id, name, category, price};
    let bookmark = [];

    if(getPreviousItem){
       const isThisGetPreviousItem = getPreviousItem.find((pd) => pd.id == id);
        
       if(isThisGetPreviousItem){
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Already bookmarked !',
          footer: '<a href="">Why do I have this issue?</a>'
        })
       }
       else{
        bookmark.push(...getPreviousItem,product);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        loadProduct();
       }
    }
    else{
       bookmark.push(product);
       localStorage.setItem("bookmark", JSON.stringify(bookmark));
       loadProduct();
    }
}

function removeStorageItem(id){
    const getPreviousItem = JSON.parse(localStorage.getItem("bookmark"));

    const restOfThem = getPreviousItem.filter(product => product.id != id);
    localStorage.setItem("bookmark", JSON.stringify(restOfThem));
    loadProduct()
}


function bookmarkCheck (id){
   const getPreviousItem = JSON.parse(localStorage.getItem("bookmark"));

   const findProduct = getPreviousItem?.find(pd => pd.id == id);
   if(findProduct){
      return true;
   }
   else{
     return false;
   }
}

loadProduct();



{/* <i onclick="${isBooked ? `removeStorageItem(${product.id})`: `localStorageItem(${product.id},'${product.name}', '${product.category}', '${product.price}')`}" class="${isBooked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}"></i> */}