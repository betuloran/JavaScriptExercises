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


//