var birthDate = document.querySelector("#birthDate");
var luckyNumber = document.querySelector("#luckyNumber");
var btnCheck = document.querySelector("#btnCheck");
var output = document.querySelector("#output");

function sumOfDate(year, month, day){
    var sum =0;
while(year>0){
    sum+=year%10;
    year=Math.floor(year/10);
}
while(month>0){
    sum+=month%10;
    month= Math.floor(month/10);
}
while(day>0){
    sum+=day%10;
    day= Math.floor(day/10);
}
return sum;
}

function ClickEventListener(){

var birthdate = birthDate.value;
var first = birthdate.indexOf("-");
var second = birthdate.lastIndexOf("-");
var year = birthdate.substring(0,first);
var month = birthdate.substring(first+1, second);
var day = birthdate.substring(second+1,10);

var sum = sumOfDate(year, month, day);


if(sum==luckyNumber.value){
    console.log("lucky Date");
    console.log(sum + " " + luckyNumber.value);
    output.innerText = "Yayy!! Your birthdate is lucky for you...!!";
}
else {
    console.log("unlucky");
    console.log(sum + " " + luckyNumber.value);
    output.innerText = "Alas!! Your birthdate doesnot align with your lucky number, but still it is a lucky number as on this day only you came into this world...!!";
}
}

btnCheck.addEventListener("click",ClickEventListener);

/*
process of how i got the date in integr format :
// // console.log(typeof birthDate.value);
//  console.log(birthDate.value);
// // console.log(luckyNumber.value);
// var year =  birthDate.value.substring(0,4);
// var month = birthDate.value.substring(5,7);
// var date = birthDate.value.substring(8,10);
// // console.log(year);
// year = parseInt(year);
// // console.log(typeof year);
// // console.log(year+10);
// console.log(month + " " + date);
*/