
// function tallest(tax){
//     var array = tax[0];
//     for(var i=0; i<tax.length; i++){
//        var mark = i;
//        var point = tax[mark];

//        if(point > array){
//             array = point;
//        }
//     }
//     return array;
// }
// var tallArray = [165,174,125,140,190,147];
// var result = tallest(tallArray);
// console.log(result);



// function sting(tax){
//     var array = "";
//     for(var i=tax.length-1; i>=0; i--){
//        var char = tax[i];
       
//       array = array + char;
//     }
//    return array;
// }
// var string = "i am very good student";
// var str = sting(string);
// console.log(str);



// function sting(tax){
//     var hash = tax.split(" ");
//     var array = [];
//     for(var i=hash.length-1; i >= 0; i--){
//       var sep = hash[i];
      
//       array.push(sep);
//     }
//     var joined = array.join(" ");
//     return joined;
// }
// var students = "i am very glad to see you";
// var result = sting(students);
// console.log(result);


// var short = [0,1];

// for(var i=2; i<10; i++){
//    short[i] = short[i-1] + short[i-2];
// }
// console.log(short);


// var array = [12,25,58,49,63,71,55,11,77,33];

// // var slice = array.slice(2,5);
// var slice = array.splice(2,5,72,90);
// console.log(slice, array);


// var array = ["abul","rahul","kabir","rashed","abul","bokul",
//             "rambo","rahul","bulbul","kabir","rashed","nasim","korshed"];

// function remDuplicate(tax){
//        var serial = []; 
//       for(var i=0; i< tax.length; i++){
//           var count = tax[i];
//         if(serial.includes(count) === false){
//             serial.push(count);
//         }
//       }
//       return serial;
// }
// var result = remDuplicate(array);
// console.log(result);


    // for(var i=1 ; i<=50; i++){
    //   if(i %3 == 0 && i %5 == 0){
    //      console.log("foo & bar");
    //     }
    //   else if(i %3 === 0){
    //     console.log("foo");
    //   }
    //   else if(i %5 === 0){
    //     console.log("bar");
    //   } 
    //   else{
    //     console.log(i);
    //   }
    // }


// function sum(table, bed, chair){
//     var needTableWood = 8 * table;
//     var needBedWood = 12 * bed;
//     var needChairWood = 4 * chair;

//     var totalSum = needBedWood + needChairWood + needTableWood;
//     return totalSum;
// }
//  var result = sum(2,9,5);
// console.log(result);

