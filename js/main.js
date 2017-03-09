input=0;
output = 0;
idealSaving = 0;
change = input-output;
i=0;
sumIn=0;
sumOut=0;
function Saving () {
  idealSaving = document.getElementById("saving").value;
  document.getElementById("show-ideal-saving").innerHTML = "The money you want to save is:  " + idealSaving;
}
  function inCome () {
    input = new Array();
    input[i]= document.getElementById("income").value;
    sumIn= Number(input[i]) + Number(sumIn);
    i++;
  document.getElementById("show-income-value").innerHTML= "Your incoming money is: " + sumIn ; 
}
function outGo() {
  output = new Array();
  output[i] = document.getElementById("outgo").value;
  sumOut = Number(output[i]) + Number(sumOut);
  i++;
  document.getElementById("show-outgo-value").innerHTML= "Your outgo money is: " + sumOut;
}
function Compare () {
    change = sumIn - sumOut;
    if (change > 0)
      // window.alert("You spend less than you earn!");
      //document.write("You spend less than you earn!");
      document.getElementById("compare-the-values").innerHTML = "(" + change + "):" + " You spend less than you earn! Good For you";
    else if (change < 0)
         document.getElementById("compare-the-values").innerHTML = "(" + change + "):" + " You spend more money than you make!";
    else 
         document.getElementById("compare-the-values").innerHTML = "(" + change + "):" + " You Spend all the money you make!";
}
function saveMoney () {
  if (change > idealSaving)
    window.alert("You can save some money. You can save: " + change);
  else 
    window.alert("You don't have enough money to save");
}