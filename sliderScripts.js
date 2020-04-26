//variable declarations
var borrowAmt, incomeAmt, vehicleValue, vehicleYear, vehicleMiles, apr, termLength, mnthlyDebtPmtAmt, downPmt, totalDebt, mnthlyPmt, floridaAPR, floridaYear, floridaMiles;
principal=6000;
incomeAmt=17000;
vehicleValue=6000;
vehicleYear=2018;
vehicleMiles=40000;
apr=1.1825;
termLength=72;
mnthlyDebtPayment=50;
downPmt=2000;
floridaAPR=[1.1675, 1.18, 1.1825, 1.2395];
floridaYear=["new", "used", "1or2Years", "overTwoYears", "over4Years"];
floridaMiles=["lowmiles", "mediummiles1", "mediummiles2", "highmiles", "highestmiles"];

//input
var slider = document.getElementById("myRange");
var vehicleAge = document.getElementById("age");
//calc init
var aprLogic = floridaAPR[0];
//output
var dispDiv = document.getElementById("demo");
var dispDiv2 = document.getElementById("totalDebt");
var dispDiv3 = document.getElementById("monthly");
var ageOutput = document.getElementById("ageOutput");
var aprBasedOnAge = document.getElementById("aprBasedOnAge")

//initial calulations
totalDebt = principal*apr;
mnthlyPmt = totalDebt/termLength;

//Results

//chosen principal from slider
setInterval(function() {
  principal = slider.value;
  dispDiv.innerHTML = "Principal amount is: $" + principal;
}, 100)

//calculated total owed
setInterval(function() {
  totalDebt = principal*apr;
  dispDiv2.innerHTML = "Total owed: $" + totalDebt.toFixed(2);
}, 100)

//calculated monthly payment
setInterval(function() {
  mnthlyPmt = totalDebt/termLength;
  dispDiv3.innerHTML = "Monthly payment amount is: $" + mnthlyPmt.toFixed(2);
}, 100)

//output age of vehicle selected
//setInterval(function() {
//  vehicleAgeVar = vehicleAge.value;
//  ageOutput.innerHTML = "Age selected is: " + vehicleAgeVar;
//}, 100)

//output if then calculation based on age -> apr
setInterval(function() {
  vehicleAgeVar = vehicleAge.value;
  try {
    if (vehicleAgeVar = "new"){
      aprLogic = floridaAPR[0];
    }
    else if (vehicleAgeVar = "used"){
      aprLogic = floridaAPR[1];
    }
    else if (vehicleAgeVar = "1or2Years"){
      aprLogic = floridaAPR[2];
    }
    else if (vehicleAgeVar = "over2Years"){
      aprLogic = floridaAPR[3];
    }
    else if (vehicleAgeVar = "over4Years"){
      aprLogic = floridaAPR[4];
    }
    else {
      aprLogic = floridaAPR[0];
    }
  }
    finally {
      aprBasedOnAge.innerHTML = "APR based on age is: " + aprLogic;
    }
}, 100)
