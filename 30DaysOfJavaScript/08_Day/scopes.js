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
console.log(person.siblings[0].name) //meltem

console.log(person['phone number']) //45094580

//illa '...' şeklinde olanlara erişebiliriz diye bir şey yok name surname de de sonuç verir
console.log(person['name']) //tayfun

//BU KULLANIM KODLARI DİNAMİK HALE GETİRİR. aşağıdaki gibi bir kullanımla çıktı almak istediğiniz değerleri dinamik bir şekilde yazabilirsiniz: 
let keyName='name'
console.log(person[keyName]) //tayfun 

