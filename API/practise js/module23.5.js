

//1)  feet to inch

function feetToInch(convertInch){

    let inch = 12;
    let convertFeetToInch = convertInch * inch;
    return convertFeetToInch;

}
var feet = 4;
var result = feetToInch(feet);
console.log(result);


//2)  centimeter to meter

function centimeterToMeter(convertMeter){

    let meter = 0.01;
    let convertCentimeterToMeter = convertMeter * meter;
    return convertCentimeterToMeter;

}
var centimeter = 8;
var result1 = centimeterToMeter(centimeter);
console.log(result1);

//3)  use 3 parameter to get total books pages total

function paperRequirements(page1, page2, page3){
    let book1 = 100 * page1;
    let book2 = 200 * page2;
    let book3 = 300 * page3;

    let total = book1 + book2 + book3;
    return total;
}

var result2 = paperRequirements(5, 2, 9);
console.log(result2);

//4) find his bestFriend who has biggest name

var friends = ["sajid", "jubayer bin rased", "mamuns", "kamal", "chinku"];

function bestFriend(findFriend){
     let based = findFriend[0];
     for(var i=0; i < findFriend.length; i++){
        var mark = findFriend[i];

        if(mark.length > based.length){
             based = mark;
        }
     }
     return based;
}
var result3 = bestFriend(friends);
console.log(result3);


// 5) when negative position goes then the loop will stop

function onlyPositive(numbers){
    let collectedPoint = [];
    for(var i=0; i < numbers.length; i++){
         var point =numbers[i];
       
         if(point <= 0 ){
            break;
         }
         else{
            collectedPoint.push(point);
         }
    }
    return collectedPoint;
}
var num = [45, 87, 96, 11, 63, -56, 71, 28];
var result4 = onlyPositive(num);
console.log(result4);