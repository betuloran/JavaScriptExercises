//Destructuring and Spread:

//Destructuring: Yıkma, dizileri ve nesneleri paketinden çıkarmanın ve farklı bir değişkene atamanın bir yoludur.
//1:Destructing Arrays - dizileri yok etme
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) //Asabeneh Brook David John

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
// ["HTML", "CSS", "JS", "React"]
// ["Node", "Express", "MongoDB"]


//Dizideki değerlerden birini atlamak istersek ek virgül kullanırız. Virgül, söz konusu dizindeki değerin atlanmasına yardımcı olur:
const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 is omitted

console.log(numOne, numThree) // 1 3

//örn: Bu kod, nums dizisindeki ilk üç elemanı ayrı değişkenlere atar ve geri kalan tüm elemanları başka bir diziye (rest) toplar.
//Bu işlem için destructuring assignment (dağıtma ataması) ve spread operatörü kullanılır.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //Dizi Tanımlama
let [num1, num2, num3, ...rest] = nums //Destructuring Assignment ve Spread Operatörü Kullanımı
//...rest, nums dizisindeki geri kalan tüm elemanları bir dizi olarak toplar ([4, 5, 6, 7, 8, 9, 10])
console.log(num1, num2, num3)
console.log(rest)
//spread operatörü (...) burada destructuring assignment (dağıtma ataması) içinde kullanılıyor. bir dizi veya nesne öğelerini ayrıştırır 
//ve bunları ayrı ayrı elemanlara ayırır.

//Destructuring Object - nesneyi yok etme 
const rectangle = {     // rectangle1 adında bir nesne tanımlanmıştır.
  width: 20,           // width anahtardır 20 ise value(değer)
  height: 10,          // height anahtardır  10 ise value(değer)
  area: 200           // area anahtardır   200 ise value(değer)
}
let { width, height, area, perimeter } = rectangle  //yapılandırma perimeter değişkeni ile bozuldu
console.log(width, height, area, perimeter)  //20 10 200 undefined

//Anahtar nesnede bulunamazsa değişken tanımsız olarak atanacaktır. Bazen anahtar nesnenin içinde olmayabilir, 
//bu durumda deklarasyon sırasında varsayılan bir değer verebiliriz:
const rectangle2 = {
  width1: 20,
  height1: 10,
  area1: 200
}
let { width1, height1, area1, perimeter1 = 60 } = rectangle2

console.log(width1, height1, area1, perimeter1) //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

//Object parameter without destructuring - yapıyı bozmadan nesne parametresi kullanımı
const rect = {
  width: 20,
  height:10
}
const calculatePerimeter = rectangle =>{
  return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect)) //60 
//Destructuring kullanarak, calculatePerimeter fonksiyonunun içindeki rectangle.width ve rectangle.height gibi ifadeler yerine
// doğrudan width ve height kullanabildik. Bu, kodun daha okunabilir ve kısa olmasını sağladı.