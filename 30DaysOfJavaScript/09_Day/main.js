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


console.log(a(5)(10)(20)) //35

// Returning function: Geri dönüş fonksiyonu: Yüksek dereceli fonk.lar, fonksiyonu bir değer olarak döndürür.
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
      return s1+s2+s3
    }
    return c
  }
  return b
}