//variable declarations
var borrowAmt, incomeAmt, vehicleValue, vehicleYear, vehicleMiles, apr, termLength, mnthlyDebtPmtAmt, downPmt, totalDebt, mnthlyPmt, floridaAPR, floridaYear, floridaMiles, maxTermLength;
principal=6000;
incomeAmt=17000;
vehicleValue=6000;
vehicleYear=2018;
vehicleMiles=40000;
apr=1.1825;
termLength=72;
mnthlyDebtPayment=50;
downPmt=2000;
var vehicleAgeVar = "new";

floridaAPR=[1.1675, 1.18, 1.1825, 1.2395];
floridaYear=["new", "used", "1or2Years", "overTwoYears", "over4Years"];
floridaMiles=["lowmiles", "mediummiles1", "mediummiles2", "highmiles", "highestmiles"];
//<50K miles (lowmiles) -> up to 72 months, 66 months, 60 months, 54 months, n/a
maxTermLengthCars=[72, 66, 60, 54];
//50K-100K are both 66 months (medium1 and 2)
maxTermLengthTrucks=[72, 66, 60, 54];


//input
var slider = document.getElementById("myRange");
var vehicleAge = document.getElementById("age");
var vehicleMilesRead = document.getElementById("miles");
var vehicleType = document.getElementById("vehType")
var termLengthLimit = document.getElementById("termInput")
//calc init
var aprLogic = floridaAPR[0];
var termLogicCars = maxTermLengthCars[0];
var termLogicTrucks = maxTermLengthTrucks[0];
var termLogicResult = 72;
var vehicleTypeCalc = "car";
//output
var dispDiv = document.getElementById("demo");
var dispDiv2 = document.getElementById("totalDebt");
var dispDiv3 = document.getElementById("monthly");
var ageOutput = document.getElementById("ageOutput");
var aprBasedOnAge = document.getElementById("aprBasedOnAge");
var maxTermDisp = document.getElementById("term");
var vehicleTypeDisp = document.getElementById("type")
var vehicleMilesDisp = document.getElementById("milesOut")

//initial calulations
var mnthlyPmt1 = (aprLogic-1)/12;
var mnthlyPmt2 = 1 + mnthlyPmt1;
var mnthlyPmt3 = Math.pow(mnthlyPmt2, termLengthLimit.value);
var mnthlyPmt4 = principal*mnthlyPmt1;
var mnthlyPmt5 = mnthlyPmt3-1;
mnthlyPmt = mnthlyPmt4*mnthlyPmt3/mnthlyPmt5;

termLengthLimit.value = termLogicResult;

//Results...

//chosen principal from slider
setInterval(function() {
  principal = slider.value;
  dispDiv.innerHTML = "Principal amount is: $" + principal;
}, 100)

//calculated monthly payment
setInterval(function() {
  var mnthlyPmt1 = (aprLogic-1)/12;
  var mnthlyPmt2 = 1 + mnthlyPmt1;
  var mnthlyPmt3 = Math.pow(mnthlyPmt2, termLengthLimit.value);
  var mnthlyPmt4 = principal*mnthlyPmt1;
  var mnthlyPmt5 = mnthlyPmt3-1;
  mnthlyPmt = mnthlyPmt4*mnthlyPmt3/mnthlyPmt5;
  dispDiv3.innerHTML = "Monthly payment amount is: $" + mnthlyPmt.toFixed(2);
}, 100)

//apr based on age of vehicle
setInterval(function() {
  vehicleAgeVar = vehicleAge.value;
    if (vehicleAgeVar == "new"){
      aprLogic = floridaAPR[0];
    }
    else if (vehicleAgeVar == "used"){
      aprLogic = floridaAPR[1];
    }
    else if (vehicleAgeVar == "1or2Years"){
      aprLogic = floridaAPR[2];
    }
    else if (vehicleAgeVar == "over2Years"){
      aprLogic = floridaAPR[3];
    }
    else if (vehicleAgeVar == "over4Years"){
      aprLogic = floridaAPR[3];
    }
    else {
      aprLogic = floridaAPR[0];
    }
  aprBasedOnAge.innerHTML = "Maximum APR based on vehicle age is: " + ((aprLogic-1)*100).toFixed(2) + "%";

}, 100)

//term length based on vehicle miles
setInterval(function() {
  vehicleMilesCalc = vehicleMilesRead.value;
  vehicleTypeCalc = vehicleType.value;
  //if car
    if (vehicleMilesCalc == "lowmiles" && vehicleTypeCalc == "car"){
      termLogicResult = maxTermLengthCars[0];
    }
    else if (vehicleMilesCalc == "mediummiles1" && vehicleTypeCalc == "car"){
      termLogicResult = maxTermLengthCars[1];
    }
    else if (vehicleMilesCalc == "mediummiles2" && vehicleTypeCalc == "car"){
      termLogicResult = maxTermLengthCars[2];
    }
    else if (vehicleMilesCalc == "highmiles" && vehicleTypeCalc == "car"){
      termLogicResult = maxTermLengthCars[3];
    }
    else if (vehicleMilesCalc == "highestmiles" && vehicleTypeCalc == "car"){
      termLogicResult = maxTermLengthCars[3];
    }
  //if truck
    else if (vehicleMilesCalc == "lowmiles" && vehicleTypeCalc == "truck"){
      termLogicResult = maxTermLengthTrucks[0];
    }
    else if (vehicleMilesCalc == "mediummiles1" && vehicleTypeCalc == "truck"){
      termLogicResult = maxTermLengthCars[1];
    }
    else if (vehicleMilesCalc == "mediummiles2" && vehicleTypeCalc == "truck"){
      termLogicResult = maxTermLengthCars[1];
    }
    else if (vehicleMilesCalc == "highmiles" && vehicleTypeCalc == "truck"){
      termLogicResult = maxTermLengthCars[2];
    }
    else if (vehicleMilesCalc == "highestmiles" && vehicleTypeCalc == "truck"){
      termLogicResult = maxTermLengthCars[3];
    }
    else {
      termLogicResult = 72;
    }
  maxTermDisp.innerHTML = "Max term based on vehicle type and miles: " + termLogicResult;
  termLengthLimit.max = termLogicResult;
  termLengthLimit.min = 1;
  if (termLengthLimit.value > termLogicResult){
    termLengthLimit.value = termLogicResult;
  }
}, 100)
