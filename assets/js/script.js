// function calcul(DC1,DC2,Ds,result) {
//    DC1 = Number(document.getElementById("number1").value);
//    DC2 = Number(document.getElementById("number2").value);
//     Ds = Number(document.getElementById("number3").value);

//    result = DC1 + DC2 + Ds;
//   document.getElementById("resultat").value= result;

// }
// let btn = document.querySelector("#send");
// btn.addEventListener("click", calcul);


function calculNombreJour(month,year){
month = month-1
let date = getDaysInMonth(year,month)
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() - 1);
let days = date.getDate();
// on recupere le jour du mois avec la methode getDate

 month = document.getElementById("mois").value
 year = document.getElementById("annee").value
 document.querySelector("#valider").value = days
 console.log(date)
}
let btn = document.querySelector("#submit")
btn.addEventListener("click",calculNombreJour)


