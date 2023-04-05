
// const array = [25,18,35,48,95,27,36];
// const minimum = Math.min(...array);
// console.log(minimum);

// const array = [25,18,35,48,95,27,36];
// const array2 = [...array];
// array.push(52);
// array2.push(99);
// console.log(array,array2);


// const array = [25,18,35,48,95,27,36];
// const [first,second,...remain] = array;
// console.log(first,second,remain);

// const obj = {
//     name : "kola",
//     time: "9:00",
//     sub: "marketing",
// }
// const {name} = obj;
// console.log(name);

// const array = [25,18,35,48,95,27,36];
// // const double = array.map(num => num * 2);
// // console.log(double);

// const obj = [
//     {id: 1, name: "laptop", Price: 45000},
//     {id: 2, name: "mobile", Price: 25000},
//     {id: 3, name: "desktop", Price: 30000},
//     {id: 4, name: "tablet", Price: 58000},
// ];
// const find = obj.map(num => num.name);
// console.log(find); 


// class inheritance
// class SameText{
//      name;
//      location;
//      constructor(nam, jayga){
//         this.name = nam;
//         this.location = jayga;
//      }
//      everySingle(norm){
//         console.log(`valentine day is ${norm}`);
//     }
// }

// class Moderator extends SameText{
//     address = "k-39/5";
//     tech;
//     constructor(nam, jayga, team){
//        super(nam, jayga);
//        this.tech = team;
//     }
//     crackerzSession(boom){
//         console.log(`Have a seen you for days ${boom}`);
//     }
// }
// const item = new Moderator("amir", "dinajpur", "team member");
// console.log(item);
// item.crackerzSession("ago");
// item.everySingle("sucks");



// class Instructor extends SameText{
//     address = "k-39/5";
//     constructor(nam, jayga){
//         super(nam, jayga);
//     }
//     supportSession(title){
//         console.log(`Have a seen you for days ${title}`);
//     }

// }
// const items = new Instructor("sakib", "dhaka");
// console.log(items);
// items.supportSession("ago");
// items.everySingle("sucks");