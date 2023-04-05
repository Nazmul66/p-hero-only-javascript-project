// function alphabet(word){
//     var wordCollect = [];
//    for(let i=0; i< word.length;i++){
//       var point = word[i];
     
//       if(point === "a"){
//         wordCollect.push(point);
//       }
//       else if(point === "k"){
//         wordCollect.push(point);
//       }
//       else if(point === "u"){
//         wordCollect.push(point);
//       }
//       else{
//       }
//    }
//    var rev = wordCollect.reverse();
//    return rev;
// }
// var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var result = alphabet(array);
// console.log(result);


// function alphabet(text){
//     if(text === "a"){
//        return "This is vowel";
//     }
//     else{
//         return "This is consonant";  
//     }
// }
// var word = "a";
// var result = alphabet(word);
// console.log(result);

//////   success   //////
// function reverseString(word){
//     var split = word.split("");
//     var reverse = split.reverse();
//     var join = reverse.join("");
//     return join;
// }
// var string = "GeeksforGeeks";
// var result = reverseString(string);
// console.log(result);

// var shoppingCart = [
//     { name: "Dano Milk", price: 500 }, 
//     { name: "Taaza Tea", price: 200}, 
//     { name: 'Fresh Sugar', price:300}, 
// ]

// function totalCost(products){
//      let money = 0;
//     for(let i=0; i < products.length; i++){
//         var mark = products[i]; 
//      money = money + mark.price;
//     }
//     return money;
// } 
// var result = totalCost(shoppingCart);
// console.log(result);

// function findMax(arr){
//     let based = arr[0];
//   for(let i=0; i<arr.length; i++){
//      var mark = arr[i];
     
//      if(mark > based){
//         based = mark;
//      }
//   }
//   return based;
// }
// let array = [55,10,95];
// let result = findMax(array);
// console.log(result);


// function temperatureConverter(valNum){
//      var celsius = (valNum-32)/1.8;
//      var decimal = celsius.toFixed(2);
//      var strToNum = parseFloat(decimal);
//       return strToNum;
// } 
// var result = temperatureConverter(103);
// console.log(result);


// function average(arrOfMarks){
//     let sum = 0;
//     for(let i=0; i<arrOfMarks.length; i++){
//         let points = arrOfMarks[i];
//       sum = sum + points;
//     }
//     const average = sum/arrOfMarks.length;
//     const shortDecimal = parseFloat(average.toFixed(2));
//     return shortDecimal;
// }
// let num = [75.25, 65, 80, 35.45, 99.50];
// let result = average(num);
// console.log(result);


// function stringCombine(str1, str2){
//     let combineThem = str1 + "" + str2;
//     console.log(combineThem);
// }
// let str1 = "I am going to be";
// let str2 = " an awesome web developer";
// stringCombine(str1, str2);


// function finalScore (scores){
//     let total = 0;
//   for(let i=0; i<scores.length; i++){
//       let mark = scores[i];
//       total = total + mark;
//   }
//   return total;
// }
// let array = [20, 13, 37];
// let result = finalScore(array);
// console.log(result);


// function countZeros(binary_num) {
//     let count = binary_num[1];
//     let array = [];
//    for(let i=0; i<binary_num.length; i++){
//       let point = binary_num[i];
 
//      if(point === count){
//        array.push(point);
//      }
//    }
//    let mark = array.join(""); 
//    const len = mark.length;
//    return len;
//  }
//  var binary = "10101";
//  let result = countZeros(binary);
//  console.log(result);


// function secondLargest(numbers) {
//     let lastLarge = numbers[0];
//     for(let i=0; i<numbers.length; i++){
//       var mark = numbers[i];
    
//       if(mark < lastLarge){
//           lastLarge = mark;
//       }
//     }
//     return lastLarge;
//   }
//   let array = [10,33,5,99,6];
//   const result = secondLargest(array);
//   console.log(result);


function getLetter(s) {
    let letter = "";
     for(var i=0; i<s.length; i++){
       var mark = s[i];
       
       switch(mark){
           case "a":
            letter = letter + mark;
             break;

         default:
       }
     }
    
    return letter.toUpperCase();
}
var string = "adfgt";
var  result = getLetter(string);
console.log(result);


