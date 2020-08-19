var formula = "";
var fForDisp = "";
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
function addFor(op){
  if(num === ""){
    formula +=" " + op + " ";
  } else{
    formula += Number(num) + " " + op + " ";
  }
}
function dispFor(n){
  let x = document.getElementById('formula');
  if(fForDisp === "" && num === ""){
    x.style.borderBottom = "none";
  } else{
      x.style.borderBottom = "1px solid #014552";
  }

  fForDisp += n;
  num = "";
  dispNum("");
  x.innerHTML = fForDisp;
}
function getNum(x){
  if(fForDisp.search(/=/)!==-1){
    c();
  }
  let n = x.innerHTML;
  if(n==="."&&num.search(/\./)!==-1){}
  else {
    dispNum(n);
  }
}
function getOp(x){
  let op = x.innerHTML;
  let n = "";
  if(fForDisp.search(/=/)!==-1){
    if(result === NaN){
      c();
    } else{
      c();
      num = result;
      addFor(op);
      dispFor(result + " "+ op +" ");
    }
  } else{
    if(isNumSign(op)){
      dispNum(op);
    } else{
      if(formula.charAt(formula.length -2).search(/\d/)===-1&&num===""){
        formula = formula.slice(0,formula.length-2);
        fForDisp = fForDisp.slice(0,fForDisp.length-2);
        n = op + " ";
      } else{
        n = Number(num)+ " "+ op +" ";
      }
      addFor(op);
      dispFor(n);
    }
  }

}
function perc(){


}
function del(){
  if(num.length>0){
      num = num.slice(0,num.length-1);
  }
  if(fForDisp.search(/=/)!==-1){
    c();
  } else{
    dispNum("");
  }
}
function c(){
  formula = "";
  fForDisp = "";
  num = "";
  dispFor("");
}
function cE(){
  num = "";
  dispNum("");
}
function formatFor(){
  let op = formula.slice(formula.length-2,formula.length-1);
  if(op.search(/\d/)===-1){
    formula = formula.slice(0,formula.length-2);
    fForDisp = fForDisp.slice(0,formula.length-2);
  }
}
function equal(){
  if(num === ""){
    formatFor();
  }
  num = ifDot(num);
  formula += " " + Number(num);
  result = eval(formula);
  dispFor(Number(num)+" =");
  cE();
  dispNum(result);
}
function ifDot(n){
  if(n==="."){
    return "0";
  }else {
    return n;
  }
}
function isNumSign(op){
  let c = ((op==='+')||(op==='-'));
  if(c && num === ""){
    return true;
  } else if(c && (num === "+"||num === "-")){
    num = "";
    return true;
  } else{
    return false;
  }
}
function perc(){
  if(fForDisp.search(/=/)!==-1){
    c();
    num =Number(result)*0.01;
    dispNum("");
  } else{
    num = Number(num) * 0.01;
    dispNum("");
  }
}
function square(){
  if(fForDisp.search(/=/)!==-1){
    c();
    num = Math.pow(Number(result),2);
    dispNum("");
  } else{
    num = Math.pow(Number(num),2);
    dispNum("");
  }
}
function onePerX(){
  if(fForDisp.search(/=/)!==-1){
    if(Number(result)===0){
      c();
      num = "Cannot divide by zero!";
      dispNum("");
    } else{
      c();
      num = Math.pow(Number(result),2);
      dispNum("");
    }
  } else{
    if(Number(num)===0){
      c();
      num = "Cannot divide by zero!";
      dispNum("");
    } else{
      num = Math.pow(Number(num),2);
      dispNum("");
    }
  }
}
function squaredRoot(){
  if(fForDisp.search(/=/)!==-1){
    if(Number(result)<0){
      c();
      num = "Invalid number!";
      dispNum("");
    } else{
      c();
      num = Math.sqrt(Number(result));
      dispNum("");
    }
  } else{
    if(Number(num)<0){
      c();
      num = "Invalid number!";
      dispNum("");
    } else{
      num = Math.sqrt(Number(num));
      dispNum("");
    }
  }
}










function hihi(){
  document.getElementById('haha').innerHTML = formula;
}
