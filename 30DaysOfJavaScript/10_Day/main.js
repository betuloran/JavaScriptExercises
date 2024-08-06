
// SET: JavaScript'te benzersiz değerleri saklayan bir veri yapısıdır.
//new Set(languages) ifadesi, languages dizisini bir Sete dönüştürür.Bu işlem, dizideki tüm tekrar eden öğeleri otomatik olarak kaldırır 
//ve sadece benzersiz öğeleri saklar.

//Boş bir küme oluşturma:
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages) //setOfLanguages nesnesini konsola yazdırır. Bu, languages dizisindeki benzersiz dillerin bir listesini gösterecektir.
//çıktı: Set(4) {"English", "Finnish", "French", "Spanish"}


//Bir kümeye öğe ekleme:
const companies = new Set() // creating an empty set-boş küme oluştur
console.log(companies.size) // 0 (empty)

companies.add('Google') // add element to the set- kümeye öğe ekleniyor
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set -artık kümede 5 öğe var 
console.log(companies)     //Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

//We can also use loop to add element to a set. - bir kümeye öğe eklemek için döngü de kullanabiliriz. Bu kod parçacığı, Set veri yapısını 
//kullanarak bir dizi içerisindeki tüm öğeleri bir Set içerisine ekler. 
const companies1 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set() //setOfCompanies isimli boş bir Set oluşturur. Bu, başta hiçbir öğe içermez.
for (const company of companies1) { //for...of döngüsü kullanarak companies dizisindeki her öğe (company) üzerinde iterasyon yapar.
  setOfCompanies.add(company) //Her bir company değerini setOfCompanies setine ekler.
}//çıktı: Set(5) {'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

//Deleting an element a set - bir öğe kümesinin silinmesi: bir kümeden bir elemanı silme yöntemini kullanarak silebiliriz.
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

//Checking an element in the set- kümedeki bir öğeyi kontrol etme (var mı yok mu diye-boolean değer)
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

//Clearing the set - tüm elemanları silme
companies.clear()
console.log(companies) //Set(0) {size: 0}

//İKİ KÜMENİN BİRLEŞİMİNİ BULMAK İÇİN SET KULLANILABİLİR: 
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]
let f = [...d, ...e]

let D = new Set(d)
let E = new Set(e)
let F = new Set(f)

console.log(F) // Set(6) {1,2,3,4,5,6}

//İKİ KÜMENİN KESİŞİMİNİ BULMAK İÇİN SET KULLANILABİLİR: 
let a = [1, 2, 3, 4, 5] //dizileri tanımlama
let b = [3, 4, 5, 6]

let A = new Set(a) //set oluşturma
let B = new Set(b)

let c = a.filter((num) => B.has(num))//a dizisindeki her bir eleman (num) için, bu elemanın B setinde olup olmadığı kontrol edilir(B.has(num))
let C = new Set(c) //Eğer num(sayı) B setinde bulunuyorsa num, c dizisine eklenir.

console.log(C) //Set(3) {3, 4, 5}


//MAP : 
//Creating an Map from array -diziden map oluşturma
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)      //Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size) //3

//Adding values to the Map - map'e değer ekleme
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) //Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) //3

//Getting a value from Map - map'ten değer alma
console.log(countriesMap.get('Finland')) //Helsinki

//Checking key in Map - map'te anahtar kontrol etme
console.log(countriesMap.has('Finland'))//true

//Getting all values from map using loop -Döngü kullanarak haritadan tüm değerleri alma
for (const [country, city] of countriesMap){
  console.log(country, city)
 }