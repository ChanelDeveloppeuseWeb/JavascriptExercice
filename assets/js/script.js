// function calculNombreJour(month){
// if (month == 4, 6, 9, 11 ){

// document.querySelector("#valider").value ="le nombre de jour est de 30 jours"

// }else if(month ==  1, 3, 5, 7, 8, 10 , 12){

// document.querySelector("#valider").value ="le nombre de jour est de 31 jours"

// }
// else{
// document.querySelector("#valider").value ="le nombre de jour est de 28 jours"

// }
// }
// let btn = document.querySelector("#submit")
// btn.addEventListener("click",calculNombreJour)

function calculNombreJour(Nj,month,annee){
    month = Number(document.getElementById("mois").value)
    annee = Number(document.getElementById("annee").value)
    switch(month){
        case 1:
            case 3:
            case 5:
            case 7:
            case 8:
                case 10:
                    case 12:
                        Nj= 31;
                        break;
                        case 4:
                        case 6:
                        case 9:
                            case 11:
                                Nj = 30;
                                break;
                                case 2:
                                    if(annee%4==0){
                                        Nj= 29 
                                    }else{
                                        Nj=28
                                    }
    }
        document.querySelector("#valider").value = "le nombre de jour est " + Nj

}
let btn = document.querySelector("#submit")
btn.addEventListener("click",calculNombreJour)





