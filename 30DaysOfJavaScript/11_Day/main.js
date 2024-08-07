//Destructuring and Spread:

//Destructuring: Yıkma, dizileri ve nesneleri paketinden çıkarmanın ve farklı bir değişkene atamanın bir yoludur.
//1:Destructing Arrays - dizileri yok etme
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson) //Asabeneh Brook David John

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
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle //yapılandırma perimeter değişkeni ile bozuldu

console.log(width, height, area, perimeter) //20 10 200 undefined