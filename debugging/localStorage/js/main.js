const btnClicked = () =>{
    const property = document.getElementById("property");
    const values = document.getElementById("values");
    const propertyVal = property.value;
    const valuesVal = values.value;
    property.value = "";
    values.value = "";
    getDataStore(propertyVal, valuesVal);
    storageData(propertyVal, valuesVal);
}

const getDataStore = (property, value) =>{
    const data = document.getElementById("data");
    const li = document.createElement("li");
    li.innerHTML = `${property} : ${value}`;
    data.appendChild(li);
}

const getDataStorageItem = () =>{
    let cart = {};
    const getData = localStorage.getItem("cart");
    if(getData){
        cart = JSON.parse(getData);
    }
    return cart;
}

const storageData = (propertyVal, valuesVal) =>{
   const cartVal = getDataStorageItem();
   cartVal[propertyVal] = valuesVal;
   const cartStringify = JSON.stringify(cartVal);
   console.log(cartStringify);
   localStorage.setItem("cart", cartStringify);
}