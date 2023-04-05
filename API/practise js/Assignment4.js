
// Problem 1: This function is used for about calculate multiply, plus, division and minus then it will return the value.
function mindGame(number){
   if(typeof number !== "number"){
      return "you should set this number type parameter";
   }
   else{ 
      const multiplyResult = number * 3;
      const plusResult = multiplyResult + 10;
      const divisionResult = plusResult / 2;
      const minusResult = divisionResult - 5;
      return minusResult;
   } 
}
let result1 = mindGame(33);
console.log(result1);


// Problem 2: this function declare the string length is even or odd to find out which one is this.
function evenOdd(name){
    let stringLength = name.length;

   if(typeof name !== "string"){
       return "This parameter should be string";
   }
   else{
      if(stringLength %2 === 0){
         return 'even';
      }
      else{
          return 'odd';
       }
   }   
}
let string = "Batch7";
const result2 = evenOdd(string);
console.log(result2);


// problem 3: This function is delivered the numbers compare the number value.  
function isLGSeven(numbers){
   let totalNumber = numbers - 7;

   if(typeof numbers !== "number"){
       return "you should put this parameter in number";
   }
   else{
      if(totalNumber >= 7){
         return numbers * 2;
      }
      else if(totalNumber <= 7){
         return totalNumber;
      }
   }
}
const result3 = isLGSeven(50);
console.log(result3);


// problem 4: This function is find the badData which numbers are lessThan 0 and to collect & count them. 
function findingBadData(data){
   let arrayCheck = Array.isArray(data);
     if(arrayCheck !== true){
        return "This should been an array";
     }
     else{
         let badData = [];
         for(let i=0; i<data.length; i++){
            let allData = data[i];
            
            if(allData < 0){
                  badData.push(allData);
            }
         }
         const result = badData.length;
         return result;
     }  
}
let array =[2, -5, -7, -13, -92];
const result4 = findingBadData(array);
console.log(result4);


// problem 5: gemsToDiamond functions are compare 3 parameters then each other summation then compare the which property are greaterThan or lessThen value. 
function gemsToDiamond(data1, data2, data3){
      const firstGem = data1 * 21;
      const secondGem = data2 * 32;
      const thirdGem = data3 * 43;
      let totalGem = firstGem + secondGem + thirdGem;

       if(typeof data1 !== "number" || typeof data2 !== "number" || typeof data3 !== "number"){
          return "3 parameter are should be in numbers and none of them will string or anything";
       }
       else{
         if(totalGem >= (1000*2)){
            return (totalGem - 2000);
         }
         else if(totalGem <= (1000*2)){
             return totalGem;
         }  
       }  
}
const result5 = gemsToDiamond(20, 200, 50);
console.log(result5);