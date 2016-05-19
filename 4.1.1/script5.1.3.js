function Operation2() {

var x;
var y;
var z;
var t;
x = window.prompt("Inserisci il primo numero");
y = window.prompt("Inserisci il secondo numero");

if(!isNaN(x) && !isNaN(y))
  {
    x = x*1;
    y=y*1;
    z = x + y;
    t = x - y;
    window.alert("Somma = " + z);
    window.alert("Differenza = " + t);
  }

else
{
  alert ("Inserire un numero Intero!")
  return false;
}


}
