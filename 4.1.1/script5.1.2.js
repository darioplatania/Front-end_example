function Operation1() {
    var x = prompt("Please insert the number..");

    if (!isNaN(x))
    {
      if(x % 2 == 0)
      {
        document.getElementById("op1").innerHTML = "<br>Il numero inserito e': " + x + " PARI";
      }
      else//(x % 2 != 0)
      {
        document.getElementById("op1").innerHTML = "<br>Il numero inserito e': " + x + " DISPARI";
      }
    }
    else
    {
      alert ("Inserire un numero Intero!")
      return false;
    }
}
