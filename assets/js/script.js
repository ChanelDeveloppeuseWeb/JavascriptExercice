

function sum() {
  
  const numberOne = Number(document.getElementById("number1").value);
  const numberTwo = Number(document.getElementById("number2").value);
  const numberThree = Number(document.getElementById("number3").value);
  const Result = numberOne + numberTwo + numberThree;
  Somme = Result/3
  document.getElementById("result").value= Somme;
 }
 let btn = document.querySelector("#send");
 btn.addEventListener("click", sum);