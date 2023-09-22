function nombreAbregee() {
  let quantity = document.getElementById("number1").value;
  let  result = "";
  let index = 0
  switch (true) {

    case quantity.toLowerCase().includes("k"):
      index = quantity.indexOf("k")
      result = quantity.slice(index)
      console.log(result)
      result = result + " * 1024";
      break;
    case quantity.toLowerCase().includes("m"):
      index = quantity.indexOf("m")
      result = quantity.slice(index)
      console.log(result)
      result = result + " * 1024 * 1024";
      break;
    case quantity.toLowerCase().includes("g"):
      index = quantity.indexOf("g")
      result = quantity.slice(index)
      console.log(result)
      result = result  + " * 1024 * 1024 * 1024";
      break;
    case quantity.toLowerCase().includes("t"):
       index = quantity.indexOf("t")
      result = quantity.slice(index)
      console.log(result)
      result = result + "* 1024 * 1024 * 1024 * 1024";
      break;

    default:
      result = `${quantity} `.trimEnd() + "K, M, G, T";
      break;
      
  }
  document.querySelector("#resultat").value = result;
}
// let btn = document.getElementById("send");
// btn.addEventListener("click", nombreAbregee());
