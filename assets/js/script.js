function calculNombreJour(month,year){
month = month-1
let date = new date(year,month)

// En javascript les mois commence de 0-11

date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() - 1);
let days = date.getDate();
month = document.getElementById("mois").value
 year = document.getElementById("annee").value
 document.querySelector("#valider").value = days
 console.log(days)
// on recupere le jour du mois avec la methode getDate()
// setMonth permet de passer au mois suivant
// setdate pour mettre la date au dernier jour du mois

 
}
let btn = document.querySelector("#submit")
btn.addEventListener("click",calculNombreJour)






