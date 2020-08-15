var formula = "";
var result = "";
var lastOperator = "*";
var lastResult = 1;

function mosDown(x){
  x.style.background = "rgba(142,204,212,0.15)";
  x.style.color = "#C4D8DC";
}
function mosUp(x){
  x.style.background = "rgba(3,45,54,0.3)";
  x.style.color = "#C0F3FF";
}
function displayResult(x){
    result = result + x;
    document.getElementById("result").innerHTML = result;
}
function displayFormula(op){
  let x = document.getElementById("formula");
  if ((formula === "")&&(result === "")){
      x.style.borderBottom = "none";
  } else{
      x.style.borderBottom = "1px solid #014552";
  }
  if(op === ""){
    formula += " " + result;
  } else{
    formula = formula + " "+ result + " "+op;
  }
  x.innerHTML = formula;

}
function getOp(x){
  let op = x.innerHTML;
  if (formula.search(/=/)!==-1){
    formula = "";
    result = lastResult;
    lastResult = 0;
    lastOperator = "+";
  }
  if(isSignOfNum(op)){
    displayResult(op);
  } else{
    solving(lastResult, lastOperator, result);
    lastOperator = op;
    displayFormula(op);
    result = "";
    displayResult("");
  }
}


function getNum(x){
  if (formula.search(/=/)!==-1){
    cE();
  }
  let num = x.innerHTML;
  displayResult(num);
}
function getDot(){
  if (formula.search(/=/)!==-1){
    cE();
  }
  displayResult(".");
}

function del(){
  let x = document.getElementById('result');
  if(result.search(/[0-9]/) === -1){
    cE();
  }
  if (result.length !== 0){
    result = result.slice( 0, result.length-1);
  }
  x.innerHTML = result;
}
function c(){
  if (result.length != 0){
    result = "";
  }
  document.getElementById('result').innerHTML = result;
}
function cE(){
  result = "";
  formula = "";
  lastResult = 0;
  lastOperator = "+";
  displayResult(result);
  displayFormula(formula);
}
function solving(a, op, b){
  switch (op) {
    case "-":
        subtract(a, b);
        break;
    case "+":
        plus(a, b);
        break;
    case "*":
        multiply(a, b);
        break;
    default:
        divide(a, b);
  }
}
function subtract(a, b){
  lastResult = Number(a) - Number(b);
}
function plus(a, b){
  lastResult =  Number(a) + Number(b);
}
function divide(a, b){
  if (b === "0"){
    lastResult = "Divided by zero!!";
  } else{
    lastResult = Number(a) / Number(b);
  }
}
function multiply(a, b){
  lastResult = Number(a) * Number(b);
}
function equalPressing(){
  solving(lastResult, lastOperator, result);
  if (isNaN(lastResult)){
    displayFormula("");
    result = "";
    displayResult(lastResult);
  } else{
    result = result + " " + "=";
    displayFormula("");
    result = "";
    displayResult(lastResult);
  }
}
function isSignOfNum(op){
  return (op==="-"||op==="+")&&(result==="");
}
