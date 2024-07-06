//let name='tayfun'

ad = 'tayfun' //let const var ile tanımlamadıysan o zaman ad, window scope'un altında görünecektir
//console 'a wwindow.ad yazınca da 'tayfun' çıktısı verir

/*const ile oluşturan değişkenlerin değeri yeniden değiştirilemez ve yeni bir değer atanamaz.
değeri değiştirmen gereken yerlerde let değiştirilemeyecek yerlerde const kullan 
var yerine let ve const temiz kod yazmanı sağlar
*/

//boş nesne oluşturmak için :
// let person={}
// console.log(person) //{}

//kişi nesnesi, FirstName, LastName özelliklerine sahiptir. Özelliklerin veya anahtarların değeri bir dize, sayı, boolean, bir nesne,
// boş, tanımsız veya bir işlev olabilir.Bazı nesne örneklerini görelim. Her anahtarın nesnede bir değeri vardır. 
// const person = {
//     name: 'Tayfun',
//     surname: 'erbilen',
//     isMarried:false,
//     skills: [
//         'html',
//         'java',
//         'javascript'
//     ],
//     siblings: [
//         {
//             name: 'meltem',
//             surname: 'akça'
//         }
//     ]
// }
// console.log(person)


//Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:
//1:. kullanarak. Anahtar adı tek kelimeden oluşuyorsa ardından anahtar adı gelir
//2:köşeli parantez ve alıntı kullanarak

const person = {
    name: 'Tayfun',
    surname: 'erbilen',
    isMarried:false,
    test:{
deneme:'deneme text'
    },
    'phone number': 45094580,
    skills: [
        'html',
        'java',
        'javascript'
    ],
    siblings: [
        {
            name: 'meltem',
            surname: 'akça'
        }
    ]
}
console.log(person.name)
console.log(person.isMarried ? 'evli':'bekar')
console.log(person.test.deneme) //deneme text
console.log(person.skills) // ['html', 'java', 'javascript']
console.log(person.siblings) /*  bu çıktıda siblings dizisinde 0.elemanda nesne olduğunu söylüyor 
: 
{name: 'meltem', surname: 'akça'}
length
: 
1
[[Prototype]]
: 
Array(0) */

// nokta kullanılarak değerlere erişiliyor.
console.log(person.siblings[0].name) //meltem

//değere köşeli parantez ve anahtar adı kullanılarak erişilebilir. örneğin telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanıyoruz
console.log(person['phone number']) //45094580

//illa '...' şeklinde olanlara erişebiliriz diye bir şey yok name surname de de sonuç verir
console.log(person['name']) //tayfun

//BU KULLANIM KODLARI DİNAMİK HALE GETİRİR. aşağıdaki gibi bir kullanımla çıktı almak istediğiniz değerleri dinamik bir şekilde yazabilirsiniz: 
let keyName='name'
console.log(person[keyName]) //tayfun 

//Nesnenin farklı özelliklerinin değerlerine erişmek için this kelimesini kullanabiliriz:
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    isMarried:false,
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
      },
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  console.log(user.getFullName()) // Asabeneh Yetayeh

  //VERİLERİ DEĞİŞTİRMEK VE VERİ EKLEMEK
user.country = 'Finland'
user.title='developer'
user.skills.push('Java')
user.skills.push('SCSS')   //skills'e iki veri eklendi Java ve SCSS 
user.isMarried = true
user.firstName='Ali'

console.log(user)


user.getPersonInfo = function() {
    let skillsWithoutLastOne = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.at(-1) //Sondan birinci(yani sonuncu ) veriyi istedik 
  //  console.log(lastSkill) //Son veri SCSS'ti yukarıda pushlamıştık. 
  let skills = `${skillsWithoutLastOne}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\n 
  He lives in ${this.country}.\n 
  He teaches ${skills}.`
  return statement
  
}
console.log(user.getPersonInfo())  //SCSS (console.log(lastSkill) 'in çıktısı)
// Ali Yetayeh is a developer.
// He lives in Finland.
// He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Java, and SCSS.

const copyUser = Object.assign({}, user)
console.log(copyUser)

//bject.keys() kullanarak nesne anahtarlarını alma ::::
//Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır. 
const keys = Object.keys(copyUser)
console.log(keys) //['firstName', 'lastName', 'age', 'country', 'city', 'isMarried', 'skills', 'getFullName', 'title', 'getPersonInfo']

//Object.values: Bir nesnenin değerlerini dizi olarak almak için:::
const entries = Object.entries(copyUser)
console.log(entries)

//hasOwnProperty: Bir nesnede belirli bir anahtarın veya özelliğin mevcut olup olmadığını kontrol etmek için::
console.log(copyUser.hasOwnProperty('name')) //false
console.log(copyUser.hasOwnProperty('score')) //false


//EĞER OBJENİN İÇİNDEKİLERİ DEĞİŞTİRİLMESİN İSTERSEK ::
Object.freeze() //KULLAN