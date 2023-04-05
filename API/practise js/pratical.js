// const obj = {
//     name: "kola",
//     address: "k-39/5, kuril",
//     time: "6pm",
//     money: 50,
// }
// const result = `we see the suspect ${obj.name} card and street ${obj.address}`;
// console.log(result)

// const divided = num => num / 5;
// const result = divided(55);
// console.log(result)

// const divided = (a,b) => {
//     const totalDiv = a * b * c;
//     return totalDiv;
// }
// const result = divided(5,7,9);
// console.log(result);


// const array = [25,14,37,51,68,95,42,54];
// const result = array.map(num => num*5);
// console.log(result);

// const array = [25,14,-5,37,51,-15,68,95,-52,42,54]
// const result = array.filter(num => num < 0);
// console.log(result);

// const obj = [
//     {name: "laptop",  price: 50000},
//     {name: "mobile",  price: 25000},
//     {name: "hand-set",  price: 5000},
//     {name: "freeze",  price: 65000},
// ]
// const find = obj.find(num => num.price == 5000);
// console.log(find);
    
// const array = [25,14,-5,37,51,-15,68,95,-52,42,54]
// const [first, second, ...three] = array;
// console.log(first);
// console.log(second);
// console.log(...three);


// function getNum(a, b, c = 7){
//     const total = a + b + c;
//     return total;
// }
// const result = getNum(7,8);
// console.log(result)

// const object = {
//     name: "nazmul",
//     location: "k-39/5, kuril",
//     street: "dhaka",
//     food:{
//         grocery: "baby food",
//         perishable: "vegetables",
//         all:{
//             call: "01833220886",
//             array: [25,14,35,28,94,62,71],
//         }
//     }
// }
// const find = object.food.all.array;
// console.log(find);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => getResource(data))

// function getResource(item){
//     const tit = document.getElementById("title");
//    for(let items of item){
//        console.log(items);
//        const div = document.createElement("div");
//        div.classList.add("item-sold")
//        div.innerHTML = `
//          <h3>${items.id}</h3>
//          <h3>${items.userId}</h3>
//          <p>${items.body}</p>
//        `
//        tit.appendChild(div);
//    }
// }




