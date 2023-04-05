// var color = "red";

// if(color == "red"){
//    console.log("Don't cross the road or you will die");
// }
// else if(color == "green"){
//    console.log("Now you can go");
// }
// else if(color == "yellow"){
//    console.log("Stop there");
// }
// else{
//     console.log("Nothing to do");
// }



// var array = [25,84,396,15,28,96,74,55,32];

// for(var i=0; i<array.length; i++){
//     var mark = array[i];
//     console.log(mark);
// }




// var students = {
//     name : "kabir",
//     age : 25,
//     color : "brown",
//     id : 102546,
//     weight : "65kg",
//     height : 6.0,
// }

// var keys = Object.keys(students);
// var values = Object.values(students);

// for(var lvl=0; lvl<keys.length; lvl++){
//     var mark = keys[lvl];
//     var val = students[mark];
//     console.log(mark, val);
// }



// function getSum(num){
//     var airi = [];
//     for(var i=0; i<num.length; i++){
//        var noss = num[i];
        
//        if(noss%2 == 0){
//          console.log("toss it", noss);
//          airi.push(noss);
//        }
//     }
//     return airi;
// }
// var array = [25,14,38,95,72,65,13,85];
// var leg = getSum(array);
// console.log(leg);




// function lovely(eye){
//      switch(eye){
//          case 'wheat':
//             console.log("This is use for roti");
//          break;
//          case 'corn':
//             console.log("This is use for ramen");
//          break;
//          case 'sugar':
//             console.log("This is use for sorbot");
//          break;
//          case 'gaja':
//             console.log("This is use for pinic");
//          break;
//          default:
//             console.log("moira ja");
//      }
// }
// lovely("rice");



// function temperatureConverter(temp) {
//     var celcius = (temp - 32)/1.8
//     return celcius;
//   }
//   var heat = temperatureConverter(103);
//   console.log(heat.toFixed(2));


// function findGrade(marks){

//     if(marks >= 80){
//        return "I achieve A grade mark"
//     }
//     else if(marks >= 60){
//       return "I achieve B grade mark"
//     }
//     else if(marks >= 50){
//       return "I achieve C grade mark"
//     }
//      else if(marks >= 50){
//       return "I achieve D grade mark"
//     }
//     else{
//       return "I achieve F grade mark"
//     }
//   }
//   var mark = 95;
//   var finalResult = findGrade(mark);
// console.log(finalResult);