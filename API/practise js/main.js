// question 1 answer -----

// var harryMother = 1000;
// var orange = 400;
// var apple = 300;

// var cost = orange + apple;
// console.log(cost);

// var lol = harryMother - cost;
// console.log(lol);

// question 2 answer -----

// var math = 75.25;
// var bio = 65;
// var chemistry = 80;
// var phy = 35.45;
// var bangla = 99.50;

// var totalMark = math + bio + phy + bangla + chemistry;
// console.log(totalMark);

// var devide = totalMark / 5;
// var decimel = devide.toFixed(2);
// console.log(decimel);

// question 3 answer -----

// var input = 119;
// var devider = 5;

// var deviding = input % devider;
// console.log(deviding);

// question 4 answer -----

// var fruits = ['apple','Banana','Orange'];
// var banana = fruits.indexOf('Banana');

// fruits[1]= 'Mango';
// fruits.pop();
// fruits.push('Watermelon');
// console.log(fruits);

// question 5 answer -----

// var num1 = 9;
// var num2 = 8;
// var num3 = 9;

// if(num1 == num2 || num1 == num3 || num2 == num3){
//    console.log("isoloate");
// }
// else{
//     console.log("not isoloate");
// }





// var amount = [20,25,41,19,82,10,133,20,41];


// for(var i=0; i<amount.length; i++){
//     var num = amount[i];

//     if(num > 40){
//         break;
//     }
//     console.log(num); 
    
// }

// var items = ["bottle","glass","base","sunglass","notebook","Rose"];

// for(var i=0; i<= items.length; i++){
//      var item = items[i];
//      if(item == "sunglass"){
//         break;
//      }
//      console.log(item);
  
// }

// for(var i=0; i<=20; i++){
    
//     if( i >= 10){
//       break;
//     }
//     console.log(i);
// }

// var amount = [20,25,41,19,82,10,133,20,41];

// var i=0;
// while( i<amount.length){
//     var num = amount[i];
//         i++;

//     if(num > 40){
//         continue;
//     }
//     console.log(num); 
// }


// function foo(){
    
//      function bar(tex){
//         return tex;
//      }
//     var text = bar(12);
//     console.log(text);
// }
// foo();

// function make_avg(point1, point2, point3){

//     var total = point1 + point2 + point3;
//     var average = total / 3;
//     return average;

// }
// var big_avg = make_avg(12,28,19);
// console.log(big_avg.toFixed(2));




// function odd_even(num){
   
//     if(num === 1){
//         return "This num false1";
//     }
//     else if(num === 3){
//         return "This num false3";
//       }
//       else if(num === 5){
//         return "This num false5";
//       }
//       else if(num === 7){
//         return "This num false7";
//       }
//       else if(num === 9){
//         return "This num true";
//       }
//       else if(num === 11){
//         return "This num false11";
//       }
//       else if(num === 13){
//         return "This num false13";
//       }
//       else{
//         return "This num main-false";
//       }

// }
// var odd = odd_even(5);
// console.log(odd);


// function colors(road){
//     if(road === "green"){
//        return "Now you can cross the road";
//     }
//     else if(road === "yellow"){
//         return "Stop there, Don't cross it";
//      }
//      if(road === "red"){
//         return "Don't cross the road or you will die";
//      }
//      else{
//         return "stand there boy";
//      }
// }
// var signal = "red";
// const sample = colors(signal);
// console.log(sample);


////////// hardcore loops //////////

// function totalSum(tax1){
//      var main = 0;    
//     for(let i=0; i<tax1.length; i++){
//        const points = tax1[i];
//        main += points; 
//     }
//     return main;
// }
// const array1 = [22,54,29,38,77,55,109,100,80];



// function getSum(tax){
//     const line = [];
//    for(let i=0; i<tax.length; i++){
//        var count = i;
//        var mark = tax[count];

//        if(mark%2 !== 0){
//           line.push(mark);
//        }
//    }
//    return line;
// }

// const array = [15,28,71,35,26,60,111,35];
// const result = getSum(array);
// console.log(result);
// const fullMarks = totalSum(result);
// console.log(fullMarks);


