//Bir fonksiyonun nasıl bildirileceğini ve nasıl çağrılacağını görelim:

function functionName() {
    // code goes here
}
functionName() // fonksiyonun ismiyle ve parantezlerle çağrılması

//PARAMETRESİZ FONKSİYON: Fonksiyon parametre olmadan bildirilebilir.
//örnek: parametresiz fonksiyon, sayıyı kare yapan fonksiyon:
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square() //4 : bir fonksiyonun yürütülebilmesi için ismiyle çağrılması gerekir

function printFullName() {
    let name = 'betül'
    let surname = 'oran'
    space = ' '
    fullName = name + space + surname
    console.log(fullName)
}
printFullName() //betül oran

// Burada değeri yazdırmak yerine fonksiyona döndürüyoruz:
function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName()) //Asabeneh Yetayeh

//Bir fonksiyonda farklı veri tiplerini (sayı, string, boolean, nesne, fonksiyon) parametre olarak iletebiliriz:
// 1 PARAMETLİ FONKS:
// function functionName(parm1) {
//     //code goes her
// }
// functionName(parm1) // gereken bir argümanı çağırırken veya çağırırken

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
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20)
//VEYA: 
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(sumTwoNumbers(10, 20))

function printFullNames(name, lastName) {
    return `${name} ${lastName}`
}
console.log(printFullNames('betül', 'oran')) //betül oran

//Birçok parametreli fonksiyon:
// function functionName(parm1, parm2, parm3,...){
//     //code goes here
//   }
//   functionName(parm1,parm2,parm3,...) 

function sumArrayValues(arr) {  //!!!!!!!!!!!!! ÖNEMLİ 
    let sum = 0; //sum adında bir değişken tanımla ve başlangıç değerini 0 olarak ata
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];          
let result = sumArrayValues(numbers);
console.log(result); // 15

//Sınırsız sayıda parametreye sahip fonksiyon:
function sumAllNums() {
    console.log(arguments) //arguments nesnesini konsola yazdırmak için bir fonksiyon tanımlandı
}//Bu kod, fonksiyon çağrıldığında arguments nesnesini konsola yazdırır. arguments nesnesi, fonksiyona geçirilen tüm argümanları içeren bir dizi benzeri nesnedir.

sumAllNums(1, 2, 3, 4) //CIKTI: Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sumAllNums() { //Sonrasında da, arguments nesnesini kullanarak tüm argümanların toplamını hesaplayan bir fonksiyon tanımlandı
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

