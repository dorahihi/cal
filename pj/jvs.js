var formula = "";
var result = "";
var num = "";

function mosDown(x){
  x.style.background = "rgba(142,204,212,0.15)";
  x.style.color = "#C4D8DC";
}
function mosUp(x){
  x.style.background = "rgba(3,45,54,0.3)";
  x.style.color = "#C0F3FF";
}
function  dispNum(n){
  let x = document.getElementById('num');
  num += n;
  x.innerHTML = num;
}
function dispFor(op){
  let x = document.getElementById('formula');
  if ((formula === "")&&(num === "")){
        x.style.borderBottom = "none";
    } else{
        x.style.borderBottom = "1px solid #014552";
    }
    if(op === "="){
      formula +=" "+"=";
    } else{
      if(num === "."){
        num = "0";
      }
      formula += num +" "+ op +" ";
      num = "";
      dispNum("");
    }
  x.innerHTML = formula;
}
function getNum(x){
  let n = x.innerHTML;
  if (formula.search(/=/)!==-1){
    c()
    formula = "";
  }
  dispNum(n);
}
function getOp(x){
  let op = x.innerHTML;
  if (isNumSign(op)){
    dispNum(op);
  } else{
    if(formula.charAt(formula.length -2).search(/\d/)===-1&&num===""){
        formula = formula.slice(0,formula.length-2);
    }
    if (formula.search(/=/)!==-1){
      c()
      formula = result;
    }
    dispFor(op);
  }
}
function equal(){
  if(num === ""){
    formatFor();
  }
  num = ifDot(num);
  formula += " " + num;
  result = eval(formula);
  dispFor("=");
  cE();
  dispNum(result);
}
function del(){
  if(num.length>0){
    num = num.slice(0,num.length-1);
  }
  dispNum("");
}
function c(){
  formula = "";
  num = "";
  dispFor(formula);
  dispNum(num);
  formula = "";
}
function cE(){
  num = "";
  dispNum("");
}

function formatFor(){
  let op = formula.slice(formula.length-2,formula.length-1);
  if(op.search(/\d/)===-1){
    formula = formula.slice(0,formula.length-2);
  }
}
function ifDot(n){
  if(n==="."){
    return "0";
  }else {
    return n;
  }
}
function isNumSign(op){
  return ((op==='+')||(op==='-'))&&num==="";
}
