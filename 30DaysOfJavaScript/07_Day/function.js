//Bir fonksiyonun nasıl bildirileceğini ve nasıl çağrılacağını görelim:

function functionName(){
// code goes here
}
functionName() // fonksiyonun ismiyle ve parantezlerle çağrılması

//PARAMETRESİZ FONKSİYON: Fonksiyon parametre olmadan bildirilebilir.
//örnek: parametresiz fonksiyon, sayıyı kare yapan fonksiyon:
function square(){
    let num=2
    let sq=num*num
    console.log(sq)
}
square() //4 : bir fonksiyonun yürütülebilmesi için ismiyle çağrılması gerekir

function printFullName(){
    let name='betül'
    let surname='oran'
    space=' '
    fullName=name+space+surname
    console.log(fullName)
}
printFullName() //betül oran

// Burada değeri yazdırmak yerine fonksiyona döndürüyoruz:
function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName()) //Asabeneh Yetayeh

//Bir fonksiyonda farklı veri tiplerini (sayı, string, boolean, nesne, fonksiyon) parametre olarak iletebiliriz:
// 1 PARAMETLİ FONKS:
function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // gereken bir argümanı çağırırken veya çağırırken
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // tek argümanla çağrılmalı
  
  function square(number) {
    return number * number
  }
  console.log(square(10))

  //2 PARAMETLİ FONKS
  
