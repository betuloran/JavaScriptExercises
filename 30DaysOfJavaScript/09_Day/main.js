//CALLBACK : callback, başka bir işleve parametre olarak aktarılabilen bir işlevdir. Aşağıdaki örneğe bakın:
// bir sayının küpünü hesaplamak için bir geri çağırma(callback) fonksiyonu kullanır.Kod, bir sayının karesini 
// alan bir fonksiyon(fonksiyon) ve bu fonksiyonu kullanarak bir sayının küpünü hesaplayan başka bir fonksiyon(cube) tanımlar.

const fonksiyon = number => number ** 2   // 2 kez üssünü al yani 3*3*3

function cube(callback, number) { //callback ve number fonksiyonu alıyor
  return callback(number) * number
}
console.log(cube(fonksiyon, 3))

//diğer kullanım şekli 1:
//bir geri çağırma işlevi, işlevin adı herhangi bir ad olabilir
// const callback = (n) => {
//     return n ** 2
//   }

//  // diğer işlevi geri arama olarak alan işlev
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//
//   console.log(cube(callback, 3))


// RETURNING FUNCTION: Geri dönüş fonksiyonu: Yüksek dereceli fonk.lar, fonksiyonu bir değer olarak döndürür.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

//örnek
const a = s1 => {
  const b = s2 => {
    const c = s3 => {
      return s1 + s2 + s3
    }
    return c
  }
  return b
}
//console.log(a(5)(10)(20)) //35

const numbers = [1, 3, 5, 7, 9]
let total = 0
let calculate = number => total += number //number dizi içindeki sayıları temsil ediyor.
numbers.forEach(calculate)
console.log(total)  //25

//Yukarıdaki kullanımın iki şekli var kısaca:
//1:
const numbers1 = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  arr.forEach(function (element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))

//2:
const numbers2 = [1, 2, 3, 4, 5]
const sumArray2 = arr => {
  let sum = 0
  const callback = function (element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers2))


//SETTING TIME:
//JavaScript'te bazı etkinlikleri belirli bir zaman aralığında yürütebilir veya
//bazı etkinlikleri yürütmek için belirli bir süre planlayabilir (bekleyebiliriz).

//setInterval: belli aralıklarla çalışan fonksiyon: mesela her 5 sn'de 1 çalışacak şekilde ayarlanabilir. ınterval ing'de aralık anlamına gelir.
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s (her saniyede hello yazdrıyor)

//setTimeout: belirli bir süreye kadar mesela bir kod bloğunu şu andan 10 sn sonra çalışacak şekilde ayarlarız 
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.(2 saniye bekledikten sonra merhaba yazdırıyor.)


//FUNCTIONAL PROGRAMMING (FONKSİYONEL PROGRAMLAMA):
//forEach ' in farklı kullanım şekilleri (hepsi aynı sonucu verir)
// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

//örnek:
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase())) //FINLAND DENMARK SWEDEN NORWAY ICELAND

//map fonksiyonu: Bir dizi öğesini yineleyin ve dizi öğelerini değiştirin.
const  names= ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase) //['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

//filter fonk: Filtreleme koşullarını tam olarak dolduran öğeleri filtreleyin ve yeni bir dizi döndürün.

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesContainingLand = countries2.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand) //sonu land ile bitenleri filtreledik: finland ireland

//every fonk: tüm öğelerin bir açıdan benzer olup olmadığını kontrol edin. Boolean değerini döndürür
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names3.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr) //true

//find: Koşulu karşılayan ilk öğeyi döndür
//örn
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age) //18

//örn
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score) //{ name: "Asabeneh", score: 95 }

//findIndex: Koşulu karşılayan ilk öğenin konumunu döndürür
const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages1 = [24, 22, 25, 32, 35, 18]

const result = names5.findIndex((name) => name.length > 7)
console.log(result) // 0 -asabeneh 0.indexte old için
 
const age1 = ages1.findIndex((age) => age < 20)
console.log(age1) // 5

//some: Bazı öğelerin bir açıdan benzer olup olmadığını kontrol edin. Boole değerini döndürür
const names6 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

//EVERY VE SOME FONKSİYONLARININ FARKI:
// every() fonksiyonu
// Dizinin tüm öğelerinin verilen koşulu karşılayıp karşılamadığını belirlemek için kullanılır.

// some() fonksiyonu
// Dizinin en az bir öğesinin sağlanan ölçütü karşılayıp karşılamadığını belirlemek için kullanılır.

// every() ve some() fonksiyonunun farkı
// Herhangi bir koşul sağlanırsa some() fonksiyonu true değerini döndürmesi, ancak bunların tümü doğruysa every() fonksiyonunun true, döndürmesidir.

//SOME:
function isnumbereven(element) {
  return (element % 2 == 0);
}

function print() {
  var arr = [ 4, 3, 13, 43, 58 ];

  // sadece bir eleman koşulu sağlıyorsa
  var value = arr.some(isnumbereven);
  console.log(value);  // output true
}
print();

//EVERY:
function isnumbereven2(element) {
  return (element % 2 == 0);
}

function print() {
  var array = [ 4, 3, 13, 43, 58 ];

  // bütün numaraları kontrol etme
  var value_two = array.every(isnumbereven2);
  console.log(value_two);// output false
}

print();

//sort fonksiyonu: bir dizinin ( array ) sıralanması için kullanılan fonksiyondur.
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted