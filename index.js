//  function generateotp(){
//  var num='vvfgc@1123';
// var otp='';
// var len=num.length;
// for(i=0; i<=3; i++){
//     otp += num[Math.floor(Math.random()*10)]
// }
// console.log(otp)
// alert(`OTP valid for 50 sec--- The OTP is ${otp}`)
//  }

var kms=prompt("enter kms in number");
var modeoftransport=prompt("enter car/auto/bike").toLowerCase();
if(modeoftransport==="car"){
    var cost=kms*45;
    document.write(`Dear customer as you opted ${modeoftransport} your travel cost will be ${cost}`)
}

if(modeoftransport==="auto"){
    var costa=kms*35;
    document.write(`Dear customer as you opted ${modeoftransport} your travel cost will be ${costa}`)
}

if(modeoftransport==="bike"){
    var costb=kms*25;
    document.write(`Dear customer as you opted ${modeoftransport} your travel cost will be ${costb}`)
}