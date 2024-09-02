console.log('Merhaba Dünya'); // Merhaba Dünya

let email = "btlorn@hotmail.com"; 

console.log(email); // btlorn@hotmail.com

//Birleştirme

let ad = "Betül";
let soyad = "Oran";
let adSoyad = ad +" " +soyad;
console.log(adSoyad);// Betül Oran

//Karakterleri Çekme

console.log(adSoyad[2]); //t

//Kaç Karakter

console.log(adSoyad.length);
// if (adSoyad.length > 0) {

// }

//Methodlar

console.log(adSoyad.toUpperCase()); //  BETÜL ORAN
let kucukAdSoyad = adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad); //betül oran
console.log(adSoyad); //Betül Oran

let index = adSoyad.indexOf('B');
console.log("B nin bulundugu index:" + index); // B nin bulundugu index:0